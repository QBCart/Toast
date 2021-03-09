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
    imagesStorageUrl: string;
  }
  
  const Toast: FC<Props> = (props) => {

    const id = 'qbc-toast'

    const [message, setMessage] = useState('');
    const [textColorClass, setTextColorClass] = useState('');
    const [delay, setDelay] = useState(1000);

    useEffect(() => {
      $(`#${id}`).toast();
    }, []);
  
    useEffect(() => {
      $(`#${id}`).on('show.bs.toast', function (e) {
        setMessage($(e.currentTarget).data('message'));
        setTextColorClass($(e.currentTarget).data('text-color-class'));
        setDelay($(e.currentTarget).data('delay'));
      });
      
    }, []);
  
    // useEffect(() => {
    //   $(`#${id}`).on('hidden.bs.toast', function () {
    //     setMessage('');
    //     setTextColorClass('');
    //   });
    // }, []);
  
    return (
      <div
        id={`#${id}-container`}
        aria-live="assertive"
        aria-atomic="true"
      >
        <div
          id={id}
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-delay={ delay }
        >
          <div className="toast-header">
            <img
              src={`${props.imagesStorageUrl}images/favicon.ico`}
              alt="company logo"
              width="18"
            />
            <strong className="ml-1 mr-auto">Cart</strong>
            <small>Just now</small>
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
  