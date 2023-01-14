import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Resize, Sort, Selection, ContextMenu, Toolbar, Filter, Page, ExcelExport, Edit, PdfExport } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import Header from '../components/Header';

const Employees = () => {
  const toolbarOptions = ['Delete','Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div style={{padding:'1rem',backgroundColor:'white', overflowX:'auto'}}>
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        height='500px'
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <div style={{maxHeight:'3rem'}}>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </div>
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Selection, ContextMenu, Toolbar, Filter, Page, ExcelExport, Edit, PdfExport]} />

      </GridComponent>
    </div>
  );
};
export default Employees;