import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { AsyncLocalStorageContextManager } from '@opentelemetry/context-async-hooks';
import * as process from 'process';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import {
  CompositePropagator,
  HttpTraceContextPropagator,
  HttpBaggagePropagator,
} from '@opentelemetry/core';
import { B3InjectEncoding, B3Propagator } from '@opentelemetry/propagator-b3';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { Resource } from '@opentelemetry/resources';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-proto';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';

const traceExporter = new OTLPTraceExporter({
  url: 'http://otel-collector:4318/v1/traces',
  concurrencyLimit: 10,
});

const metricExporter = new OTLPMetricExporter({
  url: 'http://otel-collector:4318/v1/metrics',
  concurrencyLimit: 10,
});

const metricReader = new PeriodicExportingMetricReader({
  exporter: metricExporter,
  exportIntervalMillis: 1000,
});

const spanProcessor = new BatchSpanProcessor(traceExporter);

const otelSDK = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'node app',
    [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0',
  }),
  spanProcessor: spanProcessor,
  metricReader: metricReader,
  contextManager: new AsyncLocalStorageContextManager(),
  instrumentations: [getNodeAutoInstrumentations(), new NestInstrumentation()],
  textMapPropagator: new CompositePropagator({
    propagators: [
      new HttpTraceContextPropagator(),
      new HttpBaggagePropagator(),
      new B3Propagator(),
      new B3Propagator({
        injectEncoding: B3InjectEncoding.MULTI_HEADER,
      }),
    ],
  }),
});

export default otelSDK;
