import moment from 'moment'

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
    
}

const altFilters = {
    text: 'Bills',
    sortBy: 'amount',
    startDate: moment().add(5, 'days'),
    endDate: moment().add(5, 'days')
    
}

export { filters, altFilters}