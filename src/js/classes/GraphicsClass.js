import { DateClass } from './DateClass.js';
import { TimeClass } from './TimeClass.js';
import { FileClass } from './FileClass.js';

export class GraphicsClass {
    constructor( item ){
        let {
            attributes,

        } = item;

        let { 
            date,
            name,
            realDuration,
            task,
            time,

        } = attributes;

        this.Type = 'graphics';

        this.Date =                     new DateClass( date );
        this.Name = name;
        this.StartTime =                new TimeClass( time );
        this.File =                     new FileClass( task );
        this.Duration =                 new TimeClass( realDuration );

        this.TimePoint = this.StartTime.ms;

        this.GetDataAsObject = this.GetDataAsObject.bind(this);


    }

    GetDataAsObject(){
        return {
            type:       this.Type,
            date:       this.Date.GetDataAsObject(),
            name:       this.Name,
            startTime:  this.StartTime.GetDataAsObject(),
            file:       this.File.GetDataAsObject(),
            duration:   this.Duration.GetDataAsObject(),
            timePoint:  this.TimePoint,
        };
    }
}