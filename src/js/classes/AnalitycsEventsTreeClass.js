
import { AET_MetodsClass } from './vendors/AnalitycsEventsTreeClass/AET_MetodsClass.js';
import { EventsTreeClass } from './vendors/AnalitycsEventsTreeClass/EventsTreeClass.js';

import store from './../redux/store.js';

export class AnalitycsEventsTreeClass extends AET_MetodsClass {
    constructor( props ){
        super( props );

        this.EventsTree = new EventsTreeClass();


        this.Create = this.Create.bind(this);
        this.SetEventsTreeToStore = this.SetEventsTreeToStore.bind(this);
        this.ClearStore = this.ClearStore.bind(this);
        this.SetChanges = this.SetChanges.bind(this);


    }

    Create(){
        console.dir('11111');
        this.EventsTree.CreateFromFilteredList();
        console.dir('22222');
        console.dir( 'this' );
        console.dir( this );



    }

    CreateFromStore(){
        let { playReportAnalytics } = store.getState();
        let { evenstTree } = playReportAnalytics;
        this.EventsTree.ResetTree( evenstTree );
    }

    SetEventsTreeToStore(){
        this.EventsTree.SetTreeToStore();
    }

    ClearStore(){
        this.EventsTree.ClearStore();
    }

    SetChanges( params ){
        let {
            category_id,
            event_id,
            fileName,
            changeObject,
        } = params;

        let tree = this.EventsTree.GetTree();
        let item = { ...tree[ category_id ][ event_id ][ fileName ] };

        tree[ category_id ][ event_id ][ fileName ] = { ...item, ...changeObject };

        this.EventsTree.ResetTree( tree );


    }
}