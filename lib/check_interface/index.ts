const fs = require ('fs');
const path = require ('path');

export default function checkInterface (config: fileConfig): String | Boolean {
    let {basePath, remotePath} = config,
        baseMes = fs.lstatSync(basePath),
        remoteMes = fs.lstatSync(remotePath);
    if (!baseMes.isDirectory()) {
        throw '本地根路径格式有误';
    }

    if(!remoteMes.isDirectory()) {
        return '远程路径格式有误';
    }

    for (let pathIndex in config.publishedPath) {
        let mergedPath = path.resolve(config.basePath, config.publishedPath[pathIndex]),
            mergedMes = fs.lstatSync(mergedPath);
        if (!mergedMes.isFile() && !mergedMes.isDirectory()) {
            return '上传路径格式有误'
        }

        return true;
    }
}