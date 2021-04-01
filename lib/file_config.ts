/*
 * 通过命令行使用时的配置文件
 */

export const config: fileConfig = {
    useConfig: true,
    basePath: 'src',
    publishedPath: '/fefefef/fefefec',
    protocol: 'sftp',
    remotePath: '/',
    uploadLimit: 1,
    retryTimes: 3,
    connectServer: {
        host: '',
        port: 80,
        username: '',
        password: ''
    }
}