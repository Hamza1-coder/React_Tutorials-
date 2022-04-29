import React, {useState} from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'


const App = () => {
  const initalExpense = [
    {title: "Car Insurance", amount: 289.21, date: new Date(2022,8,22)},
    {title: "Shope Rent", amount: 190.10, date: new Date(2022,3,23)},
    {title: "Mobile Bill", amount: 489.19, date: new Date(2022,6,24)},
    {title: "Home Rent", amount: 389.25, date: new Date(2022,4,25)},
  ] 
  const [expense, setExpense] = useState(initalExpense);
  const addExpenseHandler = (addExpenseData) => {
    console.log(addExpenseData);
    setExpense((prevExpense)=>{
      return [addExpenseData, ...prevExpense]
    });
  }
  return (
    <>
      <h2 style={{textAlign: 'center', fontSize: '50px', fontFamily: 'fantasy', color:'#510674'}} >Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expense}/>

    </>
  )
}

export default App













