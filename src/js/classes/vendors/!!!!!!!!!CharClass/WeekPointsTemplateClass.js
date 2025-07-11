
import { CHAR_TYPE } from './../../../config/application.js';

import { get_week_point_list_type_blind } from './vendors/get_week_point_list_type_blind.js';
// import { get_week_point_list_type_file } from './vendors/get_week_point_list_type_file.js';
// import { get_week_point_list_type_block } from './vendors/get_week_point_list_type_block.js';

import { get_week_point_list } from './vendors/get_week_point_list.js';


export class WeekPointsTemplateClass {
    constructor( Event ){
        this.template = [ [], [], [], [], [], [], [], ];

        this.Create = this.Create.bind(this);
        this.GetPoints = this.GetPoints.bind(this);

        



    }

    Create( props ){
        let {
            charType,
            TimePoints,
            Event,
        } = props;

        console.dir( Event );

        switch( charType ){
            case CHAR_TYPE.BLIND:
                this.template = get_week_point_list_type_blind( TimePoints );
                break;

            case CHAR_TYPE.BLOCK:
                this.template = get_week_point_list( TimePoints, Event.id );
                break;

            case CHAR_TYPE.FILE:
                this.template = get_week_point_list( TimePoints, Event.id );
                break;
        };

    }

    GetPoints( dayNum ){
        return [ ...this.template[ dayNum ] ];
    }

    



    Update(){

    }
}