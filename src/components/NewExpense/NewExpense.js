import ExpenseForm from './ExpenseForm.js'
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpanseData) => {
        const expenseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)

    }


    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense