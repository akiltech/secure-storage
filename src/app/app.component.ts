import { Component } from '@angular/core';
import { SecureLocalStorageService } from '@akiltech/secure-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'akiltech-secure-storage';

  constructor(private localStorage: SecureLocalStorageService) {
    this.localStorage.put('token', '3BhAPCKOBetWc4z4u76n6kdKVsZsuOZ9').subscribe((res) => {
      console.log(res);
    });
  }
}
