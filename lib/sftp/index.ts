import log from '../log/index';
let Client = require('ssh2-sftp-client');

export default async function put (localPath: String, config: FileConfig){
    let sftp = new Client(),
        {host, port, username, password} = config.connectServer,
        maxPutNum = config.retryTimes ? config.retryTimes : 1,
        retryTime = 1,
        isEnd = false;

    let sftpPut = async () => {
        if (isEnd) {
            return;
        }
        sftp.connect({
            host,
            port,
            username,
            password
        }).then(() => { 
            sftp.put(localPath, config.remotePath);
        }).then(() => {
            log("上传完成");
            isEnd = true;
        }).catch((err) => {
            if (retryTime <= maxPutNum) {
                log(`开始第${retryTime}次重试...`);
                retryTime ++;
                sftpPut();
            } else {
                log(err);
                isEnd = true;
            }
        });
    }

    await sftpPut();
}