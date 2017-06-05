var  single = require('../app/js/singleton');

var expect = require('chai').expect;

describe('basic singleton',function(){
	it('basic test',function(){
		let singleobj = (single.sigletonObj.getInstance())===(single.sigletonObj.getInstance());
    	let singleWrong = (single.sigletonObjWrong.getInstance())===(single.sigletonObjWrong.getInstance());
    	expect(singleobj).to.be.true;
    	expect(singleWrong).to.be.false;

	});

});