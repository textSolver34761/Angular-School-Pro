import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostListItemComponent } from './component/post-list-item/post-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanvasDomModule } from 'angular-canvas';
import { GraphLineElement } from './model/class/graph-line-element';
import { CanvasComponent } from './component/canvas/canvas.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { AppareilComponentComponent } from './appareil-component/appareil-component.component';
import { FooterComponent } from './footer/footer.component';
import { CreateAppareilComponent } from './create-appareil/create-appareil.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { NoPageComponentComponent } from './no-page-component/no-page-component.component';
import { AuthGuard } from './gards/auth.guard';
import { AuthService } from './Service/auth.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    CanvasComponent,
    BlogComponentComponent,
    AppareilComponentComponent,
    FooterComponent,
    CreateAppareilComponent,
    AuthComponentComponent,
    NoPageComponentComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CanvasDomModule.forRoot(
      [
        GraphLineElement
      ])
    ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
