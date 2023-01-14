import React from 'react';
import ChartsHeader from '../components/ChartHeader';
import StackedChart from '../components/Charts/StackedChart';

const Stacked = ()=>(
    <div style={{padding:'1.5rem', backgroundColor:'white'}}>
    <ChartsHeader category="Stacked" title="Revenue Breakdown" />
    <StackedChart width='100%' height='500px'/>
    </div>

);

export default Stacked;