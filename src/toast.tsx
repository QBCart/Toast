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
import StyledToastIcon from './styled-components/styled-toast-icon.js';

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
      toast.style.backgroundColor =
        alert.bodyBackgroundColor ?? 'rgba(255, 255, 255, 0.85)';
      toast.style.color = alert.bodyTextColor ?? 'black';

      const header = toast.querySelector<HTMLDivElement>(
        `#${props.id}-header`
      )!;
      header.style.color = alert.headerTextColor ?? '#6c757d';
      header.style.backgroundColor =
        alert.headerBackgroundColor ?? 'rgba(255, 255, 255, 0.85)';

      if (alert.iconName) {
        const icon = toast.querySelector<HTMLDivElement>(`#${props.id}-icon`)!;
        icon.innerHTML = `<span class="material-icons" style="margin-top: -1px; color: ${
          alert.iconColor ?? '#6c757d'
        }">${alert.iconName}</span>`;
      }
    }
  }, [alert, ref, props]);

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
        <StyledToastIcon id={`${props.id}-icon`}>
          <img
            src={`${props.imagesStorageUrl}images/favicon.ico`}
            alt="company logo"
            width="18"
          />
        </StyledToastIcon>

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
