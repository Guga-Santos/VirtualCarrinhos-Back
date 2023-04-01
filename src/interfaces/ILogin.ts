export interface ILogin<T extends object> {
  findUser(obj: Partial<T>): Promise<T>
}