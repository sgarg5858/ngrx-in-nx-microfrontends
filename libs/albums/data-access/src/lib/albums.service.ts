import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient:HttpClient) { }

  getAlbums():Observable<any[]>
  {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
