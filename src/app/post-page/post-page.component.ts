import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../admin/shared/components/interfaces';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../shared/service/posts.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params.id)
      }))
  }

}
