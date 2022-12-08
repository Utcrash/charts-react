import React from "react";
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

import highchartsMore from "highcharts/highcharts-more.js"
import solidGauge from "highcharts/modules/solid-gauge.js";
import { Row, Col } from 'react-bootstrap'

highchartsMore(Highcharts);
solidGauge(Highcharts);

const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createChartGauge = (data) => {
    return {
        chart: {
            type: 'solidgauge',
        },
        title: {
            text: '',

        },
        credits: {
            enabled: false,
        },
        pane: {
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '60%'],
            size: '100%',
            background: {
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc',
            },
        },
        yAxis: {
            min: 0,
            max: 100,
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'], // red
            ],
            minorTickInterval: null,
            tickAmount: 2,
            labels: {
                y: 16,
            },
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: -25,
                    borderWidth: 0,
                    useHTML: true,
                },
            },
        },
        tooltip: {
            enabled: false,
        },
        series: [{
            name: null,
            data: [data],
            dataLabels: {
                format: '<div style="text-align: center"><span style="font-size: 1.25rem">{y}%</span></div>',
            },
        }],
    }
}

const Gauges = () => {

    return (
        <Row className="py-3" style={{ width: '100vw' }}>
            <Col>
                <HighchartsReact highcharts={Highcharts} options={createChartGauge(randomNumber(0, 100))} />
                <label className="d-flex justify-content-center">Operational</label>
            </Col>
            <Col>
                <HighchartsReact highcharts={Highcharts} options={createChartGauge(randomNumber(0, 100))} />
                <label className="d-flex justify-content-center">Compliance</label>
            </Col>
            <Col>
                <HighchartsReact highcharts={Highcharts} options={createChartGauge(randomNumber(0, 100))} />
                <label className="d-flex justify-content-center">Legal</label>
            </Col>


        </Row>
    );
}

export default Gauges;
