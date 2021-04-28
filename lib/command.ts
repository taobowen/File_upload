import checkInterface from './check_interface/index';
import put from './sftp/index';
import log from './log/index';

const fs = require('fs');
const path = require('path');

export default function handleFileUpload (config: FileConfig, eventBus: any = null) {
    // 检测参数合法性以及访问权限
    try {
        checkInterface(config);
    } catch(e) {
        log(e);
    }
    

    let batchHandlePath = [],
        handlePath = (pathItem) => {
            return new Promise(() => {
                let mergedPath = path.resolve(config.basePath, pathItem),
                mergedMes = fs.lstatSync(mergedPath);

                if (mergedMes.isFile()) {

                    // 如果上传的是文件
                    log(`开始上传${mergedPath}下的文件`);
                    put(mergedPath, config);
                } else if (mergedMes.isDirectory()) {

                    // 如果上传的是文件夹
                    log(`开始上传${mergedPath}下的文件夹`);
                    put(mergedPath, config);
                }
                return true;
            }) 
        };

    config.publishedPath.forEach (pathItem => {
        batchHandlePath.push(handlePath(pathItem));
    })


    Promise.all(batchHandlePath).then(() => {
        if (eventBus) {
            eventBus.emit('uploadSuccess');
        }
    
        log('上传成功');
    }).catch(e => {
        log('上传失败');
        log(e);
    })
}