import {IUser} from '../interfaces';
import {apiBaseURL} from '../config';

export class UserService {
  static getAll(): Promise<IUser[]> {
    return fetch(`${apiBaseURL}/users/`).then((response) => response.json());
  }

  static get(id: number): Promise<IUser> {
    return fetch(`${apiBaseURL}/users/${id}`).then((response) =>
      response.json(),
    );
  }

  static create(data: IUser): Promise<IUser> {
    return fetch(`${apiBaseURL}/users/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }

  static update(id: number, data: IUser): Promise<number> {
    return fetch(`${apiBaseURL}/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }

  static remove(id: number): Promise<number> {
    return fetch(`${apiBaseURL}/users/${id}`, {
      method: 'DELETE',
    }).then(() => id);
  }
}
