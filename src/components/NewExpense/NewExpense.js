import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData);
  } 
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseDate={expenseDataHandler}/>
    </div>
  )
}

export default NewExpense
