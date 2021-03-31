import { useAddAlert } from '@qbcart/eshop-local-db';
import React, { FC } from 'react';
import { render } from 'react-dom';
import 'toast';

const DevButton: FC = () => {
  const addAlert = useAddAlert(true);
  return (
    <button
      onClick={() =>
        addAlert({
          type: 'toast',
          headerText: 'Cart',
          htmlBody:
            '<span class="text-success">Item has been added to your cart</span>'
        })
      }
    >
      Show Toast
    </button>
  );
};

(function () {
  render(<DevButton />, document.getElementById('dev-button'));
})();
