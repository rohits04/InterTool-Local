import React from "react";
import './header.css'  ;

export default function Formhead(){
  return(
<header className='mainheader'>
        <div className="header">
        <img src="https://miro.medium.com/max/1400/1*b_al7C5p26tbZG4sy-CWqw.png"
         alt="aws" className="logo" />
         </div>
         <div className='headingname'>
        <h1 className="heading">AWS Infra</h1>
        </div>
      </header>
      )
}