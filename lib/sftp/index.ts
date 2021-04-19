let Client = require('ssh2-sftp-client');

export default async function put (localPath: String, config: fileConfig){
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
            return sftp.put(localPath, config.remotePath);
        }).then(() => {
            console.log("上传完成");
            isEnd = true;
            return;
        }).catch((err) => {
            if (retryTime <= maxPutNum) {
                console.log(`开始第${retryTime}次重试...`);
                retryTime ++;
                sftpPut();
            } else {
                console.error(err);
                isEnd = true;
                return;
            }
        });
    }

    await sftpPut();
}