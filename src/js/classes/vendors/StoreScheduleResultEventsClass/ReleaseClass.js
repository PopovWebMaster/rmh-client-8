
import { get_release_by_id } from './get_release_by_id.js';

export class ReleaseClass {

    constructor( release_id ){

        this.YYYY_MM_DD =           null;
        this.air_notes =            null;
        this.applicationName =      null;
        this.application_id =       null;
        this.category_id =          null;
        this.event_id =             null;
        this.file_list =            null;
        this.grid_event_id =        null;
        this.id =                   null;
        this.manager_id =           null;
        this.releaseDuration =      null;
        this.releaseName =          null;
        this.startTime =            null;
        this.sub_application_id =   null;


        // let release = get_release_by_id( release_id );

        // if( release !== null ){
        //     let {
        //         YYYY_MM_DD,
        //         air_notes,
        //         applicationName,
        //         application_id,
        //         category_id,
        //         event_id,
        //         file_list,
        //         grid_event_id,
        //         id,
        //         manager_id,
        //         releaseDuration,
        //         releaseName,
        //         startTime,
        //         sub_application_id,

        //     } = release;

        //     this.YYYY_MM_DD =           YYYY_MM_DD;
        //     this.air_notes =            air_notes;
        //     this.applicationName =      applicationName;
        //     this.application_id =       application_id;
        //     this.category_id =          category_id;
        //     this.event_id =             event_id;
        //     this.file_list =            file_list;
        //     this.grid_event_id =        grid_event_id;
        //     this.id =                   id;
        //     this.manager_id =           manager_id;
        //     this.releaseDuration =      releaseDuration;
        //     this.releaseName =          releaseName;
        //     this.startTime =            startTime;
        //     this.sub_application_id =   sub_application_id;

        // };



        this.GetDurationTime = this.GetDurationTime.bind(this);
        this.GetData = this.GetData.bind(this);
        this.AddRelease = this.AddRelease.bind(this);
        this.AddReleaseByData = this.AddReleaseByData.bind(this);





    }
    AddRelease( release_id ){
        let release = get_release_by_id( release_id );

        if( release !== null ){
            let {
                YYYY_MM_DD,
                air_notes,
                applicationName,
                application_id,
                category_id,
                event_id,
                file_list,
                grid_event_id,
                id,
                manager_id,
                releaseDuration,
                releaseName,
                startTime,
                sub_application_id,

            } = release;

            this.YYYY_MM_DD =           YYYY_MM_DD;
            this.air_notes =            air_notes;
            this.applicationName =      applicationName;
            this.application_id =       application_id;
            this.category_id =          category_id;
            this.event_id =             event_id;
            this.file_list =            file_list;
            this.grid_event_id =        grid_event_id;
            this.id =                   id;
            this.manager_id =           manager_id;
            this.releaseDuration =      releaseDuration;
            this.releaseName =          releaseName;
            this.startTime =            startTime;
            this.sub_application_id =   sub_application_id;

        };

    }

    AddReleaseByData( data ){
        let {
            YYYY_MM_DD,
            air_notes,
            applicationName,
            application_id,
            category_id,
            event_id,
            file_list,
            grid_event_id,
            id,
            manager_id,
            releaseDuration,
            releaseName,
            startTime,
            sub_application_id,
        } = data;

        this.YYYY_MM_DD =           YYYY_MM_DD;
        this.air_notes =            air_notes;
        this.applicationName =      applicationName;
        this.application_id =       application_id;
        this.category_id =          category_id;
        this.event_id =             event_id;
        this.file_list =            file_list;
        this.grid_event_id =        grid_event_id;
        this.id =                   id;
        this.manager_id =           manager_id;
        this.releaseDuration =      releaseDuration;
        this.releaseName =          releaseName;
        this.startTime =            startTime;
        this.sub_application_id =   sub_application_id;
        
    }

    GetData(){

        return {
            YYYY_MM_DD:         this.YYYY_MM_DD,
            air_notes:          this.air_notes,
            applicationName:    this.applicationName,
            application_id:     this.application_id,
            category_id:        this.category_id,
            event_id:           this.event_id,
            file_list:          this.file_list,
            grid_event_id:      this.grid_event_id,
            id:                 this.id,
            manager_id:         this.manager_id,
            releaseDuration:    this.releaseDuration,
            releaseName:        this.releaseName,
            startTime:          this.startTime,
            sub_application_id: this.sub_application_id,
        }

    }

    GetDurationTime(){
        return this.releaseDuration;
    }
}