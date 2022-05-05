import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, catchError, of } from 'rxjs';

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient:HttpClient) { }

  private usersBehaviorSubject = new BehaviorSubject<User[]|null>(null);
  users$ = this.usersBehaviorSubject.asObservable();

  private didApiWorkedSubject = new BehaviorSubject<boolean>(false);
  didApiWork$ = this.didApiWorkedSubject.asObservable();

  cachedUsers:User[]=[];
  
  getUsers()
  {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
    )
    .subscribe((users:User[])=>{
      this.usersBehaviorSubject.next(users);
      this.didApiWorkedSubject.next(true);
      this.cachedUsers=users;
    },(error)=>{
      this.didApiWorkedSubject.next(false);
      this.usersBehaviorSubject.next([]);
    })
  }
  filterUsers(text:string)
  {
    let users= this.cachedUsers.filter((user:User)=>user.name.includes(text));
    this.usersBehaviorSubject.next(users);
  }

}
