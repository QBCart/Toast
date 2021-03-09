/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

// React import is needed by snowpack even though typescript suggests otherwise
// @ts-ignore
import React from "https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js";
import { render } from "https://cdn.skypack.dev/pin/react-dom@v17.0.1-DtIXT56q6U8PbgLMrBhE/min/react-dom.js";
import Toast from "./toast";

const id = "qbc-toast";

const mountToast = () => {
  const toast = document.getElementById(id);
  render(
    <Toast id={id} imagesStorageUrl={toast!.dataset.imagesStorageUrl!} />,
    toast
  );
};

const showToast = (
  message: string,
  textColorClass: string,
  timeToLive: number
) => {
  const toast = $(`#${id}-component`);
  toast.data("message", message);
  toast.data("text-color-class", textColorClass);
  toast.data("delay", timeToLive);
  toast.toast("show");
  console.log("show toast");
};

export { mountToast, showToast };
