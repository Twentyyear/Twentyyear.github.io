module.exports = {
    host: 'localhost',
    port: '8081',
    title: "Twentyyear的博客",
    description: "优秀不够，你是否无可替代",
    dest: "public",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/favicon.ico"
            }
        ],
        ["meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: "reco",
    //主题配置文件
    themeConfig: {
        //导航栏配置
        nav: [
            {
                text: "主页",
                link: "/",
                icon: "reco-home"
            },
            {
                text: "时间轴",
                link: "/timeline/",
                icon: "reco-date"
            },
            {
                text: "系列教程",
                icon: "reco-message",
                items: [
                    {
                        text: "vuepress-reco",
                        link: "/docs/theme-reco/"
                    }
                ]
            },
        ],
        sidebar: {
            "/docs/theme-reco/": [
                "",
                "theme",
                "plugin",
                "api"
            ],
        },
        type: "blog",
        friendLink: [
            {
                title: 'yyq',
                desc: '在我的记忆里这是一个热爱代码的美少男孩yyq，目前就职于华为某攻坚团队，我心中的大神选手',
                logo: '/yyq.png',
                link: 'https://www.hiyyq.cn/'
            },
            {
                title: '1090影视',
                desc: '一个高清在线视频站点',
                link: 'http://1090ys2.com/'
            },
            {
                title: '高清电台',
                desc: '一个高清影视资源下载站点',
                link: 'https://gaoqing.fm/'
            },

        ],
        //博客配置
        blogConfig: {
            category: {
                location: 2,// 在导航栏菜单中所占的位置，默认2
                text: "分类"
            },
            tag: {
                location: 3,// 在导航栏菜单中所占的位置，默认3
                text: "标签"
            },
        },
        logo: "/logo.png",
        //当前项目是否要开启搜索栏
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Last Updated",
        author: "Twentyyear",
        authorAvatar: "/logo.png",
        record: "版号",
        startYear: "2021"
    },
    //代码的行数是否要显示
    markdown: {
        lineNumbers: true
    },
    //插件
    plugins: {"vuepress-plugin-auto-sidebar": {}},
    plugins: [
        [
            "@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ['shizuku', 'miku', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'z16'],
                clean: false,
                messages: {
                    welcome: '我是Twentyyear欢迎你的关注 ',
                    home: '带你回到首页。',
                    theme: '切换看板娘模型。',
                    close: '再见哦'
                }
            }
        ],
        [
            "@vuepress-reco/vuepress-plugin-bgm-player",
            {
                audios: [
                    // 本地文件示例
                    {
                        name: 'secretbase',
                        artist: '茅野愛衣',
                        url: '/bgm/1.mp3',
                        cover: '/logo.png'
                    },
                    // // 网络文件示例
                    // {
                    //     name: '',
                    //     artist: '',
                    //     url: '',
                    //     cover: ''
                    // },
                ]
            }
        ]
    ]

}