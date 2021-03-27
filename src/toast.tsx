/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import { React } from './streaming-imports';
import StyledToast from './styled-components/styled-toast';
import StyledToastBody from './styled-components/styled-toast-body';
import StyledToastHeader from './styled-components/styled-toast-header';

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
