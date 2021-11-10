import * as React from "react";

import { getValue } from "./utils/react/pickFromSynthetickEvent";
import { preventDefault } from "./utils/react/preventDefault";
import { stopPropagation } from "./utils/react/stopPropagation";

function InputEx({ value, onChange }: any) {
    return (
        <input
            value={value}
            onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
        />
    );
}

function compose<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U =>
        fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U =>
        fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}
