/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  id: string;
  imagesStorageUrl: string;
}

const Toast: React.FC<Props> = (props: Props) => {
  React.useEffect(() => {
    const toastMountDiv = document.getElementById(props.id)!;
    const toast = toastMountDiv.querySelector('div')!;

    toast.addEventListener('animationend', () => {
      toast.style.animationName = '';
    });
  }, [props.id]);

  const ToastSlideRight = keyframes`
    0% {
    top: 70px;
    right: -350px;
    display: block;
    }
    25% {
      top: 70px;
      right: 6px;
    }
    75% {
      top: 70px;
      right: 6px;
    }
    100% {
      top: 70px;
      display: none;
    }
  `;

  const StyleToast = styled.div`
    --toastSlideRight: ${ToastSlideRight};
    -ms-flex-preferred-size: 350px;
    flex-basis: 350px;
    min-width: 200px;
    max-width: 350px;
    font-size: 0.875rem;
    background-color: rgba(255, 255, 255, 0.85);
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%);
    border-radius: 0.25rem;

    position: fixed;
    top: 70px;
    right: -350px;
    z-index: 2000;
    animation-name: '';
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
  `;

  const StyleToastHeader = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.25rem 0.75rem;
    color: #6c757d;
    background-color: rgba(255, 255, 255, 0.85);
    background-clip: padding-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  `;

  const StyleToastBody = styled.div`
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem;
  `;

  return (
    <StyleToast role="alert" aria-live="assertive" aria-atomic="true">
      <StyleToastHeader id={`${props.id}-header`}>
        <img
          src={`${props.imagesStorageUrl}images/favicon.ico`}
          alt="company logo"
          width="18"
        />
        <strong className="ml-1 mr-auto"></strong>
        <small className="ml-3">Just now</small>
      </StyleToastHeader>
      <StyleToastBody id={`${props.id}-body`}></StyleToastBody>
    </StyleToast>
  );
};

export default Toast;
