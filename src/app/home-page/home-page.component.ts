import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../shared/service/posts.service';
import {Post} from '../admin/shared/components/interfaces';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts$: Observable<Post[]>

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.posts$ =  this.postsService.getAll()
  }

}
