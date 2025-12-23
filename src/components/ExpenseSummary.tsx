import { Wallet } from 'lucide-react'

interface ExpenseSummaryProps {
  total: number
  count: number
}

export function ExpenseSummary({ total, count }: ExpenseSummaryProps) {
  return (
    <div className="bg-primary text-primary-foreground p-6 rounded-xl shadow-card">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-primary-foreground/20 rounded-lg">
          <Wallet className="h-5 w-5" />
        </div>
        <span className="text-sm font-medium opacity-90">Total Spent</span>
      </div>
      <p className="text-3xl font-bold">${total.toFixed(2)}</p>
      <p className="text-sm opacity-75 mt-1">
        {count} expense{count !== 1 ? 's' : ''} tracked
      </p>
    </div>
  )
}
