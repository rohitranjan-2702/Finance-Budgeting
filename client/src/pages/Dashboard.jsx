import React from 'react'
import ExpenseChart from '../components/ExpenseChart'
import MonthlyExpense from '../components/MonthlyExpense'


const Dashboard = () => {
  return (<>
    <ExpenseChart/>
    <MonthlyExpense />
    </>
  )
}

export default Dashboard