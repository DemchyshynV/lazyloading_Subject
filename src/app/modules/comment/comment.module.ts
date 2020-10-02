import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import {CommentService} from './services';


@NgModule({
  declarations: [AllCommentsComponent, CommentComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers:[CommentService]
})
export class CommentModule { }
