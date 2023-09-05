
import React from 'react';
import LineChartHistoric from '../components/LineChartHistoric';
import CovidWorldMap from "../components/CovidWorldMap"
function Dashboard() {
  return (
    <div className='p-5 w-full relative'>
      <LineChartHistoric />
      <CovidWorldMap/>
    </div>
  );
}

export default Dashboard;
