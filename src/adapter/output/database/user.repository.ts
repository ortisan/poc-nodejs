export interface UserRepository {
  findUserByEmail(email: string): Promise<User | null>;
  createUser(user: User): Promise<void>;
}