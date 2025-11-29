
import { START_FROM } from './../config/scheduleResult.js';

import { DragStartClass } from './vendors/ScheduleReleaseDragEventClass/DragStartClass.js';

export class ScheduleReleaseDragEventClass {
    constructor(){

        this.startFrom = null;

        this.DragStart = new DragStartClass();

        this.SetStartFrom = this.SetStartFrom.bind(this);
        this.ClearData = this.ClearData.bind(this);


    }

    SetStartFrom( value ){ // config/scheduleResult.js / START_FROM
        this.startFrom = value;     
        this.DragStart.SetStartFrom( value );
    }

    ClearData(){
        this.DragStart.SetStartFrom();
    }

    

}