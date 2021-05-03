# t-file

## 简介
node开发的文件上传工具

## 特性
- 支持sftp协议
- 支持串行和并行上传，自定义最大并行个数
- 支持失败重传，可以自定义最大重试次数
- 支持命令行和sdk方式使用
- 支持文件、文件夹方式

## 运行截图
![image](https://user-images.githubusercontent.com/46807600/115262405-17ec5600-a167-11eb-9cb5-860249acefd7.png)

## 使用

### 命令行
根目录下修改配置文件file_config.ts
配置格式及各个字段含义如下：
```
{
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
    }
}
```
使用npm run build && npm run dev即可运行

### sdk

1. 实例化对象
```
import Tfile from 't-file';
let file = new Tfile(fileConfig);
```

2. 对象方法

- handleConfigCheck：参数校验
- uploadFile：上传文件
- on：注册事件处理函数

3. 关于事件

- configError：参数错误
- uploadFail：上传失败
- uploadSuccess：上传成功

注册事件处理函数：
```
file.on('configError', (e) => {console.log(e)})
```


