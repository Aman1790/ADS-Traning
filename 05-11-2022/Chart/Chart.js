import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
    const dataPointsValues =  props.datapoints.map(datapoint =>{return (datapoint.value)});
    const totalMaximun =Math.max(...dataPointsValues);
    return (
        <div className="chart">
            {props.datapoints.map(datapoint => (
                <ChartBar
                key={datapoint.label}
                    value={datapoint.value}
                    maxValue={totalMaximun}
                    label={datapoint.label} />)
            )}

        </div>
    )
}

export default Chart;
