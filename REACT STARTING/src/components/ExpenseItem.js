import './Expense.css'
function ExpenseItem(props){
 
    return (
        <div className="ex">
           <h3 className='item' id='i'><mark>EXPENSE ITEMS</mark> </h3>
           <h3 className='item'>{props.id}</h3>
           <h3 className='item'>{props.date.toISOString()}</h3>
            <h3 className='item'> {props.title}</h3>
            <h3 className='item'>{props.amount}</h3>
             <h3 className='item'>{props.Location}</h3>
              
        </div>

    )
    
    
}
export default ExpenseItem;