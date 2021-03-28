import React, { FC } from 'react';
import { render } from 'react-dom';

interface Props {
  showToast: (header: string, body: string, duration: number) => void;
}

const DevButton: FC<Props> = (props: Props) => {
  return (
    <button
      onClick={() =>
        props.showToast(
          'Cart',
          '<span class="text-success">Item has been added to your cart</span>',
          3.5
        )
      }
    >
      Show Toast
    </button>
  );
};

const mountDevButton = (
  showToast: (header: string, body: string, duration: number) => void
): void => {
  render(
    <DevButton showToast={showToast} />,
    document.getElementById('dev-button')
  );
};

export default mountDevButton;
