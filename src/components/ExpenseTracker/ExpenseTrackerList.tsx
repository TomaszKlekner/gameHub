import { Expense } from './ExpenseTracker';

interface Props {
  expenses: Expense[];
  categories: string[];
  onDeleteExpense: (expense: Expense) => void;
}

const ExpenseTrackerList = ({
  expenses,
  categories,
  onDeleteExpense,
}: Props) => {
  if (expenses.length === 0) return <p>No expenses tracked</p>;

  return (
    <>
      <h2 className='mb-4'>Expenses List</h2>
      <div className='mb-3'>
        <select
          name='category'
          id='category'
          className='form-select'
          aria-label='Select category'
          defaultValue={'DEFAULT'}
        >
          <option value='DEFAULT'>All categories</option>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </div>

      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Descrption</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Category</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  onClick={() => onDeleteExpense(expense)}
                  className='btn btn-outline-danger'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTrackerList;
