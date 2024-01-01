import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AuthModule } from 'src/app/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule, isDevMode } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: !isDevMode(), 
      autoPause: true, 
      trace: false, 
      traceLimit: 75, 
      connectInZone: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
