/// <reference types="react" />
import * as React from "react";
import { Context } from "almin";
export default class AlminReactContainer {
    static create<T>(WrappedComponent: React.ComponentClass<T>, context: Context<any>): React.ComponentClass<T>;
}
