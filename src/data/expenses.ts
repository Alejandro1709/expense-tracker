import type { Expense } from '@/types/expense'

const expenses: Expense[] = [
  {
    id: '1',
    amount: 200,
    description: 'Burger King',
    category: 'food',
    date: new Date(),
  },
  {
    id: '2',
    amount: 25,
    description: 'Uber',
    category: 'transport',
    date: new Date(),
  },
  {
    id: '3',
    amount: 50,
    description: 'Christmas Gift',
    category: 'shopping',
    date: new Date(),
  },
]

export default expenses
