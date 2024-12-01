import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import "./table.css";
import ProjectDetails from "./ProjectDetails";
import jsonData from "./data/data.json";

const DataTableComponent = () => {
  const { table_headers, table_data, project_name, output_name, last_run } = jsonData;

  const transformedData = table_data.map((row) => {
    const rowData = {};
    table_headers.forEach((header, index) => {
      rowData[header.name] = row[index];
    });
    return rowData;
  });

  const dropdownOptions = [
    { label: "String", value: "string" },
    { label: "Int", value: "int" },
    { label: "Float", value: "float" },
  ];

  const [columnTypes, setColumnTypes] = useState({});

  const handleDropdownChange = (e, columnName) => {
    setColumnTypes((prevTypes) => ({
      ...prevTypes,
      [columnName]: e.value,
    }));
  };

  return (
    <div className="data-table-wrapper">
      <ProjectDetails
        project_name={project_name}
        output_name={output_name}
        last_run={last_run}
        transformedData={transformedData}
      />

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
              header={
                <div className="header-container-in-table">
                  <span>{header.name.replace(/_/g, " ")}</span>
                  <div className="divider"></div>
                  <Dropdown
                    options={dropdownOptions}
                    value={columnTypes[header.name]} 
                    onChange={(e) => handleDropdownChange(e, header.name)} 
                    placeholder="Select Type"
                    className="header-dropdown"
                  />
                </div>
              }
              style={{ minWidth: "200px" }} 
            />
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default DataTableComponent;
