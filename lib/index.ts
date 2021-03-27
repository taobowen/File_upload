const config: fileConfig = require('./lib/file_config');
const fs = require('fs');
const path = require('path');
const isFile = (fileName: String): Boolean => {
    return fs.lstatSync(fileName).isFile();
};
if (config.useConfig) {
    // 使用命令行
    if (isFile(config.publishedPath)) {
        // 如果上传的是文件
    }
    let mergedPath = path.resolve(config.basePath, config.publishedPath);
    console.log(mergedPath);
    if (!fs.access(mergedPath)) {
        throw '文件夹不存在或没有访问权限';
    }
    fs.readdirSync();
}
