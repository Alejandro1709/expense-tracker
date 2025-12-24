import { create } from 'zustand'
import type { Expense } from '@/types/expense'

type Store = {
  expenses: Expense[]
  setExpenses: (expenses: Expense[]) => void
}

export const useExpenseStore = create<Store>((set) => ({
  expenses: [],
  setExpenses: (expenses: Expense[]) => set(() => ({ expenses })),
}))
