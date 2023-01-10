import React from 'react';
import DataGrid from 'devextreme-react/data-grid';
import data from "../data/data.json"


const allowedPageSizes = [5, 10, 'all'];

export function Home() {
    return (
      <div>
        <DataGrid
        dataSource={data}
        keyExpr="email"
        showBorders={true}
        >
        
        </DataGrid>
      </div>

    )
}