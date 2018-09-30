/** Library asset:logging/lib/logging.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

@DartClass
export class Logger {
    name : string;
    constructor(name : string) {
    }
    @defaultFactory
    static $Logger(name : string) : Logger {
        return new Logger._(name);
    }
    @namedConstructor
    _(name : string) {
        this.name = name;
    }
    static _ : new(name : string) => Logger;
    fine(message : string) {
        core.print(message);
    }
    info(message : string) {
        core.print(message);
    }
    error(message : string) {
        core.print(message);
    }
    debug(message : string) {
        core.print(message);
    }
}

export class _Properties {
}
export const properties : _Properties = new _Properties();
