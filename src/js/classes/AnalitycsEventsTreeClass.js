
import { AET_MetodsClass } from './vendors/AnalitycsEventsTreeClass/AET_MetodsClass.js';
import { EventsTreeClass } from './vendors/AnalitycsEventsTreeClass/EventsTreeClass.js';

export class AnalitycsEventsTreeClass extends AET_MetodsClass {
    constructor( props ){
        super( props );

        this.EventsTree = new EventsTreeClass();


        this.Create = this.Create.bind(this);
        this.SetEventsTreeToStore = this.SetEventsTreeToStore.bind(this);
        this.ClearStore = this.ClearStore.bind(this);

    }

    Create(){
        this.EventsTree.CreateFromFilteredList();
    }

    SetEventsTreeToStore(){
        this.EventsTree.SetTreeToStore();
    }

    ClearStore(){
        this.EventsTree.ClearStore();
    }
}