export declare class Logger {
    name: string;
    constructor(name: string);
    static $Logger(name: string): Logger;
    _(name: string): void;
    static _: new (name: string) => Logger;
    fine(message: string): void;
    info(message: string): void;
    error(message: string): void;
    debug(message: string): void;
}
export declare class _Properties {
}
export declare const properties: _Properties;
