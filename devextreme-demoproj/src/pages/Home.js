import React, { useState } from 'react';
import DataGrid, { Scrolling, Pager, Paging } from 'devextreme-react/data-grid';
import data from "../data/data.json"
import SelectBox from 'devextreme-react/select-box';
import { CheckBox } from 'devextreme-react';

const displayModes = [{ text: 'Display Mode \'full\'', value: 'full' }, { text: 'Display Mode \'compact\'', value: 'compact' }];
const allowedPageSizes = [5, 10, 'all'];

export function Home() {

  const [state, setState] = useState({

    displayMode: 'full',

    showPageSizeSelector: true,

    showInfo: true,

    showNavButtons: true,

  });

  function displayModeChange(value) {

    setState({ ...state, displayMode: value });

  }



  function showPageSizeSelectorChange(value) {

    setState({ ...state, showPageSizeSelector: value });

  }



  function showInfoChange(value) {

    setState({ ...state, showInfo: value });

  }



  function showNavButtonsChange(value) {

    setState({ ...state, showNavButtons: value });

  }



  function isCompactMode() {

    return state.displayMode === 'compact';

  }


    return (
      <div>
        <DataGrid
        dataSource={data}
        keyExpr="email"
        showBorders={true}
        >
        <Scrolling rowRenderingMode='virtual'></Scrolling>
          <Paging defaultPageSize={10} />
          <Pager
            visible={true}
            allowedPageSizes={allowedPageSizes}
            displayMode={state.displayMode}
            showPageSizeSelector={state.showPageSizeSelector}
            showInfo={state.showInfo}
            showNavigationButtons={state.showNavButtons}
          />
        </DataGrid>

        <div className='option'>
          <div className='caption'>Options</div>
          <div className='option-container'>
          <div >
          <SelectBox
            id='displayModes'
            items={displayModes}
            displayExpr='text'
            valueExpr='value'
            value={state.displayMode}
            onValueChange={displayModeChange} 
          />
          </div>

          <div className='option'>
          <CheckBox
            id='showPageSizes'
            // items={allowedPageSizes}
            text='Show Page Size Selector'
            // value={allowedPageSize}
            onValueChange={showPageSizeSelectorChange} 
          />
          </div>  

            <div className='option'>
              <CheckBox
                id='showInfo'
                text='Show Info Text'
                value={state.showInfo}
                onValueChange={showInfoChange}
              />
            </div>        

            <div className='option'>
              <CheckBox
                id='showNavButtons'
                text='Show Navigation Buttons'
                value={state.showNavButtons}
                onValueChange={showNavButtonsChange}
                disabled={isCompactMode()}
                 />
            </div>  



          </div>

        </div>

      </div>

    )
}