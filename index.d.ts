interface FileConfig {
    basePath: string,    // 本地根路径
    publishedPath: string,    // 想要上传到服务端的路径
    remotePath: string,    // 远程路径
    retryTimes?: number,    // 失败重试次数
    connectServer: {    // 连接服务器的配置
        host: string,
        port: number,
        username: string,
        password: string
    }
}

interface FileUp {
    config: FileConfig
}

interface EventMap {
   [propName: string] : Function | null
}