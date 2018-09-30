export declare class Logger {
    name: string;
    constructor(name: string);
    static $Logger(name: string): Logger;
    _(name: string): void;
    static _: new (name: string) => Logger;
    fine(message: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void;
    info(message: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void;
    error(message: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void;
    debug(message: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void;
    severe(message: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void;
}
export declare class _Properties {
}
export declare const properties: _Properties;
