// import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
// import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
// import { NodeSDK } from '@opentelemetry/sdk-node';
// import {
//   BasicTracerProvider,
//   ConsoleSpanExporter,
//   SimpleSpanProcessor,
// } from '@opentelemetry/sdk-trace-node';
// import { Resource } from '@opentelemetry/resources';
// import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// import {
//   PeriodicExportingMetricReader,
//   ConsoleMetricExporter,
// } from '@opentelemetry/sdk-metrics';

// export class Tracer {
//   private sdk: NodeSDK | null = null;

//   // url is optional and can be omitted - default is http://localhost:4318/v1/traces
//   //private exporter = new OTLPTraceExporter({ url: " http://localhost:4318/v1/traces" });

//   // private provider = new BasicTracerProvider({
//   //   resource: new Resource({
//   //     [SemanticResourceAttributes.SERVICE_NAME]: 'DEMO-APP',
//   //   }),
//   // });

//   public init() {
//     try {

//       const sdk = new NodeSDK({
//         resource: new Resource({
//           [SemanticResourceAttributes.SERVICE_NAME]: 'node app',
//           [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0',
//         }),
//         traceExporter: new ConsoleSpanExporter(),
//         metricReader: new PeriodicExportingMetricReader({
//           exporter: new ConsoleMetricExporter(),
//         }),
//       });

//       // // export spans to console (useful for debugging)
//       // this.provider.addSpanProcessor(
//       //   new SimpleSpanProcessor(new ConsoleSpanExporter()),
//       // );

//       // // export spans to opentelemetry collector
//       // this.provider.addSpanProcessor(new SimpleSpanProcessor(this.exporter));
//       // this.provider.register();

//       // this.sdk = new NodeSDK({
//       //   traceExporter: this.exporter,
//       //   instrumentations: [
//       //     getNodeAutoInstrumentations({
//       //       // Lets disable fs for now, otherwise we cannot see the traces we want,
//       //       // You can disable or enable instrumentation as needed
//       //       '@opentelemetry/instrumentation-fs': { enabled: false },
//       //     }),
//       //   ],
//       // });

//       this.sdk.start();

//       console.info('The tracer has been initialized');
//     } catch (e) {
//       console.error('Failed to initialize the tracer', e);
//     }
//   }
// }
