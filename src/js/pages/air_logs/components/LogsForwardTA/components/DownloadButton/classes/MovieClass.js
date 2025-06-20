

import { EventClass } from './../../../../../../../classes/EventClass.js';
import { EventTypeVideoClass } from './../../../../../../../classes/EventTypeVideoClass.js';

export class MovieClass{
    constructor(){

        this.list = [];

        this.AddItem = this.AddItem.bind(this);
        this.GetList = this.GetList.bind(this);
        this.AddItemTypeVideo = this.AddItemTypeVideo.bind(this);


    }
    
    AddItem( item ){
        this.list.push( new EventClass( item ) );
    }
    AddItemTypeVideo( item ){
        this.list.push( new EventTypeVideoClass( item ) );
    }

    GetList(){
        return this.list;
    }



}