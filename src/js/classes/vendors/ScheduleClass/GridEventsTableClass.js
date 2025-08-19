
import { CHAR_TYPE } from './../../../config/application.js';
import { get_date_list } from './vendors/get_date_list.js';

import store from './../../../redux/store.js';

import { set_to_store } from './set_to_store.js';

export class GridEventsTableClass {
    constructor(){

        this.SubApplication = null;
        this.Event = null;
        this.charType = null;
        this.WeekPointsTemplate = null;

        this.isActive = false;

        this.table = {};


        this.Bind = this.Bind.bind(this);
        this.CreateEmptyTable = this.CreateEmptyTable.bind(this);
        this.FillTableWithReleases = this.FillTableWithReleases.bind(this);
        this.SetTableToStore = this.SetTableToStore.bind(this);
        this.UpdateTable = this.UpdateTable.bind(this);





        

    }

    Bind( params ){
        let {
            SubApplication,
            Event,
            WeekPointsTemplate,
            charType,

        } = params;

        // if( charType === CHAR_TYPE.BLOCK ){
            this.charType =             charType;
            this.SubApplication =       SubApplication;
            this.Event =                Event;
            this.charType =             charType;
            this.WeekPointsTemplate =   WeekPointsTemplate;

            this.isActive = true;
        // };

        
    }

    CreateEmptyTable(){
        if( this.isActive ){
            let dayList = get_date_list( this.SubApplication.period_from, this.SubApplication.period_to );
            for( let i = 0; i < dayList.length; i++ ){
                let { dayNum, YYYY_MM_DD } = dayList[ i ];

                this.table[ YYYY_MM_DD ] = {};

                let points = this.WeekPointsTemplate.GetPoints( dayNum );

                for( let point_i = 0; point_i < points.length; point_i++ ){
                    let {
                        time,
                        sec,
                        title,
                        grid_event_id,
                        duration,
                    } = points[ point_i ];

                    this.table[ YYYY_MM_DD ][ grid_event_id ] = {
                        grid_event: {
                            id: grid_event_id,
                            duration,
                            startTime: sec,
                            title,
                        },
                        content: {}
                    };
                };
            };



        };
    }

    FillTableWithReleases(){

        if( this.isActive ){

            let { application } = store.getState();
            let { applicationList } = application;

            for( let i = 0; i < applicationList.length; i++ ){
                if( applicationList[ i ].event_id  === this.Event.id ){
                    let { sub_application_list } = applicationList[ i ];
                    for( let y = 0; y < sub_application_list.length; y++ ){
                        let { release_list } = sub_application_list[ y ];
                        for( let index = 0; index < release_list.length; index++ ){
                            let {
                                date,
                                duration_sec,
                                file_name,
                                grid_event_id,
                                name,
                                sub_application_id,
                                time_sec,
                                type,
                            } = release_list[ index ];

                            if( this.table[ date ] ){
                                if( this.table[ date ][ grid_event_id ].content[ sub_application_id ] ){
                                    let { fill_count } = this.table[ date ][ grid_event_id ].content[ sub_application_id ];
                                    this.table[ date ][ grid_event_id ].content[ sub_application_id ].fill_count = fill_count + 1;
                                }else{
                                    this.table[ date ][ grid_event_id ].content[ sub_application_id ] = {
                                        duration: duration_sec,
                                        name,
                                        fill_count: 1,
                                    };
                                };
                            };
                        };
                    };
                };
            };
            // date: "2025-07-11"
            // duration_sec: 35
            // file_name: ""
            // grid_event_id: 171
            // name: "Трусы"
            // sub_application_id: 57
            // time_sec: 25019
            // type: "release"
        };

    }

    GetTable(){
        return { ...this.table };
    }


    SetTableToStore(){
        if( this.isActive ){
            set_to_store( 'gridEventTable', this.GetTable() );
        };
    }

    UpdateTable( dayList ){
        if( this.isActive ){
            let sub_app_id =    this.SubApplication.id;
            let duration =      this.SubApplication.duration_sec;
            let name =          this.SubApplication.name;

            let table = structuredClone( this.table );

            for( let i = 0; i < dayList.length; i++ ){
                let { YYYY_MM_DD, timePoints } = dayList[ i ];

                for( let sec in timePoints ){
                    let { fill_count, grid_event_id } = timePoints[ sec ];

                    if( table[ YYYY_MM_DD ][ grid_event_id ] ){

                        let { content } = table[ YYYY_MM_DD ][ grid_event_id ];

                        if( fill_count > 0 ){
                            if( content[ sub_app_id ] ){
                                table[ YYYY_MM_DD ][ grid_event_id ].content[ sub_app_id ].fill_count = fill_count;
                            }else{
                                table[ YYYY_MM_DD ][ grid_event_id ].content[ sub_app_id ] = {
                                    duration,
                                    name,
                                    fill_count,
                                };
                            };
                        }else{

                            let new_content = {};
                            for( let subAppId in content ){
                                if( Number( subAppId ) === Number( sub_app_id ) ){

                                }else{
                                    new_content[ subAppId ] = { ...content[ subAppId ] }
                                };
                            };

                            table[ YYYY_MM_DD ][ grid_event_id ].content = { ...new_content };
                        };

                    };

                };

            };

            this.table = table;
        };

       



    }
}