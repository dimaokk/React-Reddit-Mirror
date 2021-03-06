import React from "react";

function pickFromSynthetickEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) =>
    <E extends (t: T[K]) => void>(fn: E) =>
    (e: React.SyntheticEvent<T>) =>
      fn(e.currentTarget[key]);
}

export const getValue = pickFromSynthetickEvent<HTMLInputElement>()("value");
export const getChecked = pickFromSynthetickEvent<HTMLInputElement>()("checked");
