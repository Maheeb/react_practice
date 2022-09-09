import  "./ExpenseItem.css";
import  ExpenseDate from "./ExpenseDate";
const expenseItem=(props)=>{



    return(
      <div>
          <div className='expense-item'>
          <ExpenseDate date={props.date}> </ExpenseDate>
          <div className='expense-item__description'>
              <h2 className="">{props.title}</h2>
              <div className='expense-item__price'>{props.price}$</div>
          </div>
          </div>
      </div>
    )
}

export default expenseItem;