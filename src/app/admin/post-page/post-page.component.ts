import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../shared/service/posts.service';
import {ActivatedRoute, Params, Routes} from '@angular/router';
import {Observable} from 'rxjs';
import {Post} from '../shared/components/interfaces';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post> = new Observable<Post>()

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.post$ = this.route.params.
      pipe(switchMap((params: Params) => {
        return this.postsService.getById(params.id)
    }))
  }

}
