export default class eventBus {
    private eventMap: EventMap;

    constructor () {
        this.eventMap = {
            'configError': null,
            'uploadFail': null,
            'uploadSuccess': null
        };
    }
    
    on (eventName: string, handleFn: Function) {
        this.eventMap[eventName] = handleFn;
    }

    emit (eventName: string, params) {
        if (this.eventMap[eventName]) {
            this.eventMap[eventName](... params);
        }
    }
}