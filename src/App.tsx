import { useState } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ExpenseTrackerPannel } from '@/components/ExpenseTrackerPannel'
import expenses from './data/expenses'
import type { Expense } from './types/expense'

function App() {
  const [allExpenses, setAllExpenses] = useState<Expense[]>(expenses)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ExpenseTrackerPannel expenses={allExpenses} onSubmit={setAllExpenses} />
    </ThemeProvider>
  )
}

export default App
