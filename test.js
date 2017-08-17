describe('DOM Tests', function () {
    it('page has a div with id mocha', function() {
        expect(document.getElementById('mocha')).to.not.equal(undefined);
    });

    it('page has the correct title', function() {
       expect(document.title).to.equal('Tests');
    });
});