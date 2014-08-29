require(["gitbook", "jQuery"], function(gitbook, $) {
    var resetDuoshuo = function() {
        var threadId = location.pathname.replace(/\//g,'_');
        var duoshuoDiv = '<div class="ds-thread" data-thread-key="' + threadId + '" data-title="' + document.title + '" data-url="' + location.href + '"></div>';
        $(".book-body .page-inner").append(duoshuoDiv);
    }

    gitbook.events.bind("start", function(e, config) {
        var duoshuo = config.duoshuo || {};
        window.duoshuoQuery = {short_name:duoshuo.shortname};
        (function() {
            var ds = document.createElement('script');
            ds.type = 'text/javascript';ds.async = true;ds.charset = 'UTF-8';
            ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
        })();
    });

    gitbook.events.bind("page.change", resetDuoshuo);
});
