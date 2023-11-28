import { Module } from '@nestjs/common';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { FastifyInstrumentation } from '@opentelemetry/instrumentation-fastify';

@Module({})
export class OpenTelemetryModule {
  constructor() {
    const provider = new NodeTracerProvider();
    provider.register();

    registerInstrumentations({
      instrumentations: [
        new HttpInstrumentation(),
        new FastifyInstrumentation(),
      ],
    });
  }
}