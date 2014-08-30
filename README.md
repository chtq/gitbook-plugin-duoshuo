gitbook-plugin-duoshuo
======================

a comment hosting service for Web sites and online communities that uses a networked platform. 

多说平台的gitbook插件，给gitbook集成评论功能

how to use
----------

add config in book.json, the config will be duoshuoQuery object as a global variable which used by duoshuo's code.

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
