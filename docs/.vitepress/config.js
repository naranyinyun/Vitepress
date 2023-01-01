export default {
    title: 'Sirius VitePress Demo Project',
    description: '666',
    themeConfig: {
        sidebar: [{
            text: 'Guide',
            items: [
                { text: '声明', link: '/guide/declaration.md' },
                { text: '准备', link: '/guide/Get_ready.md' },
                { text: '刷入第三方 Recovery', link: '/guide/recovery.md' },
                { text: '扩容 System', link: '/guide/dilation.md' },
                { text: '刷入 ROM', link: '/guide/flash_rom.md' },
                { text: '关于我们', link: '/pages/Team_Page.md' },
                { text: '获得帮助', link: '/guide/get_help.md'},
            ]
        }],
        footer: {
            message: 'OpenSource Under AGPL 3.0 & share under CC BY-NC-SA 4.0',
            copyright: 'Copyright 2022 Nalanyinyun.'
        }
    }
  }
  