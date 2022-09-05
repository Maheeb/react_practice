import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
 const own_function = ()=>{
    let  expenses=[
         {
             id:1,
             date: new Date(2022,9,1),
             title: "watch",
             price: 5
         },
        {
            id:2,
            date: new Date(2022,9,2),
            title: "clock",
            price: 10
        },
        {
            id:3,
            date: new Date(2022,9,3),
            title: "Bat",
            price: 15
        },
        {
            id:4,
            date: new Date(2022,9,4),
            title: "Ball",
            price: 20
        }
     ]

     return(
         <div>
             <ExpenseItem title={expenses[0].title} date={expenses[0].date} price={expenses[0].price} id={expenses[0].id}></ExpenseItem>
             <ExpenseItem title={expenses[1].title} date={expenses[1].date} price={expenses[1].price} id={expenses[1].id}></ExpenseItem>
             <ExpenseItem title={expenses[2].title} date={expenses[2].date} price={expenses[2].price} id={expenses[2].id}></ExpenseItem>
             <ExpenseItem title={expenses[3].title} date={expenses[3].date} price={expenses[3].price} id={expenses[3].id}></ExpenseItem>
         </div>
     )
 }


export default own_function;
