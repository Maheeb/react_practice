import  "./ExpenseItem.css";
import  ExpenseDate from "./ExpenseDate";
import  React, {useState} from "react";


const ExpenseItem=(props)=>{
    // let title = props.title;
    const [title, setTitle] = useState(props.title)
    const changedTitle =() =>{
            // title = "updated";
            setTitle("updated");

    }


    return(

      <div>
          <div className='expense-item'>
          <ExpenseDate date={props.date}> </ExpenseDate>
          <div className='expense-item__description'>
              <h2 className="">{props.title}</h2>
              <div className='expense-item__price'>{props.price}$</div>
          </div>
              <button onClick={changedTitle}>Change Title</button>
          </div>
      </div>
    )
}

export default ExpenseItem;