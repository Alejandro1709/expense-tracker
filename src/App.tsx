import { ThemeProvider } from '@/components/ThemeProvider'
import { ExpenseTrackerPannel } from '@/components/ExpenseTrackerPannel'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ExpenseTrackerPannel />
    </ThemeProvider>
  )
}

export default App
