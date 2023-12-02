import { Module } from '@nestjs/common';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { FastifyInstrumentation } from '@opentelemetry/instrumentation-fastify';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
// import { PrometheusMetricService } from './prometheus.service';
import { AbstractMetricService } from '@/shared/observability/metric.service';
import { OpenTelemetryModule } from 'nestjs-otel';

// @Module({
//   providers: [
//     {
//       provide: AbstractMetricService,
//       useClass: PrometheusMetricService,
//     },
//   ],
//   exports: [
//     {
//       provide: AbstractMetricService,
//       useClass: PrometheusMetricService,
//     },
//   ],
// })

const OpenTelemetryModuleConfig = OpenTelemetryModule.forRoot({
  metrics: {
    hostMetrics: true,
    apiMetrics: {
      enable: true,
    },
  },
});

@Module({})
class InstrumentationConfigModule {
  constructor() {
    const provider = new NodeTracerProvider();
    provider.register();

    registerInstrumentations({
      instrumentations: [
        new HttpInstrumentation(),
        new FastifyInstrumentation(),
        new NestInstrumentation(),
      ],
    });
  }
}

@Module({
  imports: [OpenTelemetryModuleConfig, InstrumentationConfigModule],
  controllers: [],
  providers: [],
})
export class OpenTelemetryConfigModule { }

