import { Expense } from './ExpenseTracker';

interface Props {
  expenses: Expense[];
  categories: string[];
  onSelectCategory: (category: string) => void;
  onDeleteExpense: (expense: Expense) => void;
}

const ExpenseTrackerList = ({
  expenses,
  categories,
  onSelectCategory,
  onDeleteExpense,
}: Props) => {
  return (
    <>
      <h2 className='mb-4'>Expenses List</h2>
      <div className='mb-3'>
        <select
          name='category'
          id='category'
          className='form-select'
          aria-label='Select category'
          defaultValue={''}
          onChange={(e) => onSelectCategory(e.target.value)}
        >
          <option value=''>All categories</option>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </div>

      {expenses.length !== 0 ? (
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
                <td>${expense.amount.toFixed(2)}</td>
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
            <tr>
              <td>
                <strong>Sum:</strong>
              </td>
              <td colSpan={3}>
                $
                {expenses
                  .reduce((acc, expense) => expense.amount + acc, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No Expenses to display!</p>
      )}
    </>
  );
};

export default ExpenseTrackerList;
