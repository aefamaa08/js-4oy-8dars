const labels = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
const salesData = [25, 28, 32, 30, 27, 35, 40, 38, 34, 36, 39, 42];
const backgroundColors = ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff', '#d9b3ff', '#ff9f40', '#c9cbcf', '#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'];

function createChart(id, type, data, options = {}) {
    new Chart(document.getElementById(id).getContext('2d'), { type, data, options });
}

createChart('barChart', 'bar', {
    labels,
    datasets: [{ label: 'Продажи BMW (тыс.)', data: salesData, backgroundColor: backgroundColors }]
});

createChart('horizontalBarChart', 'bar', {
    labels,
    datasets: [{ label: 'Продажи BMW (тыс.)', data: salesData, backgroundColor: backgroundColors }]
}, { indexAxis: 'y' });

createChart('lineChart', 'line', {
    labels,
    datasets: [{ label: 'Продажи BMW', data: salesData, borderColor: '#ff9f40', borderWidth: 2, fill: false }]
});

createChart('stackedBarChart', 'bar', {
    labels,
    datasets: [
        { label: '2023', data: salesData.map(x => x * 0.8), backgroundColor: '#ff6384' },
        { label: '2024', data: salesData, backgroundColor: '#36a2eb' }
    ]
}, { scales: { x: { stacked: true }, y: { stacked: true } } });

createChart('radarChart', 'radar', {
    labels,
    datasets: [{ label: 'Продажи BMW', data: salesData, backgroundColor: 'rgba(54, 162, 235, 0.5)' }]
});

createChart('doughnutChart', 'doughnut', {
    labels,
    datasets: [{ data: salesData, backgroundColor: backgroundColors }]
});

createChart('lineChart2', 'line', {
    labels,
    datasets: [
        { label: '2023', data: salesData.map(x => x * 0.8), borderColor: '#ff6384', fill: false },
        { label: '2024', data: salesData, borderColor: '#36a2eb', fill: false }
    ]
});

createChart('pieChart', 'pie', {
    labels,
    datasets: [{ data: salesData, backgroundColor: backgroundColors }]
});