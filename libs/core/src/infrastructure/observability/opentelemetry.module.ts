import { Module } from '@nestjs/common';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { FastifyInstrumentation } from '@opentelemetry/instrumentation-fastify';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { OpenTelemetryModule } from 'nestjs-otel';

const OpenTelemetryModuleConfig = OpenTelemetryModule.forRoot({
  metrics: {
    hostMetrics: true,
    apiMetrics: {
      enable: true,
      defaultAttributes: {
        // You can set default labels for api metrics
        custom: 'label',
      },
      ignoreRoutes: ['/favicon.ico'], // You can ignore specific routes (See https://docs.nestjs.com/middleware#excluding-routes for options)
      ignoreUndefinedRoutes: false, //Records metrics for all URLs, even undefined ones
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
  imports: [InstrumentationConfigModule, OpenTelemetryModuleConfig],
  controllers: [],
  providers: [],
})
export class OpenTelemetryConfigModule {}
