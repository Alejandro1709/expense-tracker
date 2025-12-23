export type ExpenseCategory =
  | 'food'
  | 'transport'
  | 'shopping'
  | 'entertainment'
  | 'bills'
  | 'health'
  | 'other'

export interface Expense {
  id: string
  amount: number
  description: string
  category: ExpenseCategory
  date: Date
}

export const categoryLabels: Record<ExpenseCategory, string> = {
  food: 'Food & Dining',
  transport: 'Transport',
  shopping: 'Shopping',
  entertainment: 'Entertainment',
  bills: 'Bills & Utilities',
  health: 'Health',
  other: 'Other',
}

export const categoryIcons: Record<ExpenseCategory, string> = {
  food: '🍔',
  transport: '🚗',
  shopping: '🛍️',
  entertainment: '🎬',
  bills: '📄',
  health: '💊',
  other: '📦',
}
