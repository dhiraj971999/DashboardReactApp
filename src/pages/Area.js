import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';

import ChartsHeader from '../components/ChartHeader';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../data/dummy';
// import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
//   const { currentMode } = useStateContext();

  return (
    <div style={{padding:'1.5rem', backgroundColor:'white'}}>
      <ChartsHeader category="Area" title="Inflation Rate in percentage" />
      <div style={{width:'100%'}}>
        <ChartComponent
          id="charts"
          // width='800px'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
        //   background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;