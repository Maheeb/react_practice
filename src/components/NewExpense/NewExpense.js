import React from 'react'
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense =(props) =>{

    const expenseDataHandler=(edhParameter)=>{
        const expenses={
            ...edhParameter,
            id:Math.random().toString()
        }
        // console.log(expenses)
        props.onAddExpense(expenses)

    }

    return(
        <div className={"new-expense"}>
            <ExpenseForm onSaveExpenseData={expenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;