

import * as XLSX from 'xlsx-js-style';

import { get_first_excel_row } from './get_first_excel_row.js';

import store from './../../../../../../../redux/store.js';
import { convert_sec_to_time } from './../../../../../../../helpers/convert_sec_to_time.js';

import { get_cell_A } from './get_cell_A.js';
import { get_cell_B } from './get_cell_B.js';
import { get_cell_C } from './get_cell_C.js';
import { get_cell_D } from './get_cell_D.js';

import { get_file_name } from './get_file_name.js';



import { MOUNTH_NAME } from './../.././../../../../../config/mounth.js';


export class ResultScheduleClass {

    constructor(){

        this.eventsList = [];

        this.currentDate = '';
        this.currentDayNum = '';
        this.currentMonth = '';
        this.currentYear = '';

        this.collsWidthList =   [ { width: 5 }, { width: 7.4 }, { width: 18 }, { width: 64 }, ];

        this.rowsHeightList =   [ { hpx: 30 }, ];
        this.mergesList =       [ 'A1:E1', ];

        this.rows = [];

        



        this.AddUsedEvents = this.AddUsedEvents.bind(this);
        this.SetCurrentDate = this.SetCurrentDate.bind(this);
        this.SetCurrentDayNum = this.SetCurrentDayNum.bind(this);
        this.SetCurrentMonth = this.SetCurrentMonth.bind(this);
        this.SetCurrentYear = this.SetCurrentYear.bind(this);

        this.CreateFirstRow = this.CreateFirstRow.bind(this);
        this.CreateBodyRows = this.CreateBodyRows.bind(this);




        this.Download = this.Download.bind(this);



    }

    AddUsedEvents( arr ){
        for( let i = 0; i < arr.length; i++ ){
            let item = structuredClone( arr[ i ] );
            this.eventsList.push( item );
        };
    }

    SetCurrentDate( val ){
        this.currentDate = val;
    }

    SetCurrentDayNum( val ){
        this.currentDayNum = val;
    }

    SetCurrentMonth( val ){
        this.currentMonth = val;
    }

    SetCurrentYear( val ){
        this.currentYear = val;
    }

    CreateFirstRow(){
        this.rows.push( get_first_excel_row({
            currentDate:    this.currentDate,
            currentDayNum:  this.currentDayNum,
            currentMonth:   this.currentMonth,
            currentYear:    this.currentYear,
        }) );
    }

    CreateBodyRows(){

        for( let i = 0; i < this.eventsList.length; i++ ){
            let {
                cutPart,
                dayNum,
                durationTime,
                eventId,
                finalNotes,
                firstSegmentId,
                gridEventId,
                id,
                isKeyPoint,
                is_premiere,
                notes,
                pushIt,
                releases,
                startTime,
                withOnlyApplications,
            } = this.eventsList[ i ];

            let isLastBlockRow = true;

            if( releases.length > 0 ){
                
                if( releases.length === 1 ){
                    isLastBlockRow = true;
                }else{
                    isLastBlockRow = false;
                }
            }else{
                isLastBlockRow = true;
            };

            let cell_A = get_cell_A( startTime, isKeyPoint, isLastBlockRow );
            let cell_B = get_cell_B( durationTime, isLastBlockRow );
            let cell_C = get_cell_C( eventId, isLastBlockRow );
            let cell_D = get_cell_D( releases[ 0 ]? releases[ 0 ]: false, finalNotes, releases[ 1 ]? false: true );

            this.rows.push( [ cell_A, cell_B, cell_C, cell_D ] );

            for( let rel_index = 1; rel_index < releases.length; rel_index++ ){
                let cell_A_ = {};
                let cell_B_ = {};
                let cell_C_ = {};
                let cell_D_ = {};
                if( releases[ rel_index + 1 ] ){
                    cell_A_ = get_cell_A( false, false, false );
                    cell_B_ = get_cell_B( null, false );
                    cell_C_ = get_cell_C( null, false );
                    cell_D_ = get_cell_D( releases[ rel_index ], finalNotes, false );
                }else{
                    cell_A_ = get_cell_A( false, false, true );
                    cell_B_ = get_cell_B( null, true );
                    cell_C_ = get_cell_C( null, true );
                    cell_D_ = get_cell_D( releases[ rel_index ], finalNotes, true );
                };
                this.rows.push( [ cell_A_, cell_B_, cell_C_, cell_D_ ] );
            };

            if( this.eventsList[ i + 1 ] ){
                let razn = this.eventsList[ i + 1 ].startTime - 1 - durationTime - startTime;

                if( razn === 0 ){

                }else{
                    this.rows.push( [ {}, {}, {}, {} ] );
                };

            };
            
// cutPart: null
// dayNum: 4
// durationTime: 180
// eventId: 12
// finalNotes: ""
// firstSegmentId: null
// gridEventId: 324
// id: 324
// isKeyPoint: false
// is_premiere: false
// notes: ""
// pushIt: null
// releases: []
// startTime: 26701
// withOnlyApplications: false

        };

    }


    Download(){

        this.CreateFirstRow();

        this.CreateBodyRows();

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet( this.rows );

        ws['!cols'] = [ { width: 9.8 }, { width: 9.8 }, { width: 20 }, { width: 53 },  ];
        ws['!rows'] = [ { hpx: 30 }, ];
        ws["!merges"] = [
            XLSX.utils.decode_range("A1:D1"),
        ];
        let sheetName = `${this.currentDate} ${MOUNTH_NAME[this.currentMonth]}`;
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        let fileName = get_file_name({
            currentDate: this.currentDate,
            currentDayNum: this.currentDayNum,
            currentMonth: this.currentMonth,
            currentYear: this.currentYear,
        });
        XLSX.writeFile(wb, fileName);

    }





}