import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FbCreateResponse, Post } from "./interfaces";

@Injectable({providedIn: 'root'})
export class PostService {

  constructor(
    private http: HttpClient
  ) {}

  create(post: Post): Observable<FbCreateResponse> {
    return this.http.post<FbCreateResponse>(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(
        map((response: FbCreateResponse) => {
          return {
            name: response.name
          }
        })
      );
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.fbDbUrl}/posts.json`)
      .pipe(
        map((response: {[key: string]: any}) => {
          return Object.keys(response).map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }))
          return [];
        })
      )
  }

}