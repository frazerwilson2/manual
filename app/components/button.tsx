import React from "react";

export const Button = ({onClick, label, disabled, simple}:{onClick:(args:any)=>void,label:string,disabled?:boolean,simple?:boolean}) => (
    <button
    className={`${simple ? 
        'text-main text-md':
        'bg-link text-white text-sm font-semibold uppercase px-8 py-4 hover:bg-link-hover cursor-pointer'
    }`}
    onClick={onClick}
    disabled={disabled}
    >
      {label}
    </button>
  );