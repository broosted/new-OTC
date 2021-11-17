const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const configureMongoose = require('./db/mongoose.js');

const db = configureMongoose();
const app = express();
const config = require('./webpack.common.js');
const compiler = webpack(config);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);
app.use(webpackHotMiddleware(compiler))
app.use(express.json());
app.use(express.urlencoded());

require('./server-side/routes/customers.server.routes')(app);
require('./server-side/routes/medicines.server.routes')(app);

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});
