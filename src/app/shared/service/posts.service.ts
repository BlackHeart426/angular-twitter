import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FbCreateResponse, Post} from '../../admin/shared/components/interfaces';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(private http: HttpClient) {

  }

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDbUrl}/post.json`, post)
      .pipe(
        map((response: FbCreateResponse) => {
            return {
              ...post,
              id: response.name,
              date: new Date(post.date)
            }
          }
        )
      )
  }
}
