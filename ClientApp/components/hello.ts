import {Component} from '@angular/core';

@Component({
  selector: 'App',
  template: require('./hello.html'),
  styles:[require('./hello.scss')]
})
export class Hello {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
