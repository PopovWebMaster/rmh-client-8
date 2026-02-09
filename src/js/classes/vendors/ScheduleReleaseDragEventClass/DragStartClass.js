
import { START_FROM } from './../../../config/scheduleResult.js';

import store from './../../../redux/store.js';
import { 
    setDragStartFrom,
    setDragStartFileName,
    setDragStartDuration,
    setDragStartEventId,
    setDragStartStartTime,
    setDragStartGridEventId,
    setDragStartCategoryId,
    setDragStartReleaseId,
    setDragStartLinkedFileDuration,

    setDragStartMinStartTime,
    setDragStartMaxStartTime,
    setDragStartAltGridEventId,

} from './../../../redux/scheduleResultDragEventSlise.js';

import { get_event_by_id } from './../../../helpers/get_event_by_id.js';

import { MIN_EVENT_DURATION_SEC } from './../../../config/layout.js';
import { convert_time_str_to_sec } from './../../../helpers/convert_time_str_to_sec.js'

export class DragStartClass {
    constructor(){

        this.startFrom = '';

        this.fileName = '';
        this.duration = 0;
        this.linked_files_duration = 0;

        this.eventId = null;
        this.event_duration = MIN_EVENT_DURATION_SEC;

        this.startTime = 0;
        this.gridEventId = null;
        this.categoryId = null;
        this.releaseId = null;

        this.minStartTime = 0;
        this.maxStartTime = 24*60*60;

        this.altEventId = null;


        this.SetFileName = this.SetFileName.bind(this);
        this.SetDuration = this.SetDuration.bind(this);
        this.SetEventId = this.SetEventId.bind(this);
        this.SetStartFrom = this.SetStartFrom.bind(this);
        this.SetToStore = this.SetToStore.bind(this);
        this.SetStartTime = this.SetStartTime.bind(this);
        this.SetGridEventId = this.SetGridEventId.bind(this);
        this.SetReleaseId = this.SetReleaseId.bind(this);
        this.SetLinkedFilesDuration = this.SetLinkedFilesDuration.bind(this);

        this.SetMinStartTime = this.SetMinStartTime.bind(this);
        this.SetMaxStartTime = this.SetMaxStartTime.bind(this);
        this.SetAltEventId = this.SetAltEventId.bind(this);




    }

    SetStartFrom( value ){
        this.startFrom = value;     
    }

    SetFileName( fileName ){
        this.fileName = fileName;
    }

    SetDuration( duration ){
        this.duration = duration;
    }

    SetEventId( eventId ){
        this.eventId = eventId;

        if( eventId !== null ){
            let event = get_event_by_id( eventId );

            if( event ){
                let { category_id, linked_file, durationTime } = event;
                this.categoryId = category_id;
                this.event_duration = convert_time_str_to_sec( durationTime );
                if( linked_file !== null ){
                    this.SetLinkedFilesDuration( linked_file );
                };


            };
        }
        
    }

    SetLinkedFilesDuration( linked_file ){
        let all_dutation = 0;

        for( let i = 0; i < linked_file.length; i++ ){
            let { duration } = linked_file[ i ];
            all_dutation = all_dutation + duration;
        };

        this.linked_files_duration = all_dutation;

    }

    SetStartTime( startTime ){
        this.startTime = startTime;
    }

    SetGridEventId( gridEventId ){
        this.gridEventId = gridEventId;

    }

    SetReleaseId( releaseId ){
        this.releaseId = releaseId;

    }

    SetMinStartTime( minStartTime ){
        this.minStartTime = minStartTime;

    }

    SetMaxStartTime( maxStartTime ){
        this.maxStartTime = maxStartTime;

    }

    SetAltEventId( altEventId ){
        this.altEventId = altEventId;

    }


    SetToStore(){

        store.dispatch( setDragStartFrom( this.startFrom ) );
        store.dispatch( setDragStartDuration( this.duration  ) );
        
        store.dispatch( setDragStartEventId( this.eventId ) );
        store.dispatch( setDragStartCategoryId( this.categoryId ) );

        store.dispatch( setDragStartLinkedFileDuration( this.linked_files_duration ) );

        store.dispatch( setDragStartMinStartTime( this.minStartTime ) );
        store.dispatch( setDragStartMaxStartTime( this.maxStartTime ) );


        if( this.startFrom === START_FROM.RELEASE_FREE ){
            store.dispatch( setDragStartFileName( this.fileName ) );
            
        }else if( this.startFrom === START_FROM.RELEASE_APPLICATION ){
            store.dispatch( setDragStartReleaseId( this.releaseId ) );

        }else if( this.startFrom === START_FROM.SCHEDULE_EVENT ){
            store.dispatch( setDragStartStartTime( this.startTime ) );
            store.dispatch( setDragStartGridEventId( this.gridEventId ) );
        }else if( this.startFrom === START_FROM.RELEASE_LIST ){
            store.dispatch( setDragStartFileName( this.fileName ) );
        }else if( this.startFrom === START_FROM.ALT_GRID_EVENT ){
            store.dispatch( setDragStartAltGridEventId( this.altEventId ) );


        };

    }
}