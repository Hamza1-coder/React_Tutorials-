import './Chart.css'

import React from 'react'
import ChartBar from './ChartBar'

const Chart = (props) => {
  // const dataPointsValues = props.datapoints.map(datapoint => datapoint.value);
  // const MaxValue = Math.max(...dataPointsValues);
  const points = props.dataPoints.map((point,index) => point.value);
  const maxVal = Math.max(...points);
  
  return (
    <div className='chart'>
      {props.dataPoints.map((datapoint,index) => <ChartBar key={index} value={datapoint.value} maxValue={maxVal} label={datapoint.label} />)}
    </div>
  )
}

export default Chart
