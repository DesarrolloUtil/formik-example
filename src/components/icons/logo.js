import React from "react";

const LogoIcon = (props) => (
  <svg {...props} viewBox="0 0 180 50">
    <path
      d="M7 11.6s4.2 5.4 15.7 8.7c0 0 8.5 2.4 12.5 7 0 0 4 3.1 5.5 13.9 0 0-3.3-6.3-12.8-8.9 0 0-10-2.5-12.6-4s-5.6-4.1-6.7-7.7-1.7-7.8-1.6-9z"
      fill="#805ad5"
    />
    <path
      d="M2.2 25.6s4.6 3.9 10.3 5.9c0 0 4.7 2 11.3 3.1 0 0 6.1 1.2 9.4 3.2 0 0 5.7 3.3 8.5 11.7 0 0-2.8-3.7-7.9-4.7 0 0-2.9-1.1-11.7-1.5 0 0-6.4.1-12.2-3.5 0 0-4.2-2.4-6.6-9.8-.1 0-.9-2.4-1.1-4.4z"
      fill="#553c9a"
    />
    <path
      d="M18.3.5s2.9 4.5 8.2 7.3c0 0 4.9 2.7 7.6 5.7 0 0 2.5 2.3 4.2 7 0 0 1 2.6 1.4 8.3 0 0-2.3-4.1-4.3-5.5 0 0-2.3-1.8-5.1-3.3s-5.3-2.6-7.5-4.6-3.7-4.4-4.2-7-.7-6.2-.3-7.9z"
      fill="#b794f4"
    />
    <path
      fill="#7b68ee"
      d="M52.1 7.2h2.6V24h9.7v2.4H52.1V7.2zM79.1 20H68c.2 1.3.7 2.3 1.6 3.1.9.8 2 1.2 3.3 1.2 1.6 0 2.9-.6 3.9-1.7l1.4 1.7c-.6.8-1.4 1.3-2.3 1.7-.9.4-1.9.6-3.1.6-1.4 0-2.7-.3-3.8-.9-1.1-.6-2-1.5-2.6-2.6s-.9-2.4-.9-3.8.3-2.7.9-3.8 1.4-2 2.4-2.6 2.2-.9 3.5-.9 2.5.3 3.5.9c1 .6 1.8 1.5 2.4 2.6s.9 2.4.9 3.9v.6zm-9.7-4.9c-.8.8-1.3 1.8-1.4 3h8.7c-.1-1.2-.6-2.2-1.4-3s-1.8-1.2-3-1.2-2.1.4-2.9 1.2zM91.4 13.2c1 1 1.5 2.4 1.5 4.4v8.7h-2.3v-1.9c-.4.7-1 1.2-1.8 1.5-.8.4-1.7.5-2.7.5-1.5 0-2.7-.4-3.7-1.2-.9-.8-1.4-1.8-1.4-3.1s.4-2.3 1.3-3.1c.9-.8 2.3-1.2 4.2-1.2h3.9v-.5c0-1.1-.3-2-.9-2.6-.6-.4-1.5-.7-2.7-.7-.8 0-1.6.1-2.4.4-.8.3-1.4.7-1.9 1.1l-1-2c.7-.6 1.5-1.1 2.5-1.4 1-.3 2-.5 3.1-.5 1.9.1 3.3.6 4.3 1.6zM89 23.8c.7-.4 1.2-1.1 1.5-1.9v-2h-3.8c-2.1 0-3.1.7-3.1 2.2 0 .7.3 1.3.8 1.7s1.3.6 2.2.6 1.7-.1 2.4-.6zM101.7 12.4c.8-.4 1.9-.7 3.1-.7v2.5h-.6c-1.3 0-2.4.4-3.1 1.3-.8.8-1.1 2.1-1.1 3.6v7.2h-2.5V11.9h2.4v2.4c.4-.8 1-1.5 1.8-1.9zM119.2 13.3c1 1.1 1.5 2.6 1.5 4.7v8.3h-2.5v-8c0-1.4-.3-2.5-.9-3.2s-1.5-1.1-2.7-1.1c-1.3 0-2.4.4-3.2 1.2-.8.8-1.2 2-1.2 3.6v7.4h-2.5V11.9h2.4v2.2c.5-.7 1.2-1.3 2-1.7s1.8-.6 2.9-.6c1.8-.1 3.2.5 4.2 1.5zM129.2 9.6H123V7.2h14.8v2.4h-6.2v16.7h-2.5l.1-16.7zM151.7 13.3c1 1.1 1.5 2.6 1.5 4.7v8.3h-2.5v-8c0-1.4-.3-2.5-.9-3.2s-1.5-1.1-2.7-1.1c-1.3 0-2.4.4-3.2 1.2s-1.2 2-1.2 3.6v7.4h-2.5V6.1h2.5v7.8c.5-.7 1.2-1.2 2-1.6.8-.4 1.8-.6 2.8-.6 1.8 0 3.2.6 4.2 1.6zM157.8 8.6c-.3-.3-.5-.7-.5-1.2s.2-.9.5-1.2.7-.5 1.2-.5.9.2 1.2.5.5.7.5 1.2-.2.9-.5 1.2-.7.5-1.2.5c-.4 0-.8-.2-1.2-.5zm0 3.3h2.5v14.5h-2.5V11.9zM165.7 26c-1-.3-1.8-.7-2.4-1.2l1-2.1c.6.5 1.3.8 2.2 1.1.9.3 1.7.4 2.6.4 2.2 0 3.2-.7 3.2-2 0-.4-.1-.8-.4-1-.3-.3-.7-.4-1.1-.6-.4-.1-1.1-.3-1.9-.4-1.1-.2-2-.4-2.7-.6s-1.3-.6-1.8-1.2-.7-1.4-.7-2.4c0-1.3.5-2.4 1.5-3.2s2.4-1.2 4.1-1.2c.9 0 1.8.1 2.7.4.9.2 1.6.6 2.2 1l-1.1 2.1c-1.1-.8-2.4-1.1-3.9-1.1-1 0-1.8.2-2.4.5-.5.4-.8.8-.8 1.4 0 .5.2.8.5 1.1.3.3.7.5 1.1.6.5.1 1.1.3 1.9.4 1.1.2 2 .4 2.7.6s1.3.6 1.7 1.2c.5.5.7 1.3.7 2.3 0 1.3-.5 2.4-1.6 3.1-1.1.8-2.5 1.2-4.3 1.2-1 .1-2-.1-3-.4z"
    />
    <g>
      <path
        fill="#7b68ee"
        d="M60.5 40.7c.3.4.5 1 .5 1.6 0 .9-.3 1.6-1 2.1s-1.7.7-3 .7h-5.1V34.9h4.8c1.2 0 2.1.2 2.8.7.7.5 1 1.1 1 2 0 .5-.1 1-.4 1.3-.2.4-.6.7-1 .9.6.2 1 .5 1.4.9zm-6.7-4.3v2.8h2.7c.7 0 1.2-.1 1.5-.4.4-.2.5-.6.5-1 0-.5-.2-.8-.5-1.1s-.9-.4-1.5-.4h-2.7zm5.3 5.7c0-1-.7-1.5-2.2-1.5h-3.1v3h3.1c1.4 0 2.2-.5 2.2-1.5zM63 34.9h1.9v8.7h5.4v1.6H63V34.9zM73.6 44.6c-.8-.5-1.5-1.1-2-1.9-.5-.8-.7-1.7-.7-2.7 0-1 .2-1.9.7-2.7.5-.8 1.1-1.4 2-1.9s1.8-.7 2.8-.7 2 .2 2.8.7c.8.5 1.5 1.1 2 1.9.5.8.7 1.7.7 2.7 0 1-.2 1.9-.7 2.7-.5.8-1.1 1.4-2 1.9-.8.5-1.8.7-2.8.7s-2-.3-2.8-.7zm4.6-1.5c.5-.3 1-.7 1.3-1.3.3-.6.5-1.2.5-1.9s-.2-1.3-.5-1.9c-.3-.6-.7-1-1.3-1.3-.5-.3-1.2-.5-1.8-.5-.7 0-1.3.2-1.8.5s-1 .7-1.3 1.3-.5 1.2-.5 1.9.2 1.3.5 1.9.7 1 1.3 1.3c.5.3 1.2.5 1.8.5.7 0 1.3-.2 1.8-.5zM91 39.9h1.8V44c-.5.4-1.1.7-1.8 1-.7.2-1.4.3-2.2.3-1 0-2-.2-2.8-.7-.8-.5-1.5-1.1-2-1.9-.5-.8-.7-1.7-.7-2.7 0-1 .2-1.9.7-2.7.5-.8 1.1-1.4 2-1.9.8-.5 1.8-.7 2.9-.7.9 0 1.6.1 2.3.4.7.3 1.3.7 1.8 1.2l-1.2 1.2c-.8-.8-1.7-1.2-2.8-1.2-.7 0-1.4.2-1.9.5-.6.3-1 .7-1.3 1.3-.3.5-.5 1.2-.5 1.9s.2 1.3.5 1.8.8 1 1.3 1.3 1.2.5 1.9.5c.8 0 1.5-.2 2.1-.5v-3.2z"
      />
    </g>
  </svg>
);

export default LogoIcon;
