import { ExpenseForm } from './ExpenseForm'
import { ExpenseList } from './ExpenseList'
import { ExpenseSummary } from './ExpenseSummary'
import type { Expense } from '@/types/expense'

interface Props {
  expenses: Expense[]
  onSubmit: React.Dispatch<React.SetStateAction<Expense[]>>
  onDelete: (id: Expense['id']) => void
}

export function ExpenseTrackerPannel({ expenses, onSubmit, onDelete }: Props) {
  return (
    <div className="min-h-screen bg-background">
      {/* <Toaster position="top-center" /> */}
      <div className="container max-w-4xl mx-auto py-8 px-4 sm:py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Expense Tracker
          </h1>
          <p className="text-muted-foreground mt-1">
            Keep track of your spending habits
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          {/* Main content */}
          <div className="space-y-6 order-2 lg:order-1">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Recent Expenses
              </h2>
              <ExpenseList expenses={expenses} onDelete={onDelete} />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 order-1 lg:order-2">
            <ExpenseSummary total={100} count={1} />
            <ExpenseForm expenses={expenses} onSubmit={onSubmit} />
          </aside>
        </div>
      </div>
    </div>
  )
}
