export const calculateBalance = (data) => {
    let totalBalance = 0;

    const balancedData = data.map(item => {
        const newItem = {...item}

        if (newItem.type === "income") {
            totalBalance += newItem.sum
            
        } else {
            totalBalance -= newItem.sum
        }
        newItem.balance = totalBalance
        return newItem
    })

    return [totalBalance, balancedData]
}