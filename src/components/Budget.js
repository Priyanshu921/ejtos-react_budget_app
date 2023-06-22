import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget,currency,expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const changeBudget = (e) => {
        if(e.target.value>20000){
            alert("Budget cannot exceed the value of "+currency+"20,000")
            dispatch({type:"SET_BUDGET",
        payload:20000})
        return;
        }
        if(e.target.value<totalExpenses){
            alert("You cannot reduce the budget value lower than the spending")
            dispatch({type:"SET_BUDGET",
        payload:totalExpenses})
        return;
        }
        dispatch({type:"SET_BUDGET",
        payload:e.target.value})
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='cost'
                    style={{ marginLeft: '0rem' , size: 10}}
                    onChange={changeBudget}
                    value={budget}>
                </input>
            </span>
        </div>
    );
};
export default Budget;