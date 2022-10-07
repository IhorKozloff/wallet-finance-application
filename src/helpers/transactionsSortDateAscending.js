export const transactionsSortDateAscending = (data) => {
    return [...data].sort((a,b) => new Date(a.date.year, a.date.month, a.date.day) - new Date(b.date.year, b.date.month, b.date.day));
}