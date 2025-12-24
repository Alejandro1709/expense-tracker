import {
  type ExpenseCategory,
  categoryLabels,
  categoryIcons,
} from '@/types/expense'
import { cn } from '@/lib/utils'

interface CategoryBadgeProps {
  category: ExpenseCategory
  showLabel?: boolean
  className?: string
}

const categoryStyles: Record<ExpenseCategory, string> = {
  food: 'bg-category-food/15 text-category-food',
  transport: 'bg-category-transport/15 text-category-transport',
  shopping: 'bg-category-shopping/15 text-category-shopping',
  entertainment: 'bg-category-entertainment/15 text-category-entertainment',
  bills: 'bg-category-bills/15 text-category-bills',
  health: 'bg-category-health/15 text-category-health',
  other: 'bg-category-other/15 text-category-other',
}

export function CategoryBadge({
  category,
  showLabel = true,
  className,
}: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium',
        categoryStyles[category],
        className
      )}
    >
      <span>{categoryIcons[category]}</span>
      {showLabel && <span>{categoryLabels[category]}</span>}
    </span>
  )
}
