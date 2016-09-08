
import 'reflect-metadata';
require('babel-polyfill');
import {expect} from 'chai';

 import {Hello} from './hello.ts';






describe("A suite is just a function", function() {
  
  var k =new Hello();


  it("and so is a spec", function() {
    
    var a = true;

    expect(k.hello).to.be.eq('hello');
  });
});

