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
    log(logLevel: Level, message: any, error?: core.DartObject, stackTrace?: core.DartStackTrace, zone?: async.DartZone): void;
    finest(message: any, error?: core.DartObject, stackTrace?: core.DartStackTrace): void;
    finer(message: any, error?: core.DartObject, stackTrace?: core.DartStackTrace): void;
    fine(message: any, error?: core.DartObject, stackTrace?: core.DartStackTrace): void;
    config(message: any, error?: core.DartObject, stackTrace?: core.DartStackTrace): void;
    info(message: any, error?: core.DartObject, stackTrace?: core.DartStackTrace): void;
    warning(message: any, error?: core.DartObject, stackTrace?: core.DartStackTrace): void;
    severe(message: any, error?: core.DartObject, stackTrace?: core.DartStackTrace): void;
    shout(message: any, error?: core.DartObject, stackTrace?: core.DartStackTrace): void;
    _getStream(): async.DartStream<LogRecord>;
    _publish(record: LogRecord): void;
    private static __$root;
    static root: Logger;
    private static __$_loggers;
    static _loggers: core.DartMap<string, Logger>;
}
export declare class Level implements core.DartComparable<Level> {
    name: string;
    value: number;
    constructor(name: string, value: number);
    Level(name: string, value: number): void;
    private static __$ALL;
    static readonly ALL: Level;
    private static __$OFF;
    static readonly OFF: Level;
    private static __$FINEST;
    static readonly FINEST: Level;
    private static __$FINER;
    static readonly FINER: Level;
    private static __$FINE;
    static readonly FINE: Level;
    private static __$CONFIG;
    static readonly CONFIG: Level;
    private static __$INFO;
    static readonly INFO: Level;
    private static __$WARNING;
    static readonly WARNING: Level;
    private static __$SEVERE;
    static readonly SEVERE: Level;
    private static __$SHOUT;
    static readonly SHOUT: Level;
    private static __$LEVELS;
    static readonly LEVELS: core.DartList<Level>;
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
    private static __$_nextNumber;
    static _nextNumber: number;
    error: core.DartObject;
    stackTrace: core.DartStackTrace;
    zone: async.DartZone;
    constructor(level: Level, message: string, loggerName: string, error?: core.DartObject, stackTrace?: core.DartStackTrace, zone?: async.DartZone);
    LogRecord(level: Level, message: string, loggerName: string, error?: core.DartObject, stackTrace?: core.DartStackTrace, zone?: async.DartZone): void;
    toString(): string;
}
export declare class properties {
    private static __$hierarchicalLoggingEnabled;
    static hierarchicalLoggingEnabled: boolean;
    private static __$recordStackTraceAtLevel;
    static recordStackTraceAtLevel: Level;
    private static __$_rootLevel;
    static _rootLevel: Level;
}
