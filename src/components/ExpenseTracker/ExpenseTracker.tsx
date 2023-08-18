import { useState } from 'react';
import ExpenseTrackerForm from './ExpenseTrackerForm';
import ExpenseTrackerList from './ExpenseTrackerList';

export interface Expense {
  description: string;
  amount: number;
  category: string;
}

const ExpenseTracker = () => {
  const categories = ['Groceries', 'Utilities', 'Entertainment'];

  const [expenses, setExpenses] = useState<Expense[]>([
    {
      description: 'Milk',
      amount: 5,
      category: 'Groceries',
    },
    {
      description: 'Eggs',
      amount: 10,
      category: 'Groceries',
    },
    {
      description: 'Electricity',
      amount: 100,
      category: 'Utilities',
    },
    {
      description: 'Movies',
      amount: 25,
      category: 'Entertainment',
    },
  ]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseTrackerForm
        categories={categories}
        onSubmitExpense={(expense) => setExpenses([...expenses, expense])}
      />
      <hr className='my-5' />
      <ExpenseTrackerList
        expenses={expenses}
        categories={categories}
        onDeleteExpense={(expense) =>
          setExpenses(
            expenses.filter((e) => e.description !== expense.description)
          )
        }
      />
    </div>
  );
};

export default ExpenseTracker;
