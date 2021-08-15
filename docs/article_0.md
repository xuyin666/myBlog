---
title: 使用vuepress快速搭建个人博客
date: 2021-08-15
categories:
  - vuepress
tags:
  - 小册子
---



## 背景故事

看到大家都有属于自己的博客 用于知识分享 让我也产生了搭建属于我自己博客的想法 

其实很早之前 我就有用hexo搭建过属于自己的博客 因为没有好好记录搭建过程 最后完全遗忘了增添修改博客内容 所以最后完全荒废了 

这次 我从头再来 希望这次 我能好好维护 

---

在搭建前 我仔细分析了自己的需求 我需要搭建属于自己的博客 供自己使用 但是 我又不希望搭建博客这件事耗费我过多的精力 因为我只是想分享自己的一些观点或者知识 我并不不需要十分花里胡哨的页面(然后我还是花了不少时间来打理博客==) 

此外 因为最近开始了哔哩哔哩上关于vue这个前端框架的学习 所以我希望我选择的方向和vue或多或少有些联系 

于是我选择了vuepress 整个过程耗费了我接近20个小时 (俺也不知道为啥花了我这么多时间 时间都去哪了)



## 快速设置

如果有着快速搭建自己博客需求的朋友们

我的建议是直接克隆我的仓库 然后修改相关参数

接下来我跟朋友们展示如何操作



1. 克隆我的仓库 通过以下命令

```sh
git clone https://github.com/xuyin666/myBlog.git
```

然后需要进入到这个项目 并且下载必要的依赖

```
cd myBlog
npm i
```


2. 修改相关配置项

主要需要修改的配置文件有两个 ./README.md 以及 ./vuepress/config.js

修改./README.md

在 ./README.md 中

!["README.md"](/articleImg/article0_00.png)

- heroText 对应标题 在这里是“Etoile 鑫 的博客”
- tagline 对应子标题 在这里是 “Salut, ça va ?”
- heroImage: 对应logo 在这里是“神奇宝贝球”
- heroImageStyle 对应logo的样式 按个人兴趣看十分修改 
- bgImage: 对应背景图 在这里是皮卡丘的背景
- bgImageStyle: 对应背景图的样式

!["preview"](/articleImg/article0_01.png)

修改./vuepress/config.js

!["config.js"](/articleImg/article0_02.png)

在config.js中需要修改的地方

- title: 对应加载时候显示的标题
- description: 对应加载时候显示的描述语句

!["loadingImg"](/articleImg/article0_03.png)

做完以上的步骤 即可得到一个属于你自己的定制话网站啦

如果需要看本地的展示效果 我们只需要输入命令```npm run dev```

## 快速部署

接下来 我们一起研究如何把网站部署到github

首先需要登陆GitHub然后创建一个新的仓库
![""](/articleImg/article0_04.png)

然后将当前目录推送到GitHub上你的仓库

```
git remote add origin https://github.com/XXX/blog.git
git branch -M main
git push -u origin main
```
需要替换XXX为你自己的用户名

最后一步 需要修改./deploy.sh文件

![""](/articleImg/article0_05.png)

将这行代码中的xuyin666换成你自己的GitHub用户名

以后增添内容之后 只需要在执行命令 ```npm run deploy``` 你的修改就可以被服务器知道

## 参考网站

关于快速部署的内容 主要参考了博文 <https://www.jianshu.com/p/1f199ee49e4c>

### 结语

热烈欢迎大家的建议 这是我的第一篇博文 不一定能够达到大家的期望 

如果大家有什么疑问 欢迎大家在评论区留言

我会努力的提高博文的质量 谢谢大家的阅读



