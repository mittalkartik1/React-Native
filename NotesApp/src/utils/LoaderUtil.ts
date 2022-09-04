import { createRef } from "react";

export const appNavRef:any = createRef();

export const showFullScreenLoader = (value: boolean) => {
  if (appNavRef.current) {
    appNavRef.current.showAppWideLoader(value);
  }
};
