
// import { AbstractMetricService } from '@/shared/observability/metric.service';
// import { Injectable } from '@nestjs/common';
// import { Counter, register } from 'prom-client';

// @Injectable()
// export class PrometheusMetricService extends AbstractMetricService {
//   private requestCounter: Counter;

//   constructor() {
//     super();

//     this.requestCounter = new Counter({
//       name: 'http_requests_total',
//       help: 'Total number of requests',
//     });
//     register.clear();
//     register.setDefaultLabels({
//       app: 'nestjs-prometheus-demo',
//     });
//     register.registerMetric(this.requestCounter);
//   }
//   incrementRequestCounter(...labels: string[]) {
//     this.requestCounter.inc();
//   }
// }