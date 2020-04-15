import {IUser} from '../interfaces';

export class UserService {
  getAll(): Promise<IUser[]> {
    return fetch(
      'https://jsonplaceholder.typicode.com/users/',
    ).then((response) => response.json());
  }

  get(id: number): Promise<IUser> {
    return fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    ).then((response) => response.json());
  }

  update(id: number, data: IUser): Promise<number> {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      body: {...data},
    }).then((response) => response.json());
  }

  remove(id: number): Promise<number> {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  }
}
