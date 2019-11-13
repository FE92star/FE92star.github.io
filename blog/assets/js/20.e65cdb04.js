(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{181:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://flutterchina.club/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter"),r("OutboundLink")],1)])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"flutter在window系统下开发地环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter在window系统下开发地环境搭建","aria-hidden":"true"}},[this._v("#")]),this._v(" Flutter在window系统下开发地环境搭建")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"flutter的应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter的应用","aria-hidden":"true"}},[this._v("#")]),this._v(" Flutter的应用")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("背景：Flutter是一种类似于"),r("code",[t._v("RN")]),t._v("的跨端项目，由"),r("code",[t._v("Google")]),t._v("基于"),r("code",[t._v("Dart语言")]),t._v("进行开发的一套"),r("code",[t._v("跨端开发的解决方案")])]),t._v(" "),r("li",[t._v("发展：2017年刚开始出来，到现在两年多的时间，其在Github上面的仓库已经被star四万多颗，并且国内大厂的应用包括淘宝的闲鱼项目，目前还处于高速发展阶段，官方还在快速迭代版本。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"flutter中文官网地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter中文官网地址","aria-hidden":"true"}},[this._v("#")]),this._v(" Flutter中文官网地址")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"对应环境搭建步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对应环境搭建步骤","aria-hidden":"true"}},[this._v("#")]),this._v(" 对应环境搭建步骤")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("安装"),r("code",[t._v("Flutter SDK")]),t._v("-最高效的方式是直接从github仓库直接拉取当前最稳定的版本——"),r("code",[t._v("git clone -b stable https://github.com/flutter/flutter.git")])]),t._v(" "),r("li",[t._v("下载稳定的SDK之后，不能安装到需要很高权限才能访问的地址中，然后配置对应的环境变量，按照官网的配置，将官方为中国搭建的临时镜像配置到用户变量或者环境变量都可以，同时需要将Flutter的bin文件夹的安装安装地址配置到"),r("code",[t._v("Path")]),t._v("环境变量中去，然后就可以运行"),r("code",[t._v("flutter doctor")]),t._v("检测flutter的环境是否齐全。")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" PUB_HOSTED_URL"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://pub.flutter-io.cn\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" FLUTTER_STORAGE_BASE_URL"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://storage.flutter-io.cn\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",{attrs:{start:"3"}},[r("li",[t._v("下载"),r("code",[t._v("Android Studio")]),t._v("作为开发的编辑器，地址为"),r("code",[t._v("https://developer.android.google.cn/studio")]),t._v("，为谷歌官方地址，下载安装之后会引导安装最新的"),r("code",[t._v("Android SDK")]),t._v("，这是flutter为安卓开发所必须的")]),t._v(" "),r("li",[t._v("安装SDK的时候，由于是外网的原因导致无法正常下载，所以按照"),r("code",[t._v("https://blog.csdn.net/qq_23599965/article/details/80910202")]),t._v("其中的第二种方案修改Host文件，ping查看国内哪个IP地址对接谷歌服务器最快，就将该地的IP地址加入到host文件中去即可；修改host文件的方式——"),r("code",[t._v("https://blog.csdn.net/yuanlaijike/article/details/79668711")]),t._v("，修改之后如何生效——"),r("code",[t._v("https://blog.csdn.net/zl1zl2zl3/article/details/83614745")])]),t._v(" "),r("li",[t._v("在编辑器"),r("code",[t._v("plugins")]),t._v("中下载"),r("code",[t._v("Flutter")]),t._v("和"),r("code",[t._v("Dart")]),t._v("两个插件")]),t._v(" "),r("li",[t._v("下载"),r("code",[t._v("Android模拟器")]),t._v("，主要用的是"),r("code",[t._v("genymotion")]),t._v("，这个是甲骨文公司开发的模拟器，顺带会安装"),r("code",[t._v("虚拟机")])]),t._v(" "),r("li",[t._v("安装"),r("code",[t._v("JAVA")]),t._v("环境，安装的版本是"),r("code",[t._v("1.8.0版本的 jre jdk")]),t._v("，下载地址——"),r("code",[t._v("https://www.oracle.com/technetwork/java/javase/downloads/index.html")]),t._v("，对应的是"),r("code",[t._v("Java SE 8u211/212")]),t._v("按照网上教程配置一堆的环境变量，安装地址不能更改，默认安装即可，否则有问题")]),t._v(" "),r("li",[t._v("根据提示快速创建flutter项目，同时将模拟器对接到编辑器中去")]),t._v(" "),r("li",[r("code",[t._v("run")]),t._v("项目，打开模拟器即可运行项目，支持热更新")])])}],!1,null,null,null);e.default=s.exports}}]);