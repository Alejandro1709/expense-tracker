import { useEffect, useState } from 'react'
import type { Expense } from '@/types/expense'

const STORAGE_KEY = 'expenses'

export function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      return parsed.map((e: Expense) => ({
        ...e,
        date: new Date(e.date),
      }))
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses))
  }, [expenses])

  const createExpense = (expense: Omit<Expense, 'id'>) => {
    const newExpense: Expense = {
      ...expense,
      id: crypto.randomUUID(),
    }

    setExpenses((prev) => [...prev, newExpense])
  }

  const deleteExpense = (id: Expense['id']) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id)

    setExpenses(newExpenses)
  }

  const totalExpense = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  )

  return {
    expenses,
    totalExpense,
    createExpense,
    deleteExpense,
  }
}
