import React, { useEffect, useState } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../data/dummy';
// import { useStateContext } from '../../contexts/ContextProvider';
import ChartsHeader from '../components/ChartHeader';
// import { useStateContext } from '../contexts/ContextProvider';
const Line = () => {
  // const { currentMode } = useStateContext();
//   const { activeMenu } = useStateContext(); 
  
//   const [value, setValue] = useState();

// useEffect(() => { setValue(activeMenu) }, [activeMenu]); 
  return (
    <div style={{padding:'1.5rem', width:'100%', backgroundColor:'white'}}>

         <ChartsHeader category="Line" title="Inflation Rate" />
    
    <ChartComponent
      id="line-chart"
      height="420px"
     width='100%'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
      canResize= "true"
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  );
};

export default Line;