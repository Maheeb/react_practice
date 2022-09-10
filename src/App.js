import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from './components/NewExpense/NewExpense'
import React, {useState} from "react";
const  DUMMY_EXPENSES=[
    {
        id:1,
        date: new Date(2022,9,1),
        title: "watch",
        price: '5'
    },
    {
        id:2,
        date: new Date(2022,9,2),
        title: "clock",
        price: '10'
    },
    {
        id:3,
        date: new Date(2022,9,3),
        title: "Bat",
        price: '15'
    },
    {
        id:4,
        date: new Date(2022,9,4),
        title: "Ball",
        price: '20'
    }
]
 const App = ()=>{
     const [expenses,setUpdatedItem] = useState(DUMMY_EXPENSES);
     const AddedExpenses = (expense)=>{
           setUpdatedItem((prevExpenses)=>{
               return [expense,...prevExpenses]
           })

     }


     return(
         <div>
             <NewExpense onAddExpense={AddedExpenses}></NewExpense>
             {expenses.map((value, index) => {

               return  <ExpenseItem  key={value.id} title={value.title} date={value.date} price={value.price} id={value.id} />
             })}


         </div>
     )
 }


export default App;
