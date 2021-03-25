import {fileConfig} from './interface/config';

let config: fileConfig =  {
    useConfig: false,
    basePath: '/',
    publishedPath: '/',
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

export default config;