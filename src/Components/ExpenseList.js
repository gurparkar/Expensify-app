import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItems from './ExpenseListItems'
import SelectExpenses from '../selectors/expenses'


const ExpenseList = (props) => {
     return (
         <div>
             <h1> Expense List </h1>
             {props.expenses.map((expense) => {
                   return <ExpenseListItems key = {expense.id} {...expense} />
             })}
         </div>
     )
}

const mapStateToProps = (state) => {
    return {
         expenses: SelectExpenses(state.expenses, state.filters),
 
    }
} 

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList