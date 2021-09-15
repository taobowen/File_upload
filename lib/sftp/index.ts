import log from '../log/index';
let Client = require('ssh2-sftp-client');

export default async function put (localPath: String, config: FileConfig){
    let sftpPut = async () => {
        if (isEnd) {
            return;
        }
        return sftp.uploadDir(localPath, config.remotePath).then(() => {
            return '上传成功';
        }, (err) => {
            if (currentRetryTime <= retryTimes) {
                log(`开始第${currentRetryTime}次重试...`);
                currentRetryTime ++;
                sftpPut();
            } else {
                log('上传失败');
                log(err);
                isEnd = true;
            }
        });
    }

    let sftp = new Client(),
        { host, port, username, password } = config.connectServer,
        retryTimes = config.retryTimes ? config.retryTimes : 1,
        currentRetryTime = 1,
        isEnd = false;

    log('准备建立链接')
    sftp.connect({
        host,
        port,
        username,
        password
    }).then(() => { 
        console.log('sftp链接成功');
        return sftpPut();
    }, (err) => {
        log('链接失败')
        log(err);
    }).then((res) => {
        log(res);
        log("上传结束");
        isEnd = true;
    })
}