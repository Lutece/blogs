import React from 'react';

export default function Leaf(props) {
  return <div id="leaves" style={(location.pathname === '/') ? {visibility:'visible'} : {visibility:'hidden'}}>
    <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
  </div>
}