import { CategoryBadge } from '@/components/CategoryBadge'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { format } from 'date-fns'
import { type Expense } from '@/types/expense'
import { useExpenses } from '@/hooks/useExpenses'

interface ExpenseCardProps {
  expense: Expense
}

export function ExpenseCard({ expense }: ExpenseCardProps) {
  const { deleteExpense } = useExpenses()

  return (
    <div className="group flex items-center justify-between p-4 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-all duration-200 animate-fade-in">
      <div className="flex items-center gap-4">
        <CategoryBadge
          category={expense.category}
          showLabel={false}
          className="text-lg"
        />
        <div>
          <p className="font-medium text-foreground">{expense.description}</p>
          <p className="text-sm text-muted-foreground">
            {format(expense.date, 'MMM d, yyyy')}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-foreground">
          ${expense.amount.toFixed(2)}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          onClick={() => deleteExpense(expense.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
