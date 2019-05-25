module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs-tutorial' : '',
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/p/hello-nextjs': { page: '/post', query: { title: 'Hello Next.js' } }
        }
    }
}