## 一些说明

> 文档、资料分享应用（目前只支持音频类资源），挂接微信企业号

> 运行前请先在以下文件填写企业号相关信息：

 * \App\src\config.js：wxConfig.appId

 * \Server\controllers\wxconfig.js：config.corpid、config.corpsecret

> 本地开发需修改默认端口号：

 * \App\config\index.js：dev.port

****

## 微信企业号应用开发入坑指南

## &sect; 热身~

 #### 1、官方文档
 * [微信企业号官网](https://qy.weixin.qq.com/)，个人开发者可以申请一个团体类型的企业号
 * [开发接口文档](http://qydev.weixin.qq.com/wiki/index.php?title=首页)，注意是企业号文档不是公众号的，虽然大同小异。
 附：[接口调试工具](http://qydev.weixin.qq.com/debug)
 * [微信web开发者工具](https://mp.weixin.qq.com/wiki/10/e5f772f4521da17fa0d7304f68b97d7e.html)，适配企业号和公众号开发

 #### 2、参考资料
 * [.Net之微信企业号开发](http://www.cnblogs.com/poplau/p/5816180.html)，学习下别人的踩坑经验
 * [微信开发工具使用教程](http://www.cnblogs.com/Leo_wl/p/5983030.html)
 * [如何保证access_token长期有效](http://www.csdn.net/article/2014-08-15/2821220-weixin)
 * [redirect_uri unauthorized错误](http://www.cnblogs.com/ywentao/p/5922822.html)

## &sect; 预备...跳！

#### 1、惯例先上图

#### 2、关键接口

#### 3、踩过的坑

****

> 指不定哪天会停用的我的企业号

![二维码](./Doc/二维码.jpg)
