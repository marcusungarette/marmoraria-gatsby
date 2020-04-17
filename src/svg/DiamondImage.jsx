import React from "react";

function DiamondImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      height="100pt" viewBox="0 0 512 512.00025" width="100pt"
      xmlSpace="preserve"
    >
      <path fill="#FFE182" d="M360.129 172.138L256 472.276 512 172.138z"></path>
      <g fill="#FFCD73">
        <path d="M105.931 39.724L0 172.138 151.871 172.138z"></path>
        <path d="M360.129 172.138L512 172.138 406.069 39.724z"></path>
        <path d="M360.129 172.138L256 39.724 151.871 172.138z"></path>
      </g>
      <path
        fill="#FFAA64"
        d="M256 39.724L105.931 39.724 151.871 172.138z"
      ></path>
      <path
        fill="#FFE182"
        d="M406.069 39.724L256 39.724 360.129 172.138z"
      ></path>
      <path
        fill="#FFAA64"
        d="M151.871 172.138L256 472.276 360.129 172.138z"
      ></path>
      <path fill="#FF8C5A" d="M0 172.138L256 472.276 151.871 172.138z"></path>
    </svg>
  );
}

export default DiamondImage;