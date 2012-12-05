require.config({
    paths:{ isotope:'../lib/isotope'}
});
require(['jquery','isotope'], function($) {
    $(function() {
        $("#container").isotope({
            itemSelector:'.item',
            isAnimated: true
        });
    });
});

