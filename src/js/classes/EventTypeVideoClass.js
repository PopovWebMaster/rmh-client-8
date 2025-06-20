
import { DateClass } from './DateClass.js';
import { TimeClass } from './TimeClass.js';
import { FileTypeVideoClass } from './FileTypeVideoClass.js';

export class EventTypeVideoClass{

    constructor( item ){

        let {
            attributes,
            elements,

        } = item;

        let { 
            date,
            time,
            file,
            duration,
            realDuration,
            markIn,
            type,

        } = attributes;

        this.Type = 'movie';

        this.Date =                     new DateClass( date );
        this.StartTime =                new TimeClass( time );
        // this.FileDuration =             new TimeClass( elements[0].attributes.file_duration );
        this.FileDuration =             new TimeClass( elements[0].attributes.duration );

        // elements[0].attributes.channel


        this.SegmentExpectedDuration =  new TimeClass( duration );
        this.SegmentRealDuration =      new TimeClass( realDuration );

        if( markIn === undefined ){
            this.MarkIn = new TimeClass( '00:00:00.00' );
        }else{
            this.MarkIn = new TimeClass( markIn );
        };

        this.File = new FileTypeVideoClass({
            channel: elements[0].attributes.channel,
            type,
        });

        this.TimePoint = this.StartTime.ms;
        this.graphics = [];

        this.AddGraphics = this.AddGraphics.bind(this);
        this.GetDataAsObject = this.GetDataAsObject.bind(this);


    }

    AddGraphics( Graphics ){
        this.graphics.push( Graphics.GetDataAsObject() );
    }

    GetDataAsObject(){
        return {
            type:                       this.Type,
            date:                       this.Date.GetDataAsObject(),
            startTime:                  this.StartTime.GetDataAsObject(),
            fileDuration:               this.FileDuration.GetDataAsObject(),
            segmentExpectedDuration:    this.SegmentExpectedDuration.GetDataAsObject(),
            segmentRealDuration:        this.SegmentRealDuration.GetDataAsObject(),
            markIn:                     this.MarkIn.GetDataAsObject(),
            file:                       this.File.GetDataAsObject(),
            timePoint:                  this.TimePoint,
            graphics:                   this.graphics,

        }
    }



}