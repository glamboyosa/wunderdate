export function transformDates(date: Date, createdAt: string) {
  return new Intl.DateTimeFormat('en-GB').format(date) ===
    new Intl.DateTimeFormat('en-GB').format(new Date(createdAt))
    ? new Intl.DateTimeFormat('en-GB', {
        timeStyle: 'short',
      }).format(new Date(createdAt))
    : new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'short',
        timeStyle: 'short',
      }).format(new Date(createdAt))
}
