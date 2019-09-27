import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureStorageModule } from '@akiltech/secure-storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureStorageModule.forRoot({
      secretKey: '3BhAPCKOBetWc4z4u76n6kdKVsZsuOZ9',
      encryptKey: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
