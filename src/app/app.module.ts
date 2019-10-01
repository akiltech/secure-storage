import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureStorageModule, SecureStorageConfig } from '@akiltech/secure-storage';

const SECURE_STORAGE_CONFIG: SecureStorageConfig = {
  secretKey: '3BhAPCKOBetWc4z4u76n6kdKVsZsuOZ9',
  encryptKey: false,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureStorageModule.forRoot(SECURE_STORAGE_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
