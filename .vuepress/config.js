module.exports = {
  "title": "鑫仔的博客空间",
  "description": "汽水在打汽喔 请稍等 ≡ω≡",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon1.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "locales": {
    '/': {
      lang: 'zh-CN',
    },
  },
  "theme": "reco",
  "themeConfig": {
    "valineConfig": {
      appId: 'ehCIdykWorTAJxNnsGQBbTfK-MdYXbMMI',// your appId
      appKey: 'KrHKdgCE9DqYgGXoPnbycLBh', // your appKey
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于我",
        "icon": "reco-message",
        "link": "/docs/aboutMe/aboutMe.md"
      },
      {

        "text": "GitHub",
        "link": "https://github.com/xuyin666",
        "icon": "reco-github"
      }
    ],

    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "subSidebar": "auto",
    "sidebarDepth": "4",
    "author": "Etoile 鑫",
    "authorAvatar": "/logo.jpg",
    "record": "准备去备案中",
    "startYear": "2021"
  },
  // "markdown": {
  //   "lineNumbers": true
  // },
  // markdown: {
  //   // markdown-it-anchor 的选项
  //   anchor: { permalink: false },
  //   // markdown-it-toc 的选项
  //   toc: { includeLevel: [1, 2] },
  //   extendMarkdown: md => {
  //     // 使用更多的 markdown-it 插件!
  //     md.use(require('markdown-it-xxx'))
  //   }
  // },
  plugins: {
    // 'vuepress-plugin-sponsor': {
    //   // theme: 'simple',
    //   alipay: '/sponsor-qrcode/alipay.png',
    //   wechat: '/sponsor-qrcode/wechatpay.jpg',
    //   qq: '/sponsor-qrcode/qqpay.png',
    //   paypal: 'https://paypal.me/roiyin?locale.x=fr_FR',
    //   duration: 1500
    // },
    '@vuepress-reco/vuepress-plugin-kan-ban-niang' : {
      theme: ["whiteCat"],
      clean: true
    },
    'container': {
      // type: 'right',
      // defaultTitle: '',
      type: 'theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
    },
    'cursor-effects': {},
    // 'cursor-effects':
    // {
    //   size: 2, // size of the particle, default: 2
    //   shape: ['circle'], // shape of the particle, default: 'star'
    //   zIndex: 999999999, // z-index property of the canvas, default: 999999999
    // },
    '@vuepress/last-updated':
    {
      transformer: (timestamp, lang) => {
        // Don't forget to install moment yourself
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    'vuepress-plugin-nuggets-style-copy': {
      copyText: "复制代码",
      tip: {
          content: "复制成功"
      }
    },
    "dynamic-title":
    {
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)欢迎回来！",
      hideIcon: "/failure.ico",
      hideText: "(●—●)喔吼，不要走",
      recoverTime: 2000
    },
    "meting": {
      meting :{
        auto: 'https://music.163.com/#/song?id=1371939273',
        server: 'netease',
        type: 'song',
        mid: '1371939273',
      },
      aplayer: {
        fixed: true,
        mini: true,
        autoplay: true,
        listFolded: true,
        theme: '#f9bcdd',
        lrcType: 0,
      },
      mobile: {
        cover: false
      }
    },
    // "meting": {
    //   meting: {
    //     // 歌单地址-> 如果输入可忽略server|type|mid
    //     // 但是不知道为什么不写上这三个会报错, 所以我都写上了
    //     auto: 'https://music.163.com/#/playlist?id=6838211960',
    //     // 当前服务为netease -> 网易
    //     server: "netease",
    //     // 类型为歌单
    //     type: "playlist",
    //     // 歌单id
    //     mid: "6838211960",
    //   },
    //   aplayer: {
    //     // 歌单为随机
    //     order: 'random',
    //     // 0为不显示歌词
    //     lrcType: 0,
    //     // 音量
    //     volume: 0.15,
    //     // 开启迷你模式
    //     mini: true,
    //     // 自动播放
    //     autoplay: true
    //   },
    // },
  '@vuepress/medium-zoom': {
      selector: '.theme-reco-content:not(a) img',
      options: {
          background: "#fff"
      }
  },
  '@vuepress/pwa': {
      ServiceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
  },
  'sitemap': {
    hostname: 'https://xuyin666.github.io/'
  },
  '@vuepress/google-analytics':{
    'ga': 'UA-116687026-1' // UA-00000000-0
  }
  }
}