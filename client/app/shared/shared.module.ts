import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';


import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
   
   trigger('fadeInAnimation', [

       // route 'enter' transition
       transition(':enter', [

         
           style({ opacity: 0 }),

         
           animate('.3s', style({ opacity: 1 }))
       ]),
   ]);


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    /* Shared Modules */
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // Shared Components
    ToastComponent,
    LoadingComponent
  ],
  declarations: [
    ToastComponent,
    LoadingComponent
  ],
  providers: [
    ToastComponent
  ]
})
export class SharedModule { }
