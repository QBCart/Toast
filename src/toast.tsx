/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

// React import is needed by snowpack even though typescript suggests otherwise
import React, {
    FC,
    useEffect,
    useState
  } from 'https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js';
  
  interface Props {
    id: string;
    imagesStorageUrl: string;
  }
  
  const Toast: FC<Props> = (props) => {
    const [message, setMessage] = useState('');
    const [textColorClass, setTextColorClass] = useState('');
  
    useEffect(() => {
      $(`#${props.id}-component`).on('show.bs.toast', function (e) {
        setMessage($(e.currentTarget).data('message'));
        setTextColorClass($(e.currentTarget).data('text-color-class'));
      });
      
    }, []);
  
    return (
      <div
        id={`${props.id}-container`}
        aria-live="assertive"
        aria-atomic="true"
      >
        <div
          id={`${props.id}-component`}
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-delay="1000"
        >
          <div className="toast-header">
            <img
              src={`${props.imagesStorageUrl}images/favicon.ico`}
              alt="company logo"
              width="18"
            />
            <strong className="ml-1 mr-auto">Cart</strong>
            <small className="ml-3">Just now</small>
            <button
              type="button"
              className="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className={`toast-body ${textColorClass}`}>{message}</div>
        </div>
      </div>
    );
  };
  
  export default Toast;
  