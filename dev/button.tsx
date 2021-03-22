import { React } from 'https://cdn.skypack.dev/@qbcart/eshop-skypack';
import { render } from 'https://cdn.skypack.dev/@qbcart/eshop-skypack';

interface Props {
  showToast: (header: string, body: string, duration: number) => void;
}

const DevButton: React.FC<Props> = (props: Props) => {
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
) => {
  render(
    <DevButton showToast={showToast} />,
    document.getElementById('dev-button')
  );
};

export default mountDevButton;
