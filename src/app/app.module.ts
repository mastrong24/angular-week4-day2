import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ImageListComponent } from './image-list/image-list.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { BookListComponent } from './book-list/book-list.component';
import { PenListComponent } from './pen-list/pen-list.component';
import { GeomatryListComponent } from './geomatry-list/geomatry-list.component'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'book-component', component: BookListComponent },
  { path: 'pen-component', component: PenListComponent },
  { path: 'geomatry-component', component: GeomatryListComponent },
  {path: '', redirectTo: '/book-component', pathMatch: 'full'},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ImageListComponent,
    FirstComponent,
    SecondComponent,
    BookListComponent,
    PenListComponent,
    GeomatryListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/