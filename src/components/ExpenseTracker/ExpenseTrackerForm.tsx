import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Expense } from './ExpenseTracker';

const schema = z.object({
  description: z
    .string()
    .min(1, { message: 'Description must be at least 1 characters long' }),
  amount: z
    .number({ invalid_type_error: 'Amount field is required' })
    .min(1, { message: 'Amount must be at least 1' }),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  categories: string[];
  onSubmitExpense: (expense: Expense) => void;
}

const ExpenseTrackerForm = ({ categories, onSubmitExpense }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const newExpense: Expense = {
      description: data.description,
      amount: data.amount,
      category: data.category,
    };

    onSubmitExpense(newExpense);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          {...register('description')}
          id='description'
          type='text'
          className='form-control'
        />
        {errors.description && (
          <p className='text-danger'>{errors.description.message}</p>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id='amount'
          type='text'
          className='form-control'
        />
        {errors.amount && (
          <p className='text-danger'>{errors.amount.message}</p>
        )}
      </div>

      <div className='mb-4'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select
          {...register('category')}
          name='category'
          id='category'
          className='form-select'
          aria-label='Select category'
          defaultValue=''
        >
          <option value='' disabled>
            All categories
          </option>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </div>

      <div className='mb-3'>
        <button className='btn btn-success' disabled={!isValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseTrackerForm;
