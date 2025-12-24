import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Expense } from '@/types/expense'

type Store = {
  expenses: Expense[]
  setExpenses: (expenses: Expense[]) => void
}

export const useExpenseStore = create<Store>()(
  persist(
    (set) => ({
      expenses: [],

      setExpenses: (expenses) => set({ expenses }),
    }),
    {
      name: 'expenses',
    }
  )
)
