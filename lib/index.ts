import { config } from './file_config';
import handleFileUpload from './command';
import tFile from './t_file';


// 使用命令行
if (config.useConfig) {
    handleFileUpload (config);
}

export default tFile;

