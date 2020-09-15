import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}


@Injectable({
  providedIn: 'root'
})

export class TestService {
  props: any;

  constructor(private http: HttpClient) {
  }


  gePhoto(): Observable<IPhoto[]> {
    const url = 'http://jsonplaceholder.typicode.com/photos';
    return this.http.get<IPhoto[]>(url);
  }
}
