import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post, User} from '../admin/shared/components/interfaces';
import {PostsService} from '../shared/service/posts.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup

  constructor(
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
    })
  }

  submit() {

    const post: Post = {
      title: this.form.get('title').value,
      content: this.form.get('content').value,
      author: this.form.get('author').value,
      date: new Date()
    }
    this.postService.create(post).subscribe(() => {
      this.form.reset()
    })
  }
}
