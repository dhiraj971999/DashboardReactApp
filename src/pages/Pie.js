import React from 'react';

import { pieChartData } from '../data/dummy';
// import { ChartsHeader, Pie as PieChart } from '../../components';
import ChartsHeader from '../components/ChartHeader';
import PieChart from '../components/Charts/PieChart';

const Pie = () => (
<div style={{padding:'1.5rem', backgroundColor:'white'}}>
       <ChartsHeader category="Pie" title="Project Cost Breakdown" />
    <div>
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" width='100%' />
    </div>
  </div>
);

export default Pie;