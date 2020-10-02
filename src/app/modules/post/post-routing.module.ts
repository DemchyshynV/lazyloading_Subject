import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllPostComponent} from './components/all-post/all-post.component';

const routes: Routes = [
  {path: '', component: AllPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
