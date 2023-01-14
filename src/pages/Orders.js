import React from 'react';
import { GridComponent, ColumnsDirective, Toolbar, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, Selection,ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import Header from '../components/Header';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const toolbarOptions = ['Delete','Search'];
  return (
    <div style={{padding:'1rem', backgroundColor:'white'}}>

      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        
        <ColumnsDirective>
        
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          
        </ColumnsDirective>
        
        <Inject services={[Resize, Sort, Selection, ContextMenu, Toolbar, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Orders;