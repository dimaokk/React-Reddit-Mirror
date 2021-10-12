const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const webpackDevMiddleWare = require('webpack-dev-middleware')
const webpackHotMiddleWare = require('webpack-hot-middleware')

const express = require('express')
const hmrServer = express()

const clientCompiler = webpack(webpackClientConfig)

hmrServer.use(webpackDevMiddleWare(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    noInfo: true,
    watchOptions: {
        ignore: /dist/,
    },
    writeToDisk: true,
    stats: 'error-only',
}))

hmrServer.use(webpackHotMiddleWare(clientCompiler, {
    path: '/static/__webpack_hmr',
}))


hmrServer.listen(3001, ()=> {
    console.log('Server start all ok')
})

const compiler = webpack(webpackServerConfig);

compiler.watch({ }, (err) => { 
    console.log('err mb',err);
  });
  

compiler.run((err)=>{
    if (err) {
        console.log('err', err)
    }

    nodemon({
        script:path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client'),
        ]
    })
});