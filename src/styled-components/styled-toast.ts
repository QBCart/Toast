import { styled, keyframes } from '../streaming-imports';

const ToastSlideRight = keyframes`
  0% {
    top: 70px;
    right: -350px;
    display: block;
  }
  25% {
    top: 70px;
    right: 6px;
  }
  75% {
    top: 70px;
    right: 6px;
  }
  100% {
    top: 70px;
    display: none;
  }
`;

const StyledToast = styled.div`
  --toastSlideRight: ${ToastSlideRight};
  -ms-flex-preferred-size: 350px;
  flex-basis: 350px;
  min-width: 200px;
  max-width: 350px;
  font-size: 0.875rem;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 10%);
  border-radius: 0.25rem;
  position: fixed;
  top: 70px;
  right: -350px;
  z-index: 2000;
  animation-name: '';
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
`;

export default StyledToast;
