import {GET_CUSTOMERS} from './constants';
//const url = 'wss://localhost:8080'
export const getCustomers = () => dispatch => {
  return fetch('/api/customers')
    .then(res => res.json())
    .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
}




