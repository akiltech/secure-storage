# Secure Storage

If you are used to working with `localstorage` and `sessionstorage` in your browser and you are tired of exposing some sensitive information. This module is made for you.

## Installation

#### NPM
```sh
$ npm install @akiltech/secure-storage --save
```

#### YARN
```sh
$ yarn add @akiltech/secure-storage
```

## Configuration

```typescript
import { SecureStorageModule, SecureStorageConfig } from '@akiltech/secure-storage';

const SECURE_STORAGE_CONFIG: SecureStorageConfig = {
  secretKey: {your_secret_key},
  encryptKey: false,
};

@NgModule({
  declarations: [],
  imports: [
    SecureStorageModule.forRoot(SECURE_STORAGE_CONFIG)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

## How to use
