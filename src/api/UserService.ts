import IUser from '../interfaces';

export class UserService {
  getAll(): Promise<IUser[]> {}
  get(id: number): Promise<IUser> {}
  update(id: number): Promise<number> {}
  remove(id: number): Promise<number> {}
}
