import React from 'react';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
 
  return (
    <div className="expense-item ">
      <div>
       <div>{props.date.toLocaleString('en-US', {month: 'long'})}</div>
       <div>{props.date.toLocaleString('en-US', {day: 'numeric'})}</div>
       <div>{props.date.toLocaleString('en-US', {year: 'numeric'})}</div>
        </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
