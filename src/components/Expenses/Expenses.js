// import ExpenseItem from './ExpenseItem'
import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'


const Expenses = (props) => {
  const [filteredYear, setFilterdYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  }

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
   
  
  return (
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {/* {filterExpenses.length === 0 ? <p>No Expense Found</p> : 
    filterExpenses.map((expense, index)=> (
      <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={index}/>
    ))} */}
    <ExpenseChart expenses={filterExpenses} />
    <ExpensesList items={filterExpenses}/>
    {/* {props.items.map((exp)=> console.log(exp.title, exp.amount, exp.date))} */}
    {/* {props.items.map((exp, index)=> <ExpenseItem title={exp.title} amount={exp.amount} date={exp.date} key={index}/>)} */}
    
    
    {/* <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}/>
    <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}/>
    <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}/>
    <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}/> */}
  </Card>
  )
}

export default Expenses

