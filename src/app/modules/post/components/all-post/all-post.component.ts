import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services';
import {IPost} from '../../interfaces';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
posts: IPost[];
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(value => this.posts = value);
  }

}
