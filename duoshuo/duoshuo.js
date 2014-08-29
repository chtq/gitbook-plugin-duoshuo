require(["gitbook", "jQuery"], function(gitbook, $) {

    var loadDuoshuoDynamic = function() {
        var stylesheetURL = getStylesheetURL();
        DUOSHUO.injectStylesheet(stylesheetURL);

        setTimeout(function(){
            var threadId = location.pathname.replace(/\//g,'-');
            var duoshuoDiv = document.createElement('div');
            duoshuoDiv.setAttribute('data-thread-key', threadId);
            duoshuoDiv.setAttribute('data-url', location.href);
            DUOSHUO.EmbedThread(duoshuoDiv);
            $(".book-body .page-inner").append(duoshuoDiv);
        },1000)
    }

    var getStylesheetURL = function() {
        if (duoshuoQuery.stylesheet) {
            return duoshuoQuery.stylesheet;
        }
        var theme = duoshuoQuery.theme || DUOSHUO.theme || DUOSHUO.site.data.theme || "default";
        if (theme === 'none') {
            return;
        }
        var staticPath = document.location.protocol + "//static.duoshuo.com";
        var themeCode = {
            "default": "d6149e1c",
            "dark": "c11b5925",
            "bluebox": "dbc0a9af"
        };
        return staticPath + "/styles/embed" + (theme ? "." + theme + ".css?" + themeCode[theme] : "." + duoshuoQuery.short_name) + ".css"
    }

    var loadDuoshuoScript = function() {
        var ds = document.createElement('script');
        ds.onload = loadDuoshuoDynamic;
        ds.type = 'text/javascript';
        ds.async = true;
        ds.charset = 'UTF-8';
        ds.src = document.location.protocol + '//static.duoshuo.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
    }

    gitbook.events.bind("start", function(e, config){
        window.duoshuoQuery = config.duoshuo || {};
        document.location.protocol == 'https:' ? 'https:' : 'http:';
    });

    gitbook.events.bind("page.change", function(e){
        console.log('change')
        loadDuoshuoScript()
    });

});
