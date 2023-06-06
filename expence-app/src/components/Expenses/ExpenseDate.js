import React from 'react';
import './ExpenseDate.css'

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });//!Creating a helper variable will keep the code clean in JSX
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className='expense-date '>
      <div>
        <div className='expense-date__month'>{month}</div>{/* //! Here we still need the curly braces when we add the variable p */}
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
      </div>
     
    </div>
  );
}
