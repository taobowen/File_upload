const fs = require ('fs');
const path = require ('path');

export default function checkInterface (config: FileConfig): String | Boolean {
    let {basePath, remotePath} = config,
        baseMes = fs.lstatSync(basePath),
        remoteMes = fs.lstatSync(remotePath);
    if (!baseMes.isDirectory()) {
        throw '本地根路径格式有误';
    }

    if(!remoteMes.isDirectory()) {
        throw '远程路径格式有误';
    }

    let mergedPath = path.resolve(config.basePath, config.publishedPath),
        mergedMes = fs.lstatSync(mergedPath);
    if (!mergedMes.isFile() && !mergedMes.isDirectory()) {
        throw '上传路径格式有误'
    }

    return true;
}