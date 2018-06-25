const wrap = require('./wrap')
const { chai } = require('chai');

describe('wrap', function(){
  it('return the string with line breaks', function (){
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor \n
      sit eu amet, elit na \n
      magna sem amet nulla \n
      vel purus ac ligula.");
  });
})
