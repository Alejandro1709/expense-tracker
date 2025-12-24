import { ExpenseCard } from '@/components/ExpenseCard'
import { Receipt } from 'lucide-react'
import { useExpenses } from '@/hooks/useExpenses'

export function ExpenseList() {
  const { expenses } = useExpenses()

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
