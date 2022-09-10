import React from 'react'
import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm =(props) =>{
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");


    const titleChange =(event) =>{
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }
    const amountChange =(event) =>{
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
    }
    const dateChange =(event) =>{
        // console.log(event.target.value);
        setEnteredDate(event.target.value);

    }

    const submitHandler =(event) =>{
        event.preventDefault();
            var expenseData ={
                title: enteredTitle,
                price: enteredAmount,
                date: new Date(enteredDate)
            }

            props.onSaveExpenseData(expenseData);

          setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');


    }

    return(
        <div>
        <form action="" onSubmit={submitHandler}>
        <div className={"new-expense__controls"}>
        <div className={"new-expense__control"}>
            <label> Title</label>
            <input type="text" onChange={titleChange}/>
        </div>
            <div className={"new-expense__control"}>
                <label> Amount</label>
                <input type="number" min="0.01" step="0.01"  onChange={amountChange}/>
            </div>
            <div className={"new-expense__control"}>
                <label> Date</label>
                <input type="date" onChange={dateChange}/>
            </div>
            <div className={"new-expense__actions"}>
               <button type={"submit"}> Add expense</button>
            </div>


        </div>
        </form>
        </div>
    )


}

export default ExpenseForm;
