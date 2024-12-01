import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './table.css';
import jsonData from './data/data.json';

const DataTableComponent = () => {
  const { table_headers, table_data, project_name, output_name, last_run } = jsonData;

  const transformedData = table_data.map((row) => {
    const rowData = {};
    table_headers.forEach((header, index) => {
      rowData[header.name] = row[index];
    });
    return rowData;
  });

  return (
    <div className="data-table-wrapper">
      <div className="project-details-table">
        <span className="label">PROJECT NAME:</span>
        <span className="value">{project_name}</span>
        <span className="label">OUTPUT DATASET NAME:</span>
        <span className="value">{output_name}</span>
        <span className="label">LAST RUN:</span>
        <span className="value">{last_run}</span>
      </div>

      <div className="table-scroll-wrapper">
        <DataTable
          value={transformedData}
          paginator
          rows={20}
          className="custom-data-table"
          scrollable
          scrollHeight="400px" 
        >
          {table_headers.map((header, index) => (
            <Column
              key={index}
              field={header.name}
              header={header.name.replace(/_/g, ' ')}
              style={{ minWidth: '150px' }} 
            />
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default DataTableComponent;
