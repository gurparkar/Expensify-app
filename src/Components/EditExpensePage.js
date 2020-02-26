import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
    console.log("Updated :", expense)
    
  }
  onRemove = () => {
    this.props.removeExpense({id: this.props.expense.id})
    this.props.history.push('/')
}

 render () {
     return (
        <div>
          <ExpenseForm
             expense = {this.props.expense}
             onSubmit = { this.onSubmit  }
          />
          <button onClick = { this.onRemove  }> Remove </button>
        </div>
           )
        } 
}

const mapStateToProps = (state,props) => {
      return {
          expense: state.expenses.find((expense) => expense.id === props.match.params.id)
      }  
}

const mapDispatchToProps = (dispatch) => {
      return {
            editExpense: (id, expense) => dispatch(editExpense(id, expense)),
            removeExpense: (data) => dispatch(removeExpense(data))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)


// const EditExpensePage = (props) => {
//     console.log("Props here is : ",props)
//     return (
//         <div>
//               <ExpenseForm
//                  expense = {props.expense}
//                  onSubmit = {(expense) => {
//                       props.dispatch(editExpense(props.expense.id, expense))
//                       props.history.push('/')
//                       console.log("Updated :", expense)
                      
//                     }}
//               />

//               <button onClick = {}> Remove </button>
//         </div>
//     )
// }