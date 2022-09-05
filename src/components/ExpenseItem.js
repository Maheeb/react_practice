import  "./ExpenseItem.css";
const expenseItem=(props)=>{

    return(
      <div>
          <div className="expense-item">{props.date.toISOString()}</div>
          <div>
              <h2 className="expense-item_description">{props.title}</h2>
              <div className="expense-item_price">{props.price}$</div>
          </div>
      </div>
    )
}

export default expenseItem;