var page = require('webpage').create();

page.open('index.html', function(status) {
   if (status === 'success') {
    var title = page.evaluate(function() {
        document.body.style.backgroundColor = 'blue';
        return document.title;
    });
    page.render(title + '.png');
   }
   phantom.exit();
});