import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {HttpClientModule} from '@angular/common/http';
import {FormComponent} from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PhotoComponent} from './photos/photo/photo.component';
import { ClickMeComponent } from './second/click-me/click-me.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FormComponent,
    PhotoComponent,
    ClickMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
