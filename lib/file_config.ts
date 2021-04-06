/*
 * 通过命令行使用时的配置文件
 */

export const config: fileConfig = {
    useConfig: true,
    basePath: 'test',
    publishedPath: './test/test/..',
    protocol: 'sftp',
    remotePath: 'test',
    uploadLimit: 1,
    retryTimes: 3,
    connectServer: {
        host: '10.212.21.89',
        port: 80,
        username: 'admin',
        password: 'admin123'
    }
}