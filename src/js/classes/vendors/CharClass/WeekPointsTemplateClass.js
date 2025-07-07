
import { CHAR_TYPE } from './../../../config/application.js';

import { get_week_point_list_type_blind } from './vendors/get_week_point_list_type_blind.js';
import { get_week_point_list_type_file } from './vendors/get_week_point_list_type_file.js';
import { get_week_point_list_type_block } from './vendors/get_week_point_list_type_block.js';


export class WeekPointsTemplateClass {
    constructor(){

        this.template = [ [], [], [], [], [], [], [], ];

        this.Create = this.Create.bind(this);
        this.GetPoints = this.GetPoints.bind(this);



    }

    Create( props ){
        let {
            charType,
            TimePoints,
        } = props;

        switch( charType ){
            case CHAR_TYPE.BLIND:
                this.template = get_week_point_list_type_blind( TimePoints );
                break;

            case CHAR_TYPE.BLOCK:
                this.template = get_week_point_list_type_block();
                break;

            case CHAR_TYPE.FILE:
                this.template = get_week_point_list_type_file();
                break;
        };

    }

    GetPoints( dayNum ){
        return [ ...this.template[ dayNum ] ];
    }

    



    Update(){

    }
}