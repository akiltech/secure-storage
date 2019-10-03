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

### Session Storage

First of all, import the service

```typescript
import { SecureSessionStorageService } from '@akiltech/secure-storage';
```

### Local Storage

First of all, import the service

```typescript
import { SecureLocalStorageService } from '@akiltech/secure-storage';
```

### Available Methods

There are several methods to facilitate the use of a service, you should know that each method returns an `observable`.

#### GET

The `get` method allows you to retrieve the value of your recording.

| Parameter(s) | Response | Type |
|--------------|----------|------|
| `key` | `String` (key value) | Observable |


#### PUT

This method is used to record a value.

| Parameter(s) | Response | Type |
|--------------|----------|------|
| `key` and `value` | `Boolean` (true or false) | Observable |

#### HAS

If you want to check the existence of an element of a key this method will allow you to do so.

| Parameter(s) | Response | Type |
|--------------|----------|------|
| `key` | `Boolean` (true or false) | Observable |

#### DELETE

Deleted a specific key.

| Parameter(s) | Response | Type |
|--------------|----------|------|
| `key` | `Boolean` (true or false) | Observable |

#### CLEAN 

This method allows you to delete all the elements saved at the browser level in the `session` or `local` storage.

| Parameter(s) | Response | Type |
|--------------|----------|------|
| `nothing` | `Boolean` (true or false) | Observable |
