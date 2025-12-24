import { ExpenseForm } from '@/components/ExpenseForm'
import { ExpenseList } from '@/components/ExpenseList'
import { ExpenseSummary } from '@/components/ExpenseSummary'
import { useExpenseStore } from '@/stores/useExpenseStore'
import type { Expense } from '@/types/expense'
import { ThemeToggler } from './ThemeToggler'

export function ExpenseTrackerPannel() {
  const expenses = useExpenseStore((state) => state.expenses)
  const setExpenses = useExpenseStore((state) => state.setExpenses)

  const handleCreateExpense = (expense: Expense) => {
    setExpenses([...expenses, expense])
  }

  const handleDeleteExpense = (id: Expense['id']) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id)

    setExpenses(newExpenses)
  }

  const totalExpense = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-8 px-4 sm:py-12">
        {/* Header */}
        <header className="flex flex-row justify-between items-center mb-8">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-foreground">
              Expense Tracker
            </h1>
            <p className="text-muted-foreground mt-1">
              Keep track of your spending habits
            </p>
          </div>

          <div className="flex flex-row">
            <ThemeToggler />
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          {/* Main content */}
          <div className="space-y-6 order-2 lg:order-1">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Recent Expenses
              </h2>
              <ExpenseList onDelete={handleDeleteExpense} />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 order-1 lg:order-2">
            <ExpenseSummary total={totalExpense} count={expenses.length} />
            <ExpenseForm onCreate={handleCreateExpense} />
          </aside>
        </div>
      </div>
    </div>
  )
}
