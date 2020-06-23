import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {SearchPipe} from './pipe/search.pipe';

@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
  ],
  declarations: [
    SearchPipe
  ],
  exports: [
    HttpClientModule,
    QuillModule,
    SearchPipe
  ]
})

export class SharedModule {

}
