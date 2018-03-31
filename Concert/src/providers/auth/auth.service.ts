import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
/*
  Generated class for the AuthProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
}