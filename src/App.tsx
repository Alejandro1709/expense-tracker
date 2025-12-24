import { useState } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ExpenseTrackerPannel } from '@/components/ExpenseTrackerPannel'
import expenses from '@/data/expenses'
import type { Expense } from '@/types/expense'

function App() {
  const [allExpenses, setAllExpenses] = useState<Expense[]>(expenses)

  const handleDeleteExpense = (id: Expense['id']) => {
    const newExpenses = allExpenses.filter((expense) => expense.id !== id)

    setAllExpenses(newExpenses)
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ExpenseTrackerPannel
        expenses={allExpenses}
        onSubmit={setAllExpenses}
        onDelete={handleDeleteExpense}
      />
    </ThemeProvider>
  )
}

export default App
