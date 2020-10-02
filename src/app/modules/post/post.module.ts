import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AllPostComponent} from './components/all-post/all-post.component';
import {PostComponent} from './components/post/post.component';
import {PostService} from './services';
import {ShareModule} from '../../../share/share.module';


@NgModule({
  declarations: [AllPostComponent, PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    ShareModule
  ],
  providers: [PostService]
})
export class PostModule {
}
