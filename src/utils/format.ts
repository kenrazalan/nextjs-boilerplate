/**
 * Formats a number as currency
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns The formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Formats a date
 * @param date - The date to format
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns The formatted date string
 */
export function formatDate(
  date: Date | string | number,
  locale: string = "en-US",
): string {
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj);
}

/**
 * Truncates a string to a specified length
 * @param str - The string to truncate
 * @param length - The maximum length (default: 50)
 * @param ending - The ending to append (default: '...')
 * @returns The truncated string
 */
export function truncateString(
  str: string,
  length: number = 50,
  ending: string = "...",
): string {
  if (str.length <= length) return str;
  return str.substring(0, length - ending.length) + ending;
}
