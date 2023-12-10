export interface IPrismaAssembler<T, D> {
  toPrismaModel: (domain: D) => T;
  toDomain: (prismaModel: T) => D;
}