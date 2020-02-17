import React from 'react'
import  {BrowserRouter, Route, Switch, Link, NavLink} from  'react-router-dom'
import AddExpensePage from '../Components/AddExpensePage'
import EditExpensePage from '../Components/EditExpensePage'
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage'
import HelpPage from '../Components/HelpPage'
import NotFoundPage from '../Components/NotFoundPage'


const Header = () => (
    <header>
    <h1>Expensify </h1>
    <NavLink to = "/" activeClassName = "is-active" exact = {true}>Dashboard</NavLink>
    <NavLink to = "/create" activeClassName = "is-active">Create Expense</NavLink>
    <NavLink to = "/help" activeClassName = "is-active">Help</NavLink>
    </header>
)

const AppRouter = () => (
      <BrowserRouter>
       <div>
       <Header />
       <Switch>
        <Route path = "/" component = {ExpenseDashboardPage} exact = {true}/>
        <Route path = "/create" component = {AddExpensePage }/>
        <Route path = "/edit/:id" component = {EditExpensePage}/>
        <Route path = "/help" component = {HelpPage} / >
        <Route component = {NotFoundPage} / >
       </Switch>
       </div>
      </BrowserRouter>
)

export default AppRouter