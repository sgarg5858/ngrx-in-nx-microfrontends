import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '..';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getUsers()
  {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');

  }
}
