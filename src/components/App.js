import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../async/Actions/customers';
import { addCustomerAction, removeCustomerAction } from '../store/customerReducer';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  
  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="app">
      <div className="app__cash">{cash}</div>
      <div className="app__buttons">
        <div className="app__buttons-row">
          <button
            className="app__button"
            onClick={() => addCash(Number(prompt()))}
          >
            Пополнить счет
          </button>
          <button
            className="app__button"
            onClick={() => getCash(Number(prompt()))}
          >
            Снять со счета
          </button>
        </div>
        <div className="app__buttons-row">
          <button
            className="app__button"
            onClick={() => addCustomer(prompt())}
          >
            Добавить клиента
          </button>
          {/* <button
            className="app__button"
            onClick={() => getCash(Number(prompt()))}
          >
            Удалить клиента
          </button> */}
          <button
            className="app__button"
            onClick={() => dispatch(fetchCustomers())}
          >
            Получить клиентов из базы
          </button>
        </div>
      </div>
      {
        customers.length > 0
          ? (
            <div className="app__clients">
              <span className="app__clients-title">Клиенты: </span>
                {
                  customers.map(customer => (
                    <div
                      key={customer.id}
                      className="app__clients-item"
                      onClick={() => removeCustomer(customer)}
                    >
                      {customer.name}
                    </div>
                  ))
                }
            </div>
          )
          : <p className="app__no-clients">Клиенты отсутствуют</p>
      }
    </div>
  )
};

export default App;