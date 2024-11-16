import React, { useEffect, useState } from 'react';
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
    label: string;
    dataLabel: string[];
    dataAccurate: number[]
}

const ChartBar = (props: Props) => {
    const { label, dataLabel, dataAccurate } = props

    const defaultData: ChartData<'bar'> = {
        labels: dataLabel,
        datasets: [
            {
                label: label,
                data: dataAccurate,
                backgroundColor: '#004466',
                borderColor: '#004466',
                borderWidth: 1,
                minBarLength: 10,
                maxBarThickness: 40,
            },
        ],
    };

    const defaultOptions: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            // title: {
            //     display: true,
            //     text: title,
            // },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <Bar data={defaultData} options={defaultOptions} />
    )
};
export default ChartBar;
