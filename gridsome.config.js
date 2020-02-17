// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'My Museum',

    templates: {
      /*  ArticlePost: [
            {
                path:'/strapi/:id',
                component: './src/templates/ArticlesPost.vue'
            }
        ],*/
        Expositions: [
            {
                path:'/expo/:id',
                component: './src/templates/ExpoPost.vue'
            }
        ],
    },
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'blog/**/*.md',
                typeName: 'Post',
                remark: {}
            }
        }
    ],
    transformers: {
        remark: {}
    }
}
