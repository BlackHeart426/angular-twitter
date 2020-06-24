import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Post} from '../shared/components/interfaces';
import {PostsService} from '../../shared/service/posts.service';
import {AlertService} from '../service/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  searchStr = ''
  posts: Post[] = []
  dSub: Subscription
  pSub: Subscription

  constructor(
    private postsService: PostsService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts
    })
  }

  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id)
      this.alert.warning('Post deleted')
    })
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
    if (this.dSub) {
      this.dSub.unsubscribe()
    }
  }
}
