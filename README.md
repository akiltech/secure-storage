# Secure Storage

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


@NgModule({
  declarations: [],
  imports: [
    SecureStorageModule.forRoot({
      secretKey: '3BhAPCKOBetWc4z4u76n6kdKVsZsuOZ9',
      encryptKey: false,
    })
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

## How to use
