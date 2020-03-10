import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter, sortByAmount} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import  {BrowserRouter, Route, Switch, Link, NavLink} from  'react-router-dom'
import  AppRouter from './routers/AppRouter'
import './firebase/firebase'

const store = configureStore()

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}))
store.dispatch(addExpense({description: 'Gas Bill', amount: 1000, createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 10000}))


// store.dispatch(setTextFilter('Bill'))
// store.dispatch(sortByAmount())

const state = store.getState()

const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log("Visible Expenses after the filter and sorting is :", VisibleExpenses)

const jsx = (
          <Provider store = {store}>
          <AppRouter />
          </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
