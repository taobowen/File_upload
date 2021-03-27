#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_config_1 = require("../lib/file_config");
const fs = require('fs');
const path = require('path');
const isFile = (fileName) => {
    return fs.lstatSync(fileName).isFile();
};
if (file_config_1.default.useConfig) {
    // 使用命令行
    if (isFile(file_config_1.default.publishedPath)) {
        // 如果上传的是文件
    }
    let mergedPath = path.resolve(file_config_1.default.basePath, file_config_1.default.publishedPath);
    console.log(mergedPath);
    if (!fs.access(mergedPath)) {
        throw '文件夹不存在或没有访问权限';
    }
    fs.readdirSync();
}
