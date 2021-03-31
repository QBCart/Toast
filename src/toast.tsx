/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useEffect, useState, createRef } from 'react';
import { useAlerts, useRemoveAlert } from '@qbcart/eshop-local-db';
import StyledToast from './styled-components/styled-toast.js';
import StyledToastBody from './styled-components/styled-toast-body.js';
import StyledToastHeader from './styled-components/styled-toast-header.js';

interface Props {
  id: string;
  imagesStorageUrl: string;
}

const Toast: FC<Props> = (props: Props) => {
  const ref = createRef<HTMLDivElement>();
  const alerts = useAlerts(true);
  const [alert, setAlert] = useState(
    (alerts?.length ?? 0) > 0 ? alerts[0] : undefined
  );
  const removeAlert = useRemoveAlert(true);

  useEffect(() => {
    if ((alerts?.length ?? 0) > 0) {
      setAlert((alert) => {
        if (alert?.id === alerts[0].id) return alert;
        else return alerts[0];
      });
    }
  }, [alerts]);

  useEffect(() => {
    if (alert) {
      const toast = ref.current!;
      toast.style.animationName = 'var(--toastSlideRight)';
      toast.style.animationDuration = `${
        (alert.duration ?? 0) > 0 ? alert.duration : 2
      }s`;
    }
  }, [alert, ref]);

  const onAnimationEnd = async (): Promise<void> => {
    const toast = ref.current!;
    toast.style.animationName = '';

    if (alert) {
      removeAlert(alert.id!);
      setAlert(undefined);
    }
  };

  return (
    <StyledToast
      ref={ref}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      onAnimationEnd={() => onAnimationEnd()}
    >
      <StyledToastHeader id={`${props.id}-header`}>
        <img
          src={`${props.imagesStorageUrl}images/favicon.ico`}
          alt="company logo"
          width="18"
        />
        <strong className="ml-1 mr-auto">{alert?.headerText}</strong>
        <small className="ml-3">Just now</small>
      </StyledToastHeader>
      <StyledToastBody
        dangerouslySetInnerHTML={{ __html: alert?.htmlBody ?? '' }}
      ></StyledToastBody>
    </StyledToast>
  );
};

export default Toast;
