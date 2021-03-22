/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import { React } from 'https://cdn.skypack.dev/@qbcart/eshop-skypack';
import { render } from 'https://cdn.skypack.dev/@qbcart/eshop-skypack';
import Toast from './toast';

const id = 'qbc-toast';

const mountToast = () => {
  const toast = document.getElementById(id);
  render(
    <Toast id={id} imagesStorageUrl={toast!.dataset.imagesStorageUrl!} />,
    toast
  );
};

/**
 * @param {string} header - Small text header for the toast
 * @param {string} body - Can be text or html string - changes the body text of the toast
 * @param {number}  duration - Number between 2 and 5. Everything outside will default to min or max.
 */
const showToast = (header: string, body: string, duration: number = 3.5) => {
  const toastMountDiv = document.getElementById(id)!;
  toastMountDiv.querySelector('.qbc-toast-header strong')!.textContent = header;
  toastMountDiv.querySelector('.qbc-toast-body')!.innerHTML = body;

  if (duration < 2) {
    duration = 2;
  } else if (duration > 5) {
    duration = 5;
  }

  toastMountDiv.setAttribute('style', `animation-duration: ${duration}s;`);
  toastMountDiv.classList.remove('qbc-toast-hidden');
  toastMountDiv.classList.add('qbc-toast-animation');
};

export { mountToast, showToast };
