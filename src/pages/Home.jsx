import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import Gauges from "./Gauges";
import Histogram from "./Histogram";


const Home = () => {

    const [showData, toggleShowData] = useState(false)

    const data = [
        {
            accountNumber: '0101123456001',
            date: '2020-01-01 10:00:01',
            txnId: '120381921',
            amount: '$100',
            category: 'Fraud',
            riskProfile: '80%'
        },
        {
            accountNumber: '0101123456002',
            date: '2020-01-01 10:00:02',
            txnId: '098958975',
            amount: '$150',
            category: 'Scam',
            riskProfile: '51%'
        },
        {
            accountNumber: '0101123456003',
            date: '2020-01-01 10:00:03',
            txnId: '047652839',
            amount: '$150',
            category: 'Fraud',
            riskProfile: '99%'
        }
    ]

    const TableBody = data.map(ele => {
        return (
            <tr className="hover" onClick={() => {
                toggleShowData(false)
                setTimeout(() => {
                    toggleShowData(true)
                }, 100)
            }}>

                <td>{ele.accountNumber}</td>
                <td>{ele.date}</td>
                <td>{ele.txnId}</td>
                <td>{ele.amount}</td>
                <td>{ele.category}</td>
                <td>{ele.riskProfile}</td>
            </tr>
        )
    })

    const Charts = showData ? (
        <div>
            <h2 className="d-flex justify-content-center">Data</h2>
            <div>
                <Gauges></Gauges>
                <Histogram></Histogram>
            </div>
        </div>
    ) : ''


    return (
        <div className="p-3">
            <h1>Account Info</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">Account Number</th>
                        <th scope="col">Date Time</th>
                        <th scope="col">Txn ID</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Risk Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {TableBody}
                </tbody>
            </Table>

            <div>
                {Charts}
            </div>
        </div>
    );
}

export default Home;
