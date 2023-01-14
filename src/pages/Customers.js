import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import Header from '../components/Header';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete','Search'];
  const editing = { allowDeleting: true, allowEditing: true };
  const filterSettings = { columns: [
    { field: 'CustomerID', operator: 'greaterthan', value: 2 }
] };

  return (
    <div style={{padding:'1rem', backgroundColor:'white'}}>
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting       
        
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>


        {/* <ColumnsDirective>
        <ColumnDirective field='CustomerImage' width='100' textAlign="Right"/>
        <ColumnDirective field='CustomerID' width='100'/>
        <ColumnDirective field='CustomerName' width='100' textAlign="Right"/>
        <ColumnDirective field='ProjectName' width='100' format="C2" textAlign="Right"/>
        <ColumnDirective field='Budget' width='100'/>
    </ColumnsDirective> */}

        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;