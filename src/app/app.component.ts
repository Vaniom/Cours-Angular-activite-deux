import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyCLdipZ5E1gICc-rA4JVeDv_Zd9ClRDXzA',
      authDomain: 'cours-angular-act-2.firebaseapp.com',
      databaseURL: 'https://cours-angular-act-2.firebaseio.com',
      projectId: 'cours-angular-act-2',
      storageBucket: 'cours-angular-act-2.appspot.com',
      messagingSenderId: '882173070981'
    };
    firebase.initializeApp(config);
  }
}
