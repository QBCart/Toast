import React, { FC, useState } from 'react';
import { render } from 'react-dom';
import { useAddToastAlert } from '@qbcart/eshop-alert-hooks';
import 'toast';

const ToastTest: FC = () => {
  const addAlert = useAddToastAlert();
  const [message, setMessage] = useState('');
  return (
    <div className="m-5">
      <input
        className="form-control w-25 mb-3"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="btn btn-outline-success mr-3"
        onClick={() =>
          addAlert({
            headerText: 'Cart',
            // headerTextColor: 'red',
            // headerBackgroundColor: 'yellow',
            htmlBody: `<h6>${message}</h6>`
            // bodyTextColor: 'green',
            // bodyBackgroundColor: 'skyblue',
            // iconName: 'home',
            // iconColor: 'pink'
          })
        }
      >
        Show Toast
      </button>
    </div>
  );
};

(function () {
  render(<ToastTest />, document.getElementById('toast-test'));
})();
