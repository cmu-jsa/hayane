const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const express = require('express');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		clientLogLevel: 'error',
		compress: true,
		hot: true,
		open: true,
		writeToDisk: true,
		before: function(app, server, compiler) {
			app.use(express.static(__dirname+'/build'));
			app.get('/*', function(req, res) {
				res.sendFile(path.join(__dirname, 'public', 'index.html'));
			});
		},
	},
});
