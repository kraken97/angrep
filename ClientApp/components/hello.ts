import {Component} from '@angular/core';

@Component({
  selector: 'App',
  template: require('./hello.html'),
  styleUrls:['./hello.scss']
})
export class Hello {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
