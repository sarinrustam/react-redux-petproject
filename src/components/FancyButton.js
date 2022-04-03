import { forwardRef, React } from 'react';


const FancyButton = forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      style={{ backgroundColor: props.color || '' }}
    >
      {props.children}
    </button>
  )
});

export default FancyButton;