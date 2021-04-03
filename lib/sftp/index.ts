let Client = require('ssh2-sftp-client');

export default function put (localPath: String, config: fileConfig){
    let sftp = new Client(),
        {host, port, username, password} = config.connectServer;
    sftp.connect({
        host,
        port,
        username,
        password
    }).then(() => { 
        return sftp.put(localPath, config.remotePath);
    }).then(() => {
        console.log("上传完成");
    }).catch((err) => {
        console.log(err, 'catch error');
    });
}