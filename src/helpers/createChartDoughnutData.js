export const createChartDoughnutData = (name, {initialData}) => {
    console.log('сработала createChartDoughnutData, и вот ее дата')
    console.log(initialData)

    const initial = {
        labels: [],
        datasets: [
            {
                label: `${name}`,
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1,
            }
        ],
    };

    return initialData.reduce((count, {categoryColor, categoryName, categorySum}) => {      
        count.labels = [...count.labels, categoryName];
        count.datasets[0].data = [...count.datasets[0].data, categorySum];
        count.datasets[0].borderColor = [...count.datasets[0].borderColor, categoryColor];
        count.datasets[0].backgroundColor = [...count.datasets[0].backgroundColor, categoryColor];
        return count;
    }, initial)
}