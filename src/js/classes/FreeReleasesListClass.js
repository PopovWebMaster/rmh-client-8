
import store from './../redux/store.js';
import { 
    setFreeReleasesList,
    setFreeReleasesIsChanges,
    setFreeReleasesFiltered,
    setFreeReleasesFilterCategoryId,
    setFreeReleasesFilterEventId,

} from './../redux/scheduleResultSlise.js';

import { FreeReleaseClass } from './vendors/FreeReleasesListClass/FreeReleaseClass.js';

import { get_sorted_free_release } from './vendors/FreeReleasesListClass/get_sorted_free_release.js';

export class FreeReleasesListClass {

    constructor(){

        this.list = [];





        this.SetListFromServer = this.SetListFromServer.bind(this);
        this.SetListFromStore = this.SetListFromStore.bind(this);
        this.AddNewFiles = this.AddNewFiles.bind(this);

        this.SetToStore = this.SetToStore.bind(this);
        this.GetList = this.GetList.bind(this);




        

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

    SetListFromStore( list_for_store = null  ){
        let list = [];

        if( list_for_store === null ){
            let { scheduleResult } = store.getState();
            let { freeReleasesList } = scheduleResult;
            
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

            
        }else{
            for( let i = 0; i < list_for_store.length; i++ ){
                let {
                    fileName,
                    eventId,
                    duration,
                    count,
                } = list_for_store[ i ];

                list.push( new FreeReleaseClass( {
                    fileName,
                    eventId,
                    duration,
                    count,
                } ) );
            };
        };

        this.list = list;

    }

    AddNewFiles( newFiles, eventId ){

        let list = structuredClone( this.list );

        for( let i = 0; i < newFiles.length; i++ ){
            let {
                file_duration,
                file_name,
            } = newFiles[ i ];

            list.push( new FreeReleaseClass( {
                fileName: file_name,
                eventId,
                duration: file_duration,
            } ) );
        };

        this.list = list;

    }

    GetList(){
        let result = [];
        for( let i = 0; i < this.list.length; i++ ){
            result.push( { ...this.list[ i ] } );
        };
        return result;
    }

    SetToStore( setAsChanged = false ){

        let list = this.GetList();

        store.dispatch( setFreeReleasesList( list ) );

        let sorted_free_release = get_sorted_free_release( list );

        store.dispatch( setFreeReleasesFiltered( sorted_free_release ) );

        let { scheduleResult } = store.getState();
        let {
            freeReleasesFilterCategoryId,
            freeReleasesFilterEventId,
        } = scheduleResult;

        let current_category_id = null;
        let current_event_id = null;

        if( sorted_free_release[ freeReleasesFilterCategoryId ] ){
            current_category_id = freeReleasesFilterCategoryId;
        }else{
            let keys = Object.keys( sorted_free_release );
            if( keys[ 0 ] ){
                current_category_id = Number( keys[ 0 ] );
            };
        };

        if( sorted_free_release[ current_category_id ] ){
            if( sorted_free_release[ current_category_id ][ freeReleasesFilterEventId ] ){
                current_event_id = freeReleasesFilterEventId;
            }else{
                let keys = Object.keys( sorted_free_release[ current_category_id ] );
                if( keys[ 0 ] ){
                    current_event_id = Number( keys[ 0 ] );
                };
            };
        };

        store.dispatch( setFreeReleasesFilterCategoryId( current_category_id ) );
        store.dispatch( setFreeReleasesFilterEventId( current_event_id ) );

        if( setAsChanged ){
            store.dispatch( setFreeReleasesIsChanges( true ) );
        };


    }

}