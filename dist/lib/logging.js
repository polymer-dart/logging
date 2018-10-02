var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Logger_1;
import { namedConstructor, defaultFactory, DartClass } from "@dart2ts/dart/utils";
import * as core from "@dart2ts/dart/core";
let Logger = Logger_1 = class Logger {
    constructor(name) {
    }
    static $Logger(name) {
        return new Logger_1._(name);
    }
    _(name) {
        this.name = name;
    }
    fine(message, arg1, arg2, arg3, arg4) {
        core.print(message);
    }
    info(message, arg1, arg2, arg3, arg4) {
        core.print(message);
    }
    error(message, arg1, arg2, arg3, arg4) {
        core.print(message);
    }
    debug(message, arg1, arg2, arg3, arg4) {
        core.print(message);
    }
    severe(message, arg1, arg2, arg3, arg4) {
        core.print(message);
    }
    finest(message, arg1, arg2, arg3, arg4) {
        core.print(message);
    }
    warning(message, arg1, arg2, arg3, arg4) {
        core.print(message);
    }
};
__decorate([
    namedConstructor
], Logger.prototype, "_", null);
__decorate([
    defaultFactory
], Logger, "$Logger", null);
Logger = Logger_1 = __decorate([
    DartClass
], Logger);
export { Logger };
export class _Properties {
}
export const properties = new _Properties();
//# sourceMappingURL=logging.js.map