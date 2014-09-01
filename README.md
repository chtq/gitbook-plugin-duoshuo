gitbook-plugin-duoshuo
======================

A comment hosting service for Web sites and online communities that uses a networked platform. 

多说平台的gitbook插件，给gitbook集成评论功能

how to use
----------

Add config in book.json, the config will be duoshuoQuery object as a global variable which used by duoshuo's code.

在book.json中添加设置，属性名为duoshuo，该对象将被设置为多说插件使用的全局变量duoshuoQuery

```json
{
    "plugins": [
        "duoshuo"
    ],
    "pluginsConfig": {
        "duoshuo": {
            "short_name": "your duoshuo's shortname",
            "theme": "default"
        }
    }
}
```

how to work
-----------

Load comment elements when gitbook's page.change event triggered.

由于gitbook特殊的页面加载方式，使用了官方提供的动态加载评论框的方法，具体描述见 [动态加载多说评论框的方法](http://dev.duoshuo.com/docs/50b344447f32d30066000147)
