import { type Expense } from '@/types/expense'
import { ExpenseCard } from './ExpenseCard'
import { Receipt } from 'lucide-react'

interface ExpenseListProps {
  expenses: Expense[]
}

export function ExpenseList({ expenses }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <Receipt className="h-12 w-12 mb-4 opacity-50" />
        <p className="text-lg font-medium">No expenses yet</p>
        <p className="text-sm">Add your first expense to get started</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  )
}
