//FIX to the error : "expect is not defined"
var expect = chai.expect;

describe('AjaxCreateTest', function () {
    beforeEach(function () {
        this.xhr = new tddjs.ajax.create();
    });

    it('test should return XMLHttpRequest object', function () {
        expect(this.xhr.readyState).to.be.ok;
        expect(tddjs.isHostMethod(this.xhr,"open")).to.be.ok;
        expect(tddjs.isHostMethod(this.xhr,"send")).to.be.ok;
        expect(tddjs.isHostMethod(this.xhr,"setRequestHeader")).to.be.ok;
        
    });
})