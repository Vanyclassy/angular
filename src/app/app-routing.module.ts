import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormComponent} from './form/form.component';
import {PhotoComponent} from './photos/photo/photo.component';
import {ClickMeComponent} from './second/click-me/click-me.component';


const routes: Routes = [
  {path: 'first-component', component: FirstComponent},
  {path: 'second-component', component: SecondComponent},
  {path: 'form-component', component: FormComponent},
  {path: 'photo-component', component: PhotoComponent},
  {path: 'click-me-component', component: ClickMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
