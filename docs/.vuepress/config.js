module.exports = {
    description: 'My VuePress Website',
    theme: '@vuepress/default',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Go to app', link: 'https://facebook.com/sonkunn.96'},
            {text: 'Github', link: 'https://github.com/daothaison'}
        ],
        sidebar: [
            {
                title: 'Homepage',
                path: '/',
                collapsable: false,
            },
            {
                title: 'Get started',
                path: '/get-started',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/get-started/installation'
                ]
            },
        ],
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true],
    ],
}
