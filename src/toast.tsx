/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import { React } from 'https://cdn.skypack.dev/@qbcart/eshop-skypack-deps';

interface Props {
  id: string;
  imagesStorageUrl: string;
}

const Toast: React.FC<Props> = (props: Props) => {
  React.useEffect(() => {
    const toast = document.getElementById(props.id)!;
    toast.addEventListener('animationend', () => {
      toast.classList.remove('qbc-toast-animation');
      toast.classList.add('qbc-toast-hidden');
    });
  }, [props.id]);

  return (
    <div
      className="qbc-toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-delay="1000"
    >
      <div className="qbc-toast-header">
        <img
          src={`${props.imagesStorageUrl}images/favicon.ico`}
          alt="company logo"
          width="18"
        />
        <strong className="ml-1 mr-auto"></strong>
        <small className="ml-3">Just now</small>
      </div>
      <div className="qbc-toast-body"></div>
    </div>
  );
};

export default Toast;
