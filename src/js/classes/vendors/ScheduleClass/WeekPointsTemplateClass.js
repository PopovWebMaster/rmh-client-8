
import { AllTimePointsClass } from './AllTimePointsClass.js';
import { TimePointClass } from './TimePointClass.js';

import { CHAR_TYPE } from './../../../config/application.js';

import { get_all_time_points_from_release_list } from './vendors/get_all_time_points_from_release_list.js';
import { get_week_point_list } from './vendors/get_week_point_list.js';
import { convert_sec_to_time } from './../../../helpers/convert_sec_to_time.js';

export class WeekPointsTemplateClass {
    constructor(){

        this.week = [ [], [], [], [], [], [], [], ];

        this.SubApplication = null;
        this.Event = null;
        this.AllTimePoints = new AllTimePointsClass();
        this.charType = null;


        this.Bind = this.Bind.bind(this);
        this.CreateTemplate = this.CreateTemplate.bind(this);

        this.CreateTemplateBlind = this.CreateTemplateBlind.bind(this);
        this.CreateTemplateBlock = this.CreateTemplateBlock.bind(this);
        this.CreateTemplateFile = this.CreateTemplateFile.bind(this);
        this.GetAllTimePointsList = this.GetAllTimePointsList.bind(this);
        this.GetPoints = this.GetPoints.bind(this);
        this.GetAllTimePointsGroupList = this.GetAllTimePointsGroupList.bind(this);




        


    }

    Bind( props ){
        let {
            SubApplication,
            charType,
            
            Event,
        } = props;

        this.SubApplication = SubApplication;
        this.charType = charType;
        this.Event = Event;

    }

    CreateTemplate(){

        switch( this.charType ){
            case CHAR_TYPE.BLIND:
                this.CreateTemplateBlind();
                break;

            case CHAR_TYPE.BLOCK:
                this.CreateTemplateBlock();
                break;

            case CHAR_TYPE.FILE:
                this.CreateTemplateFile();
                break;
        };

    }

    CreateTemplateBlind(){

        let list = get_all_time_points_from_release_list( this.SubApplication.GetReleaseList() );

        for( let i = 0; i < list.length; i++ ){
            this.AllTimePoints.AddPoint( list[ i ] );
        };

        let dayPoints = this.AllTimePoints.GetTimePointList();

        for( let dayNum = 0; dayNum < 7; dayNum++ ){
            this.week[ dayNum ] = [ ...dayPoints ];
        };

    }

    CreateTemplateBlock(){
        let { all_time_points, week_point_list } = get_week_point_list( this.Event.id, this.SubApplication.GetReleaseList() );

        for( let i = 0; i < all_time_points.length; i++ ){
            this.AllTimePoints.AddPoint( all_time_points[ i ] );
        };

        this.week = week_point_list;

        
    }

    CreateTemplateFile(){
        let { all_time_points, week_point_list } = get_week_point_list( this.Event.id, this.SubApplication.GetReleaseList() );

        // console.dir( 'all_time_points' );
        // console.dir( all_time_points );

        // console.dir( 'week_point_list' );
        // console.dir( week_point_list );

        for( let i = 0; i < all_time_points.length; i++ ){
            this.AllTimePoints.AddPoint( all_time_points[ i ] );
        };

        this.week = week_point_list;

    }

    GetAllTimePointsList(){
        return [ ...this.AllTimePoints.GetTimePointList() ];
    }

    GetAllTimePointsGroupList( isBlind = false ){

        let all = [];

        let max_diference = 600;

        for( let dayNum = 0; dayNum < this.week.length; dayNum++ ){
            for( let i = 0; i < this.week[ dayNum ].length; i++ ){
                let { duration, sec, grid_event_id } = this.week[ dayNum ][ i ];
                let interval = {
                    from: sec,
                    to: sec + duration,
                };
                let sec_list = [ sec ];
                let grid_event_id_list = [ grid_event_id ];

                all.push( { ...this.week[ dayNum ][ i ], interval, sec_list, grid_event_id_list } );
            };
        };

        let sort_all = all.sort( ( a, b ) => {
            if( a.sec > b.sec ){ return 1 }
            if( a.sec < b.sec ){ return -1 }
            if( a.sec === b.sec ){ return 0 }
        } );

        let merg_arr = [];
        const recursive_merge = ( i ) => {
            if( sort_all[ i ] ){
                if( i === 0 ){
                    merg_arr.push( { ...sort_all[ i ] } );
                }else{

                    let prev_from = merg_arr[ merg_arr.length - 1 ].interval.from;
                    let prev_to =   merg_arr[ merg_arr.length - 1 ].interval.to;

                    let from =  sort_all[ i ].interval.from;
                    let to =    sort_all[ i ].interval.to;

                    if( prev_to + max_diference >= from ){
                        if( to > prev_to ){
                            merg_arr[ merg_arr.length - 1 ].interval.to = to;
                        };
                        if( merg_arr[ merg_arr.length - 1 ].sec_list.indexOf( sort_all[ i ].sec ) === -1 ){
                            merg_arr[ merg_arr.length - 1 ].sec_list.push( sort_all[ i ].sec );
                        };

                        if( merg_arr[ merg_arr.length - 1 ].grid_event_id_list.indexOf( sort_all[ i ].grid_event_id ) === -1 ){
                            merg_arr[ merg_arr.length - 1 ].grid_event_id_list.push( sort_all[ i ].grid_event_id );
                        };

                    }else{
                        merg_arr.push( { ...sort_all[ i ] } );
                        
                    };
                };

                recursive_merge( i + 1 );
            };
        };

        recursive_merge( 0 );

        let result = [];
        for( let i = 0; i < merg_arr.length; i++ ){
            let { sec_list, grid_event_id_list, interval } = merg_arr[ i ];
            let timeFrom = convert_sec_to_time( interval.from );
            let timeTo = convert_sec_to_time( interval.to );

            let arr_0 = timeFrom.split( ':' );
            let arr_1 = timeTo.split( ':' );

            let title = `${arr_0[0]}:${arr_0[1]} - ${arr_1[0]}:${arr_1[1]}`;

            if( isBlind ){
                title = `${arr_0[0]}:${arr_0[1]}`;
            };

            result.push({
                title,
                sec_list,
                interval,
                grid_event_id_list,
            });

        };

        return result;


    }

    GetPoints( dayNum ){
        return [ ...this.week[ dayNum ] ];
    }



}