/*
 * 通过命令行使用时的配置文件
 */

export const config: FileConfig = {
    basePath: 'test',
    publishedPath: './test_one/innerTest',
    remotePath: 'test',
    retryTimes: 3,
    connectServer: {
        host: '106.75.101.212',
        port: 22,
        username: 'ubuntu',
        password: 't123456789'
    }
}