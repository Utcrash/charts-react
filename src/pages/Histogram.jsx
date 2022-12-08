import React from "react";
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

import highchartsMore from "highcharts/highcharts-more.js"

highchartsMore(Highcharts);


const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = [
    ['Frequent Cash Credit via ATM', randomNumber(10, 100)],
    ['New account debited at ATM', randomNumber(10, 100)],
    ['New account followed by ATM', randomNumber(10, 100)],
    ['Banking at Unusual Hours', randomNumber(10, 100)],
    ['Transaction at Short span of Time via Internet banking', randomNumber(10, 100)],
    ['High Value Credit in New Account', randomNumber(10, 100)],
    ['Cheque Deposit at Multi Locations(Same Day)', randomNumber(10, 100)],
    ['High Value Cash Credit in Staff A/C', randomNumber(10, 100)],
    ['Rule for BSBDA Account', randomNumber(10, 100)],
    ['High Value Deposit', randomNumber(10, 100)],
    ['Sudden Activity in Dormant', randomNumber(10, 100)],
    ['High Value Deposit followed by Frequent Debits', randomNumber(10, 100)],
    ['Negative Balance In Account', randomNumber(10, 100)],
    ['Sudden Spurt in Number of Transactions', randomNumber(10, 100)],
    ['Full Limit Deposit OR Frequent Debit in SB DIGI A/c', randomNumber(10, 100)],
]

const options = {
    chart: {
        type: "bar",
        height: 600
    },
    title: {
        text: "PARAMETERS THAT INFLUENCE RISK"
    },
    // subtitle: {
    //   text:
    //     'Data visualisation'
    // },
    xAxis: {
        categories: data.map(ele => ele[0]),
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: "Percentage",
            align: "high"
        },
        labels: {
            overflow: "justify"
        }
    },
    tooltip: {
        valueSuffix: "%"
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        },
        series: {
            pointWidth: 20 //width of the bars
        }
    },

    legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            "#FFFFFF",
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [
        {
            name: 'Risk Parameters',
            data: data
        }
    ]
};


const Histogram = () => {

    return (
        <div className="py-3" style={{ width: '80vw', height: '800px' }}>
            <HighchartsReact highcharts={Highcharts} options={options} />

        </div>
    );
}

export default Histogram;
