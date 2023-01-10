import React from 'react';
import DataGrid from 'devextreme-react/data-grid';
import data from "../data/data.json"


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