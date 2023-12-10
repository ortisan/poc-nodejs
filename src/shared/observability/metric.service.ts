export abstract class AbstractMetricService {
  abstract incrementRequestCounter(...labels: string[]): void;
}
