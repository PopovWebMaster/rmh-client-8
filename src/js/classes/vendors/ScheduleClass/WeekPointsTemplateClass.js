
import { AllTimePointsClass } from './AllTimePointsClass.js';
import { TimePointClass } from './TimePointClass.js';

import { CHAR_TYPE } from './../../../config/application.js';

import { get_all_time_points_from_release_list } from './vendors/get_all_time_points_from_release_list.js';
import { get_week_point_list } from './vendors/get_week_point_list.js';

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

        console.dir( this );

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
        let { all_time_points, week_point_list } = get_week_point_list( this.Event.id );

        for( let i = 0; i < all_time_points.length; i++ ){
            this.AllTimePoints.AddPoint( all_time_points[ i ] );
        };

        this.week = week_point_list;

        
    }

    CreateTemplateFile(){
        let { all_time_points, week_point_list } = get_week_point_list( this.Event.id );

        for( let i = 0; i < all_time_points.length; i++ ){
            this.AllTimePoints.AddPoint( all_time_points[ i ] );
        };

        this.week = week_point_list;

    }

    GetAllTimePointsList(){
        return [ ...this.AllTimePoints.GetTimePointList() ];
    }

    GetPoints( dayNum ){
        return [ ...this.week[ dayNum ] ];
    }



}