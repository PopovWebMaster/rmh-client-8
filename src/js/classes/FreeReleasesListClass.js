
import store from './../redux/store.js';

import { FreeReleaseClass } from './vendors/FreeReleasesListClass/FreeReleaseClass.js';

export class FreeReleasesListClass {

    constructor(){

        this.list = [];





        this.SetListFromServer = this.SetListFromServer.bind(this);
        this.SetListFromStore = this.SetListFromStore.bind(this);
        this.AddNewFiles = this.AddNewFiles.bind(this);


        

    }

    SetListFromServer( arr ){
        let list = [];
        for( let i = 0; i < arr.length; i++ ){
            let {
                fileName,
                eventId,
                duration,
            } = arr[ i ];

            list.push( new FreeReleaseClass( {
                fileName,
                eventId,
                duration,
                count: 0,
            } ) );
        };

        this.list = list;
    }

    SetListFromStore(){
        let { scheduleResult } = store.getState();
        let { freeReleasesList } = scheduleResult;
        let list = [];
        for( let i = 0; i < freeReleasesList.length; i++ ){
            let {
                fileName,
                eventId,
                duration,
                count,
            } = freeReleasesList[ i ];

            list.push( new FreeReleaseClass( {
                fileName,
                eventId,
                duration,
                count,
            } ) );
        };

        this.list = list;

    }

    AddNewFiles( newFiles, eventId ){

        console.dir( 'newFiles' );
        console.dir( newFiles );

        console.dir( 'eventId' );
        console.dir( eventId );


    }

}