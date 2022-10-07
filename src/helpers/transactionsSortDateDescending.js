export const transactionsSortDateDescending = (data) => {
    return [...data].sort((a,b) => new Date(b.date.year, b.date.month, b.date.day) - new Date(a.date.year, a.date.month, a.date.day));
}