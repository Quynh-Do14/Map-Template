import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from 'chart.js';
import "../../assets/css/page/Map.css"
// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

type Props = {
    data?: ChartData<'bar'>;
    options?: ChartOptions<'bar'>;
    onOpenDashboard: () => void
}

const ChartBar = (props: Props) => {
    const { data, options, onOpenDashboard } = props
    // Default data and options for the chart
    const defaultData: ChartData<'bar'> = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const defaultOptions: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="map-dashboard">
            <button className="close-btn" onClick={onOpenDashboard}>&times;</button>
            <Bar data={data || defaultData} options={options || defaultOptions} />
        </div>
    )
};
export default ChartBar;
