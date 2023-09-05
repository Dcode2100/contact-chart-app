import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useHistoricalData } from '../services/covid';
import "../styles/loader.css"
import "../App.css"

function LineChartHistoric() {
    const { data, status } = useHistoricalData();

    if (status !== 'success') {
        return (<div className="sk-chase m-auto ">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>);
    }

    const chartData = Object.keys(data.cases).map(date => ({
        date,
        cases: data.cases[date],
        deaths: data.deaths[date],
        recovered: data.recovered[date]
    }));

    return (
        <div className=' p-4 relative flex flex-col border-2 border-primary m-auto chart-container '>
            <h2 className='flex justify-center items-center text-primary text-xl'>Line Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={chartData}>
                    <XAxis dataKey="date" />
                    <YAxis
                        tickFormatter={(value) => `${value / 100000}L`}
                        width={60}
                        tick={{ fontSize: 12 }}
                    />

                    <Tooltip />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="cases" stroke="#8884d8" />
                    <Line type="monotone" dataKey="deaths" stroke="#dc143c" />
                    <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineChartHistoric;
