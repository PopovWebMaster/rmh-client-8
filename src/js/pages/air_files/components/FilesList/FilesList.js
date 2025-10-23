
import React from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './FilesList.scss';

// import { selectorData as companySlice } from './../../../../redux/companySlice.js';

import { FilterSearsh } from './components/FilterSearsh/FilterSearsh.js';
import { FilterEvent } from './components/FilterEvent/FilterEvent.js';
 
import { FilterItemList } from './components/FilterItemList/FilterItemList.js';

import { ScrollContainer } from './../../../../components/ScrollContainer/ScrollContainer.js';
import { SetFilteredList } from './../SetFilteredList/SetFilteredList.js';

import { FilterButtonCheckAll } from './components/FilterButtonCheckAll/FilterButtonCheckAll.js';
import { AssignEventForChecked } from './components/AssignEventForChecked/AssignEventForChecked.js';
import { SortAllCheckedByPrefix } from './components/SortAllCheckedByPrefix/SortAllCheckedByPrefix.js';



const FilesListComponent = ( props ) => {

    let {
        
    } = props;

    return (
        <div className = 'filesList'>

            <div className = 'FS_top_panel'>
                <FilterEvent />
                <FilterSearsh />
            </div>

            <div className = 'FS_top_list_actions'>
                <FilterButtonCheckAll />

                {/* <div className = 'FS_top_list_actions_right'> */}

                    <AssignEventForChecked />
                    <SortAllCheckedByPrefix />

                {/* </div> */}
            </div>

            
            <div className = 'FS_file_items'>
                <ScrollContainer height = 'calc( 100vh - 9em )' >

                    <SetFilteredList>
                        <FilterItemList />
                    </SetFilteredList>

                </ScrollContainer>
                
            </div>

            
        </div>
    )

};


export function FilesList( props ){

    // const company = useSelector( companySlice );
    // const dispatch = useDispatch();

    return (
        <FilesListComponent
            { ...props }

            // aaaa = { ( callback ) => { dispatch( aaa( callback ) ) } }

        />
    );


}
