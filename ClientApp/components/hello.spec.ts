import {expect} from 'chai';


describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).to.be.eq(true);
  });
});