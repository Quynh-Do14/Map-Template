import React, { useEffect, useState } from 'react';
import "../../assets/css/page/Map.css"
import ChartBar from './BarChart';

const dataFake = [
    {
        "file_path": "static/images/DJI_20240701104353_0018_V.JPG",
        "file_name": "DJI_20240701104353_0018_V.JPG",
        "object_predict": [
            {
                "accuracy": 0.4814090132713318,
                "label": "plastic",
                "xmin": 554.74462890625,
                "ymin": 2744.131591796875,
                "xmax": 866.5475463867188,
                "ymax": 3145.757080078125
            },
            {
                "accuracy": 0.141498484,
                "label": "plastic",
                "xmin": 554.74462890625,
                "ymin": 2744.131591796875,
                "xmax": 866.5475463867188,
                "ymax": 3145.757080078125
            },
            {
                "accuracy": 0.5,
                "label": "plastic",
                "xmin": 554.74462890625,
                "ymin": 2744.131591796875,
                "xmax": 866.5475463867188,
                "ymax": 3145.757080078125
            },
        ],
        "average_accuracy": 0.4814090132713318
    },
    {
        "file_path": "static/images/DJI_20240701104353_0018_V.JPG",
        "file_name": "File 2",
        "object_predict": [
            {
                "accuracy": 0.68,
                "label": "plastic",
                "xmin": 554.74462890625,
                "ymin": 2744.131591796875,
                "xmax": 866.5475463867188,
                "ymax": 3145.757080078125
            },
            {
                "accuracy": 0.2,
                "label": "plastic",
                "xmin": 554.74462890625,
                "ymin": 2744.131591796875,
                "xmax": 866.5475463867188,
                "ymax": 3145.757080078125
            },
            {
                "accuracy": 0.78,
                "label": "plastic",
                "xmin": 554.74462890625,
                "ymin": 2744.131591796875,
                "xmax": 866.5475463867188,
                "ymax": 3145.757080078125
            },
        ],
        "average_accuracy": 0.4814090132713318
    }
]

const ModalChartBar = (props) => {
    const { onOpenDashboard, dataChart } = props;

    return (
        <div className="map-dashboard">
            <button className="close-btn" onClick={onOpenDashboard}>&times;</button>
            {dataChart.map((it, index) => {
                const accuracy = it.object_predict.map(it => {
                    return (it.accuracy * 100).toFixed(0)
                })
                const label = it.object_predict.map(it => {
                    return it.label
                })
                return (
                    <div key={index} className='content'>
                        <div>
                            <div className='label-chart'>
                                <div>{it.file_name}</div>
                                <span>Số lượng điểm rác thải {it.object_predict?.length} ; </span>
                                <span>Độ chính xác trung bình {(it.average_accuracy * 100).toFixed(0)}%</span>
                            </div>
                            <ChartBar
                                label={` Độ chính xác (%) `}
                                dataLabel={label}
                                dataAccurate={accuracy}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default ModalChartBar;
