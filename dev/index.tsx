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
          headerText: 'Cart',
          // headerTextColor: 'red',
          // headerBackgroundColor: 'yellow',
          htmlBody: '<h6>Item has been added to your cart!</h6>'
          // bodyTextColor: 'green',
          // bodyBackgroundColor: 'skyblue',
          // iconName: 'home',
          // iconColor: 'pink'
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
