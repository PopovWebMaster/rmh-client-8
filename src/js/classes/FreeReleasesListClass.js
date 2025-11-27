
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

import { get_event_by_id } from './../helpers/get_event_by_id.js';
import { get_filter_current_data } from './vendors/FreeReleasesListClass/get_filter_current_data.js';

export class FreeReleasesListClass {

    constructor(){

        this.list = [];

        this.last_addad_current_category_id = null;
        this.last_addad_current_event_id = null;



        this.SetListFromServer = this.SetListFromServer.bind(this);
        this.SetListFromStore = this.SetListFromStore.bind(this);
        this.AddNewFiles = this.AddNewFiles.bind(this);

        this.SetToStore = this.SetToStore.bind(this);
        this.GetList = this.GetList.bind(this);
        this.SetToStoreLastCurrentData = this.SetToStoreLastCurrentData.bind(this);
        this.RemoveFile = this.RemoveFile.bind(this);




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

        let current_category_id = null;
        let current_event_id = eventId;

        let event = get_event_by_id( eventId );
        if( event ){
            current_category_id = event.category_id;
            current_event_id = eventId;
        };

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

        this.last_addad_current_category_id = current_category_id;
        this.last_addad_current_event_id = current_event_id;

    }

    RemoveFile( fileName ){
        let list = [];
        for( let i = 0; i < this.list.length; i++ ){
            if( this.list[ i ].fileName === fileName ){
            }else{
                list.push( { ...this.list[ i ] } );
            };
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
        let currentData = get_filter_current_data( sorted_free_release );

        store.dispatch( setFreeReleasesFiltered( sorted_free_release ) );
        store.dispatch( setFreeReleasesFilterCategoryId( currentData.current_category_id ) );
        store.dispatch( setFreeReleasesFilterEventId( currentData.current_event_id ) );

        if( setAsChanged ){
            store.dispatch( setFreeReleasesIsChanges( true ) );
        };

    }

    SetToStoreLastCurrentData(){ // 

        store.dispatch( setFreeReleasesFilterCategoryId( this.last_addad_current_category_id ) );
        store.dispatch( setFreeReleasesFilterEventId( this.last_addad_current_event_id ) );

    }

}