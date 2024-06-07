export function decreaseString(text: string): string {
  if (text.length > 105) {
    return text.slice(0, 105) + '...'
  }
  return text
}

export function formatCurrency(value: number): string {
  const formatter = new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  }).format(value)

  return formatter
}
