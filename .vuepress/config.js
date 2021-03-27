module.exports = {
    "title": "Twentyyear的个人空间",
    "description": "myblog",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
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
    "theme": "reco",
    //主题配置文件
    "themeConfig": {
        //导航栏配置
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间轴",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "系列教程",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "vuepress-reco",
                        "link": "/docs/theme-reco/"
                    }
                ]
            },
        ],
        "sidebar": {
            "/docs/theme-reco/": [
                "",
                "theme",
                "plugin",
                "api"
            ],
        },
        "type": "blog",
        //风格
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
        "友情链接": [
            {
                "title": "1090影视",
                "desc": "高清在线视频网站",
                "email": "",
                "link": "http://1090ys2.com/"
            },
        ],
        "logo": "/logo.png",
        //当前项目是否要开启搜索栏
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "Twentyyear",
        "authorAvatar": "/avatar.png",
        "record": "版号",
        "startYear": "2021"
    },
    //代码的行数是否要显示
    "markdown": {
        "lineNumbers": true
    },
    //插件
    "plugins": {"vuepress-plugin-auto-sidebar": {}},
    "plugins": [
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ['miku', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'z16'],
                clean: false,
                messages: {
                    welcome: '我是Twentyyear欢迎你的关注 ',
                    home: '带你回到首页。',
                    theme: '切换看板娘模型。',
                    close: '再见哦'
                }
            }
        ]
    ]

}