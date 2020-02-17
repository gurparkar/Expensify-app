import selectExpenses from './src/selectors/expenses'
import moment from 'moment'

const expenses = [{
      id: '1',
      description: 'Gum',
      note: '',
      amount: 195,
      createdAt: moment(0).valueOf()
}, {
    id: '2 ',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).add(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]


const filters = {
          text: '',
          sortBy: 'date',
          startDate: moment(-100000),
          endDate: undefined
}
const result = selectExpenses(expenses, filters)
console.log(result)

     
