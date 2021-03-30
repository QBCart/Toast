/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useEffect } from 'react';
import { useAlerts } from '@qbcart/eshop-local-db';
import StyledToast from './styled-components/styled-toast.js';
import StyledToastBody from './styled-components/styled-toast-body.js';
import StyledToastHeader from './styled-components/styled-toast-header.js';

interface Props {
  id: string;
  imagesStorageUrl: string;
}

const Toast: FC<Props> = (props: Props) => {
  const alerts = useAlerts(true);
  useEffect(() => {
    const toastMountDiv = document.getElementById(props.id)!;
    const toast = toastMountDiv.querySelector('div')!;

    toast.addEventListener('animationend', () => {
      toast.style.animationName = '';
    });
  }, [props.id]);

  return (
    <StyledToast role="alert" aria-live="assertive" aria-atomic="true">
      <StyledToastHeader id={`${props.id}-header`}>
        <img
          src={`${props.imagesStorageUrl}images/favicon.ico`}
          alt="company logo"
          width="18"
        />
        <strong className="ml-1 mr-auto"></strong>
        <small className="ml-3">Just now</small>
      </StyledToastHeader>
      <StyledToastBody id={`${props.id}-body`}></StyledToastBody>
    </StyledToast>
  );
};

export default Toast;
