import React from 'react';
import './Ecommerce.css';
// import { BsCurrencyDollar } from 'react-icons/bs';
// import { GoPrimitiveDot } from 'react-icons/go';
// import { IoIosMore } from 'react-icons/io';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import SparkLine from './Charts/SparkLine';
import StackedChart from './Charts/StackedChart';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <>
      <div className='main-ecommerce'>
        <div className="earnings">
          <p>Earnings</p>
          <p className='earnings-figure'>$1,589,327</p>
          <button>Download</button>
        </div>


        <div className="cards-ecommerce">
          {earningData.map((item) => (
            <div className='single-card' key={item.title}>
              <button style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                {item.icon}
              </button>
              <p>{item.amount} {item.percentage}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="main-revenue">
        <div className="linepart">
          <h4>Revenue Updates</h4>
          <div style={{borderRight: '1px solid gray'}}>
          <div className="budget-exp">
            <p className='figure-budget-exp' >$93,438</p>
            <p style={{ fontSize: '1rem' }}>Budget</p>
          </div>
          <div className="budget-exp">
            <p className='figure-budget-exp'>$93,438</p>
            <p style={{ fontSize: '1rem' }}>Budget</p>
          </div>
          <div className='sparkline'>
            <SparkLine currentColor='blue' id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color='blue' />
          </div>
          <button>Download Report</button>
          </div>
        </div>

        <div className="chartpart">
          <div>
            <StackedChart currentMode='light' width="320px" height="360px" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Ecommerce
