import React from 'react';
function GroupSvg(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
      <path
        d="M35.5 40h-31C2 40 0 38 0 35.5v-31C0 2 2 0 4.5 0h31C38 0 40 2 40 4.5v31c0 2.5-2 4.5-4.5 4.5zM4.5 3C3.7 3 3 3.7 3 4.5v31c0 .8.7 1.5 1.5 1.5h31c.8 0 1.5-.7 1.5-1.5v-31c0-.8-.7-1.5-1.5-1.5h-31zM22 12h-3.3v6.7H12V22h6.7v6.7H22V22h6.7v-3.3H22V12z"
        fill={props.color}
      />
    </svg>
  );
}

export default GroupSvg;
