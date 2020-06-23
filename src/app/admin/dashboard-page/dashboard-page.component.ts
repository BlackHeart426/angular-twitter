import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../shared/components/interfaces';
import {PostsService} from '../../shared/service/posts.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  posts$: Observable<Post[]> = new Observable<Post[]>();
  searchStr = ''

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.posts$ = this.postsService.getAll()
  }

  remove(id: string) {
    console.log('delete: ', id);
  }
}
