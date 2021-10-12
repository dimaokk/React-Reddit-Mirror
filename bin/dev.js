
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webpackConfig);

const watching = compiler.watch({ }, (err) => { // [Stats Object](#stats-object)
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