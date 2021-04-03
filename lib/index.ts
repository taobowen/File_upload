import { config } from './file_config';
import checkInterface from './check_interface/index';
import put from './sftp/index';

const fs = require('fs');
const path = require('path');

// 使用命令行
if (config.useConfig) {
    
    // 检测参数合法性以及访问权限
    let checkMessage = checkInterface(config);
    if (checkMessage !== true) {
        throw checkMessage;
    }

    let mergedPath = path.resolve(config.basePath, config.publishedPath),
    mergedMes = fs.lstatSync(mergedPath);
    console.log(mergedPath);

    if (mergedMes.isFile()) {
        // 如果上传的是文件
        console.log('文件');
        fs.readFile(mergedPath, 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(data);
        });

        put(mergedPath, config);
    } else if (mergedMes.isDirectory()) {
        // 如果上传的是文件夹
        console.log('文件夹');
        fs.readdir(mergedPath, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
        });
        put(mergedPath, config);
    }
}
