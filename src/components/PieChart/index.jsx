import React from 'react'
import { Pie } from 'react-chartjs-2'
import { genBgColors } from '../../utils/genBgColors';

const PieChart = ({ title, legend, dataX, dataY }) => {

    const data = {
        labels: dataX,
        datasets: [
            {
                label: legend,
                data: dataY,
                backgroundColor: genBgColors(dataY),
            },
        ],
    };

    return (
        <>
            <p>{title}</p>
            <Pie data={data} />
        </>
    )
}

export default PieChart