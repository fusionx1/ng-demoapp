import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,  Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { DataLayerService } from './services/data-layer.service';

const appRoutes: Routes  = [
  {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
  },
  {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
      path: 'databinding',
      component: DatabindingComponent
  },
  {
      path: 'services',
      component: ServicesComponent
  },
  {
      path: 'directives',
      component: DirectivesComponent
  },
  {
      path: 'posts',
      component: PostsComponent
  },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavComponent,
    DashboardComponent,
    PostsComponent,
    DatabindingComponent,
    DirectivesComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataLayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
