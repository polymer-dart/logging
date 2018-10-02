import { OperatorMethods } from "@dart2ts/dart/utils";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
export declare class Logger {
    name: string;
    readonly fullName: string;
    parent: Logger;
    _level: Level;
    _children: core.DartMap<string, Logger>;
    children: core.DartMap<string, Logger>;
    _controller: async.DartStreamController<LogRecord>;
    constructor(name: string);
    static $Logger(name: string): Logger;
    static $detached(name: string): Logger;
    static detached: new (name: string) => Logger;
    static $_named(name: string): Logger;
    static _named: new (name: string) => Logger;
    _internal(name: string, parent: Logger, children: core.DartMap<string, Logger>): void;
    static _internal: new (name: string, parent: Logger, children: core.DartMap<string, Logger>) => Logger;
    level: Level;
    readonly onRecord: async.DartStream<LogRecord>;
    clearListeners(): void;
    isLoggable(value: Level): boolean;
    log(logLevel: Level, message: any, error?: any, stackTrace?: core.DartStackTrace, zone?: async.DartZone): void;
    finest(message: any, error?: any, stackTrace?: core.DartStackTrace): void;
    finer(message: any, error?: any, stackTrace?: core.DartStackTrace): void;
    fine(message: any, error?: any, stackTrace?: core.DartStackTrace): void;
    config(message: any, error?: any, stackTrace?: core.DartStackTrace): void;
    info(message: any, error?: any, stackTrace?: core.DartStackTrace): void;
    warning(message: any, error?: any, stackTrace?: core.DartStackTrace): void;
    severe(message: any, error?: any, stackTrace?: core.DartStackTrace): void;
    shout(message: any, error?: any, stackTrace?: core.DartStackTrace): void;
    _getStream(): async.DartStream<LogRecord>;
    _publish(record: LogRecord): void;
    static root: Logger;
    static _loggers: core.DartMap<string, Logger>;
}
export declare class Level implements core.DartComparable<Level> {
    name: string;
    value: number;
    constructor(name: string, value: number);
    Level(name: string, value: number): void;
    static ALL: Level;
    static OFF: Level;
    static FINEST: Level;
    static FINER: Level;
    static FINE: Level;
    static CONFIG: Level;
    static INFO: Level;
    static WARNING: Level;
    static SEVERE: Level;
    static SHOUT: Level;
    static LEVELS: core.DartList<Level>;
    [OperatorMethods.EQUALS](other: any): boolean;
    [OperatorMethods.LT](other: Level): boolean;
    [OperatorMethods.LEQ](other: Level): boolean;
    [OperatorMethods.GT](other: Level): boolean;
    [OperatorMethods.GEQ](other: Level): boolean;
    compareTo(other: Level): number;
    readonly hashCode: number;
    toString(): string;
}
export declare class LogRecord {
    level: Level;
    message: string;
    loggerName: string;
    time: core.DartDateTime;
    sequenceNumber: number;
    static _nextNumber: number;
    error: any;
    stackTrace: core.DartStackTrace;
    zone: async.DartZone;
    constructor(level: Level, message: string, loggerName: string, error?: any, stackTrace?: core.DartStackTrace, zone?: async.DartZone);
    LogRecord(level: Level, message: string, loggerName: string, error?: any, stackTrace?: core.DartStackTrace, zone?: async.DartZone): void;
    toString(): string;
}
export declare class _Properties {
    hierarchicalLoggingEnabled: boolean;
    recordStackTraceAtLevel: Level;
    _rootLevel: Level;
}
export declare const properties: _Properties;
