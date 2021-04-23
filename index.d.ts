interface FileConfig {
    useConfig: Boolean, // 是否使用此文件中的配置
    basePath: string,    // 本地根路径
    publishedPath: string [],    // 要上传的路径，数组的长度代表并行上传的个数
    protocol: 'sftp' | 'ftp',    // 协议
    remotePath: string,    // 远程路径
    uploadLimit?: number,    // 并发数
    retryTimes?: number,    // 失败重试次数
    connectServer: {    // 连接服务器的配置
        host: string,
        port: number,
        username: string,
        password: string
    },
    debugger ?: Boolean
}

interface FileUp {
    config: FileConfig
}

interface EventMap {
   [propName: string] : Function | null
}