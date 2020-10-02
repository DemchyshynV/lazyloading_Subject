import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IUser} from '../modules/user/interfaces';
import {IPost} from '../modules/post/interfaces';
import {IComment} from '../modules/comment/interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private userData: BehaviorSubject<Partial<IUser>> = new BehaviorSubject<Partial<IUser>>({});
  private postData: BehaviorSubject<Partial<IUser>> = new BehaviorSubject<Partial<IUser>>({});
  private commentData: BehaviorSubject<Partial<IUser>> = new BehaviorSubject<Partial<IUser>>({});

  constructor() {
  }

  setUser(user: IUser): void {
    this.userData.next(user);
  }

  getUser(): Partial<IUser> {
    return this.userData.getValue();
  }

  setPost(post: IPost): void {
    this.postData.next(post);
  }

  getPost(): Partial<IPost> {
    return this.postData.getValue();
  }

  setComment(comment: IComment): void {
    this.commentData.next(comment);
  }

  getComment(): Partial<IComment> {
    return this.commentData.getValue();
  }
}
