var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Logger_1, Level_1, LogRecord_1;
/** Library asset:logging/lib/logging.dart */
import { is, isNot } from "@dart2ts/dart/_common";
import { defaultConstructor, namedConstructor, namedFactory, defaultFactory, DartClass, Implements, op, Op, OperatorMethods } from "@dart2ts/dart/utils";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
let Logger = Logger_1 = class Logger {
    constructor(name) {
    }
    get fullName() {
        return (op(Op.EQUALS, this.parent, null) || this.parent.name == '') ? this.name : `${this.parent.fullName}.${this.name}`;
    }
    static $Logger(name) {
        return Logger_1._loggers.putIfAbsent(name, () => {
            return new Logger_1._named(name);
        });
    }
    static $detached(name) {
        return new Logger_1._internal(name, null, new core.DartMap());
    }
    static $_named(name) {
        if (new core.DartString(name).startsWith(new core.DartString('.'))) {
            throw new core.ArgumentError("name shouldn't start with a '.'");
        }
        let dot = new core.DartString(name).lastIndexOf(new core.DartString('.'));
        let parent = null;
        let thisName;
        if (dot == -1) {
            if (name != '')
                parent = new Logger_1('');
            thisName = name;
        }
        else {
            parent = new Logger_1(new core.DartString(name).substring(0, dot));
            thisName = new core.DartString(name).substring(dot + 1);
        }
        return new Logger_1._internal(thisName, parent, new core.DartMap());
    }
    _internal(name, parent, children) {
        this._children = children;
        this.children = new core.DartUnmodifiableMapView(children);
        this.name = name;
        this.parent = parent;
        if (this.parent != null)
            this.parent._children.set(this.name, this);
    }
    get level() {
        if (properties.hierarchicalLoggingEnabled) {
            if (this._level != null)
                return this._level;
            if (this.parent != null)
                return this.parent.level;
        }
        return properties._rootLevel;
    }
    set level(value) {
        if (properties.hierarchicalLoggingEnabled && this.parent != null) {
            this._level = value;
        }
        else {
            if (this.parent != null) {
                throw new core.UnsupportedError('Please set "hierarchicalLoggingEnabled" to true if you want to ' + 'change the level on a non-root logger.');
            }
            properties._rootLevel = value;
        }
    }
    get onRecord() {
        return this._getStream();
    }
    clearListeners() {
        if (properties.hierarchicalLoggingEnabled || op(Op.EQUALS, this.parent, null)) {
            if (this._controller != null) {
                this._controller.close();
                this._controller = null;
            }
        }
        else {
            Logger_1.root.clearListeners();
        }
    }
    isLoggable(value) {
        return (op(Op.GEQ, value, this.level));
    }
    log(logLevel, message, error, stackTrace, zone) {
        if (this.isLoggable(logLevel)) {
            if (is(message, Function))
                message = message();
            if (isNot(message, "string"))
                message = message.toString();
            if (op(Op.EQUALS, stackTrace, null) && op(Op.GEQ, logLevel, properties.recordStackTraceAtLevel)) {
                try {
                    throw `autogenerated stack trace for ${logLevel} ${message}`;
                }
                catch (e) {
                    let t = new core.DartStackTrace.fromError(e);
                    stackTrace = t;
                    if (op(Op.EQUALS, error, null))
                        error = e;
                }
            }
            if (op(Op.EQUALS, zone, null))
                zone = async.DartZone.current;
            let record = new LogRecord(logLevel, message, this.fullName, error, stackTrace, zone);
            if (properties.hierarchicalLoggingEnabled) {
                let target = this;
                while (target != null) {
                    target._publish(record);
                    target = target.parent;
                }
            }
            else {
                Logger_1.root._publish(record);
            }
        }
    }
    finest(message, error, stackTrace) {
        return this.log(Level.FINEST, message, error, stackTrace);
    }
    finer(message, error, stackTrace) {
        return this.log(Level.FINER, message, error, stackTrace);
    }
    fine(message, error, stackTrace) {
        return this.log(Level.FINE, message, error, stackTrace);
    }
    config(message, error, stackTrace) {
        return this.log(Level.CONFIG, message, error, stackTrace);
    }
    info(message, error, stackTrace) {
        return this.log(Level.INFO, message, error, stackTrace);
    }
    warning(message, error, stackTrace) {
        return this.log(Level.WARNING, message, error, stackTrace);
    }
    severe(message, error, stackTrace) {
        return this.log(Level.SEVERE, message, error, stackTrace);
    }
    shout(message, error, stackTrace) {
        return this.log(Level.SHOUT, message, error, stackTrace);
    }
    _getStream() {
        if (properties.hierarchicalLoggingEnabled || op(Op.EQUALS, this.parent, null)) {
            if (op(Op.EQUALS, this._controller, null)) {
                this._controller = new async.DartStreamController.broadcast({
                    sync: true
                });
            }
            return this._controller.stream;
        }
        else {
            return Logger_1.root._getStream();
        }
    }
    _publish(record) {
        if (this._controller != null) {
            this._controller.add(record);
        }
    }
};
__decorate([
    namedConstructor
], Logger.prototype, "_internal", null);
__decorate([
    defaultFactory
], Logger, "$Logger", null);
__decorate([
    namedFactory
], Logger, "$detached", null);
__decorate([
    namedFactory
], Logger, "$_named", null);
Logger = Logger_1 = __decorate([
    DartClass
], Logger);
export { Logger };
Logger.root = new Logger('');
Logger._loggers = new core.DartMap.literal([]);
let Level = Level_1 = class Level {
    constructor(name, value) {
    }
    Level(name, value) {
        this.name = name;
        this.value = value;
    }
    [OperatorMethods.EQUALS](other) {
        return is(other, Level_1) && this.value == other.value;
    }
    [OperatorMethods.LT](other) {
        return this.value < other.value;
    }
    [OperatorMethods.LEQ](other) {
        return this.value <= other.value;
    }
    [OperatorMethods.GT](other) {
        return this.value > other.value;
    }
    [OperatorMethods.GEQ](other) {
        return this.value >= other.value;
    }
    compareTo(other) {
        return this.value - other.value;
    }
    get hashCode() {
        return this.value;
    }
    toString() {
        return this.name;
    }
};
__decorate([
    defaultConstructor
], Level.prototype, "Level", null);
Level = Level_1 = __decorate([
    DartClass,
    Implements(core.DartComparable)
], Level);
export { Level };
Level.ALL = new Level('ALL', 0);
Level.OFF = new Level('OFF', 2000);
Level.FINEST = new Level('FINEST', 300);
Level.FINER = new Level('FINER', 400);
Level.FINE = new Level('FINE', 500);
Level.CONFIG = new Level('CONFIG', 700);
Level.INFO = new Level('INFO', 800);
Level.WARNING = new Level('WARNING', 900);
Level.SEVERE = new Level('SEVERE', 1000);
Level.SHOUT = new Level('SHOUT', 1200);
Level.LEVELS = new core.DartList.literal(Level.ALL, Level.FINEST, Level.FINER, Level.FINE, Level.CONFIG, Level.INFO, Level.WARNING, Level.SEVERE, Level.SHOUT, Level.OFF);
let LogRecord = LogRecord_1 = class LogRecord {
    constructor(level, message, loggerName, error, stackTrace, zone) {
    }
    LogRecord(level, message, loggerName, error, stackTrace, zone) {
        this.time = new core.DartDateTime.now();
        this.sequenceNumber = LogRecord_1._nextNumber++;
        this.level = level;
        this.message = message;
        this.loggerName = loggerName;
        this.error = error;
        this.stackTrace = stackTrace;
        this.zone = zone;
    }
    toString() {
        return `[${this.level.name}] ${this.loggerName}: ${this.message}`;
    }
};
__decorate([
    defaultConstructor
], LogRecord.prototype, "LogRecord", null);
LogRecord = LogRecord_1 = __decorate([
    DartClass
], LogRecord);
export { LogRecord };
LogRecord._nextNumber = 0;
export class _Properties {
    constructor() {
        this.hierarchicalLoggingEnabled = false;
        this.recordStackTraceAtLevel = Level.OFF;
        this._rootLevel = Level.INFO;
    }
}
export const properties = new _Properties();
//# sourceMappingURL=logging.js.map