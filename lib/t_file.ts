import eventBus from './event_bus/index';
import checkInterface from './check_interface/index';
import handleFileUpload from './command';

export default class tFile {
    private eventBus;
    private fileConfig: FileConfig;

    constructor (config: FileConfig) {
        this.eventBus = new eventBus();
        this.fileConfig = config;
    }

    handleConfigCheck () {
        try {
            checkInterface(this.fileConfig);
        } catch (e) {
            this.eventBus.emit('configError', e);
        }
    }

    async uploadFile () {
        try {
            handleFileUpload (this.fileConfig, this.eventBus);
        } catch (e) {
            this.eventBus.emit('uploadFail', e);
        }
    }

    on (eventName: string, Fn: (...args: any[]) => void) {
        this.eventBus.on(eventName, Fn);
    }
}