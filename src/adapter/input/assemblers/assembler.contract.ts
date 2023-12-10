export interface IInputAssembler<T, D> {
  toDomain: (input: T) => D;
  toDto: (domain: D) => T;
}