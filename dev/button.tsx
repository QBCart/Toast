// React import is needed by snowpack even though typescript suggests otherwise
import React, {
  FC,
} from "https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js";
import { render } from 'https://cdn.skypack.dev/pin/react-dom@v17.0.1-DtIXT56q6U8PbgLMrBhE/min/react-dom.js';

interface Props {
  showToast: (message: string, textColorClass: string, timeToLive: number) => void
}

const DevButton: FC<Props> = (props) => {
  return <button onClick={() => props.showToast('Booya!', 'text-success', 5000)}>Show Toast</button>;
};


const mountDevButton = (showToast: (message: string, textColorClass: string, timeToLive: number) => void) => {
  render(
    <DevButton showToast={showToast} />,
    document.getElementById('dev-button')
  );
};

export default mountDevButton;
