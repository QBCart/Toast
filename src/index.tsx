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

/**
 * @param {number}  duration - Number between 2 and 5. Everything outside will default to min or max.
 */
const showToast = (
  header: string,
  body: string,
  duration: number = 3.5
) => {
  const toastMountDiv = document.getElementById(id)! 
  toastMountDiv.querySelector('.qbc-toast-header strong')!.textContent = header;
  toastMountDiv.querySelector('.qbc-toast-body')!.innerHTML = body;

  if(duration < 2) {
    duration = 2
  } else if (duration > 5) {
    duration = 5
  }

  toastMountDiv.setAttribute('style', `animation-duration: ${duration}s;`)
  toastMountDiv.classList.remove('qbc-toast-hidden')
  toastMountDiv.classList.add('qbc-toast-animation')

  console.log("show toast");
};

export { mountToast, showToast };
