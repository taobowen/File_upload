import { config } from './file_config';

const fs = require('fs');
const path = require('path');
const isFile = (fileName: String): Boolean => {
    return fs.lstatSync(fileName).isFile();
};

// 使用命令行
if (config.useConfig) {
    
    // 检测参数合法性以及访问权限


    if (isFile(config.publishedPath)) {
        // 如果上传的是文件
    }


    // 如果上传的是文件夹
    let mergedPath = path.resolve(config.basePath, config.publishedPath);
    fs.readdirSync();
}
