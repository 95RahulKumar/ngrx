import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
// import { rootReducer } from './reducer';
import { movieReducer } from './reducer/movie-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { fetchPostReducer } from './components/post/postngrx/reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffets } from './components/post/postngrx/effets.service';
@NgModule({
  declarations: [AppComponent, UserComponent, PostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    // passing the rootReducer
    // StoreModule.forRoot(rootReducer),
    StoreModule.forRoot({ posts: fetchPostReducer }),
    EffectsModule.forRoot([PostEffets]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
