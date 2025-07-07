
import store from './../../../redux/store.js';

export class SubApplicationClass{

    constructor(){

        this.id =               null;
        this.application_id =   null;
        this.description =      null;
        this.duration_sec =     null;
        this.file_names =       [];
        this.name =             null;
        this.period_from =      null;
        this.period_to =        null;
        this.serial_num =       null;
        this.type =             null;
        this.release_list =     [];


        let { application, currentSubApplication } = store.getState();
        let { 
            currentSubAppId,
        } = currentSubApplication;

        this.id = currentSubAppId;

        let { currentSubAppList } = application;

        for( let i = 0; i < currentSubAppList.length; i++ ){
            if( currentSubAppList[ i ].id === currentSubAppId ){
                let {
                    application_id,
                    description,
                    duration_sec,
                    file_names,
                    name,
                    period_from,
                    period_to,
                    serial_num,
                    type,
                    release_list,
                } = currentSubAppList[ i ];

                this.application_id =   application_id;
                this.description =      description;
                this.duration_sec =     duration_sec;
                this.file_names =       file_names;
                this.name =             name;
                this.period_from =      period_from;
                this.period_to =        period_to;
                this.serial_num =       serial_num;
                this.type =             type;
                this.release_list =     release_list;


                break;
            };

        };

    }




}