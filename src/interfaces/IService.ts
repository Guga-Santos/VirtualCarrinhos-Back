interface IService<T> {
  create(obj:unknown):Promise<T>,
  read():Promise<T[] | null>
  readOne(_id:string):Promise<T>,
  update(_id:string, obj:Partial<T>): Promise<T | null>,
  delete(_id:string): Promise<T | null>,
}

export default IService;