
import React, { useRef, useState, useEffect }   from "react";

// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './SheduleEditorComponent.scss';

import * as XLSX from 'xlsx';



// import { selectorData as applicationSlice} from './../../../../../../../../redux/applicationSlice.js';

import { UpdateCurrentSubAppData } from './../UpdateCurrentSubAppData/UpdateCurrentSubAppData.js';
import { ScheduleClass } from './../../../../../../../../classes/ScheduleClass.js';

import { EnvironmentShow }      from './components/EnvironmentShow/EnvironmentShow.js';
import { ScheduleHeader }       from './components/ScheduleHeader/ScheduleHeader.js';
import { ScheduleSaveButton }   from './components/ScheduleSaveButton/ScheduleSaveButton.js';
import { ScheduleTimeColumn }   from './components/ScheduleTimeColumn/ScheduleTimeColumn.js';
import { ScheduleTable }        from './components/ScheduleTable/ScheduleTable.js';


const SheduleEditorComponentComponent = ( props ) => {

    let {
        isOpen,
        setIsOpen,


    } = props;

    let [ Schedule, setSchedule ] = useState( null );
    let [ isReady, setIsReady ] = useState( false );

    const tbl = useRef();

    useEffect( () => {
        if( isOpen ){
            setSchedule( new ScheduleClass() );
        }else{
            if( Schedule !== null ){
                Schedule.Remove();
            };
            setSchedule( null );

        };
    }, [ isOpen ] );


    useEffect( () => {
        if( Schedule === null ){
            setIsReady( false );
        }else{
            
            Schedule.Create();
            setIsReady( true );
        };

    }, [ Schedule ] );











    const click = () => {

        var workbook = XLSX.utils.book_new();

        var ws = XLSX.utils.aoa_to_sheet([
            ["A11111", "B1", "C1"],
            ["A2", "B22222", "C2"],
            ["A3", "B3", "C333333"]
        ])
        ws['A1'].s = {
            font: {
                name: 'arial',
                sz: 24,
                bold: true,
                color: "#F2F2F2"
            },
        }

        XLSX.utils.book_append_sheet(workbook, ws, "SheetName");
        XLSX.writeFile(workbook, 'FileName.xlsx');







        // const wb = XLSX.utils.table_to_book(tbl.current);
        // XLSX.writeFile(wb, "SheetJSTable.xlsx");





        // const MYdata = [
        // {"title":'Title1', "website":"Foo"},
        // {"title":'Title2', "website":"Bar"}
        // ]

        // const worksheet = XLSX.utils.json_to_sheet(MYdata);
        // const workbook = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        // XLSX.writeFile(workbook, "MYSavedData.xlsx");
    }





    return (
        <div className = 'sheduleEditorComponent'>

            <table ref={tbl}><tbody>
            <tr><td colSpan="3" rowSpan='4' style = {{fontWeight: 'bold'}}>SheetJS Table Export</td></tr>
            <tr><td>Author</td><td>ID</td><td>你好!</td></tr>
            <tr><td>SheetJS</td><td>7262</td><td>வணக்கம்!</td></tr>
            <tr><td colSpan="3">
                <a href="//sheetjs.com">Powered by SheetJS</a>
            </td></tr>
            </tbody></table>



            <EnvironmentShow />

            <UpdateCurrentSubAppData>

                { isReady? (<>

                    <ScheduleHeader>

                        <div
                            onClick = { click }
                        >скачать</div>
                        <ScheduleSaveButton
                            Schedule =      { Schedule }
                            setSchedule =   { setSchedule }
                        />
                    </ScheduleHeader>
                    

                    <div className = 'SEC_body'>
                        <div className = 'SEC_body_left'>
                            <ScheduleTimeColumn 
                                Schedule = { Schedule }
                            />

                        </div>

                        <div className = 'SEC_body_center'>

                            <ScheduleTable 
                                Schedule = { Schedule }
                            />

                        </div>
                        
                    </div>
                
                </>): '' }

            </UpdateCurrentSubAppData>

        </div>
    )

};

export function SheduleEditorComponent( props ){

    // const application = useSelector( applicationSlice );
    // const dispatch = useDispatch();

    return (
        <SheduleEditorComponentComponent
            { ...props }

            // setCurrentApplicationId = { ( val ) => { dispatch( setCurrentApplicationId( val ) ) } }

        />
    );


}
