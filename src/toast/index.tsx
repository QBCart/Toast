/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useEffect, useRef } from 'react';
import { useToastAlert, useRemoveToastAlert } from '@qbcart/eshop-alert-hooks';
import type { CSSProperties } from 'styled-components';

import ToastStyles from './styles/toast-styles.js';
import ToastBodyStyles from './styles/toast-body-styles.js';
import ToastHeaderStyles from './styles/toast-header-styles.js';
import ToastIconStyles from './styles/toast-icon-styles.js';

interface Props {
  imagesStorageUrl: string;
}

const Toast: FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const alert = useToastAlert();
  const removeAlert = useRemoveToastAlert();

  /*
   *  Animation must be set in useEffect to function properly.
   */
  useEffect(() => {
    if (alert) {
      const toast = ref.current!;
      toast.style.animationName = 'var(--toastSlideRight)';
      toast.style.animationDuration = `${
        (alert.duration ?? 0) > 0 ? alert.duration : 2
      }s`;
    }
  }, [alert, ref]);

  /*
   *  Animation must be unset onAnimationEnd to function properly.
   */
  const onAnimationEnd = async (): Promise<void> => {
    const toast = ref.current!;
    toast.style.animationName = '';

    if (alert) {
      removeAlert(alert.id!);
    }
  };

  const toastStyle: CSSProperties = {
    color: alert?.bodyTextColor || 'black',
    backgroundColor: alert?.bodyBackgroundColor || 'rgba(255, 255, 255, 0.85)'
  };

  const headerStyle: CSSProperties = {
    color: alert?.headerTextColor || '#6c757d',
    backgroundColor: alert?.headerBackgroundColor || 'rgba(255, 255, 255, 0.85)'
  };

  const iconStyle: CSSProperties = {
    marginTop: '-1px',
    color: alert?.iconColor || '#6c757d'
  };

  return (
    <ToastStyles
      ref={ref}
      style={toastStyle}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      onAnimationEnd={() => onAnimationEnd()}
    >
      <ToastHeaderStyles style={headerStyle}>
        <ToastIconStyles>
          {alert?.iconName ? (
            <span className="material-icons" style={iconStyle}>
              {alert.iconName}
            </span>
          ) : (
            <img
              src={`${props.imagesStorageUrl}images/favicon.ico`}
              alt="company logo"
              width="18"
            />
          )}
        </ToastIconStyles>

        <strong className="ml-1 mr-auto">{alert?.headerText}</strong>
        <small className="ml-3">Just now</small>
      </ToastHeaderStyles>
      <ToastBodyStyles
        dangerouslySetInnerHTML={{ __html: alert?.htmlBody ?? '' }}
      ></ToastBodyStyles>
    </ToastStyles>
  );
};

export default Toast;
