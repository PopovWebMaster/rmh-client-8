
import { TimePointClass } from './TimePointClass.js';

import { get_day_time_point_object } from './vendors/get_day_time_point_object.js';

export class DayClass {

    constructor( props ){
        let {
            YYYY_MM_DD,
            year,
            mounth,
            date,
            dayNum,
            dayName,
            dayNameShort,
        } = props;

        this.pointsLength = 0;
        this.releaseLength = 0;
        this.dayDuration = 0;

        this.SubApplication = null;

        this.YYYY_MM_DD =   YYYY_MM_DD;
        this.year =         year;
        this.mounth =       mounth;
        this.date =         date;
        this.dayNum =       dayNum;
        this.dayName =      dayName;
        this.dayNameShort = dayNameShort;

        // this.timeToints = {};
        this.timePoints = {};


        this.AddTimePoints = this.AddTimePoints.bind(this);
        this.GetData = this.GetData.bind(this);
        this.ToggleRelease = this.ToggleRelease.bind(this);
        this.AllDayReleaseToggle = this.AllDayReleaseToggle.bind(this);
        this.GetFillCountBySecond = this.GetFillCountBySecond.bind(this);
        this.SetFillCountInPoint = this.SetFillCountInPoint.bind(this);
        this.UpdateStatystic = this.UpdateStatystic.bind(this);


        this.Bind = this.Bind.bind(this);
        this.GetReleaseListForServer = this.GetReleaseListForServer.bind(this);
        this.AddFillCount = this.AddFillCount.bind(this);
        this.AddTimePoint = this.AddTimePoint.bind(this);
        this.AddReservedFillCount = this.AddReservedFillCount.bind(this);







        


    }

    Bind( data ){
        let {
            SubApplication,
        } = data;
        this.SubApplication = SubApplication;
    }

    AddTimePoint( time_sec, grid_event_id = null, duration = null ){

        if( this.timePoints[ time_sec ] ){

        }else{
            let TimePoint = new TimePointClass({
                time_sec,
                grid_event_id,
                duration,
            });
            let data = TimePoint.GetData();
            data.fill_count = 0;
            this.timePoints[ time_sec ] = { ...data };
            this.UpdateStatystic();
        };

        

    }


    



    AddTimePoints( arr ){

        let obj = {};

        for( let i = 0; i < arr.length; i++ ){
            let {
                time,
                sec,
                title,
                grid_event_id,
            } = arr[ i ];

            // obj[ sec ] = {
            //     time,
            //     sec,
            //     title,
            //     fill_count: 0,
            //     grid_event_id,
            // };

            obj[ sec ] = get_day_time_point_object( {
                time,
                sec,
                title,
                fill_count: 0,
                grid_event_id,
            } );

        };

        this.timePoints = { ...obj };

        this.UpdateStatystic();

    }

    GetData(){

        return {
            YYYY_MM_DD: this.YYYY_MM_DD,
            year: this.year,
            mounth: this.mounth,
            date: this.date,
            dayNum: this.dayNum,
            dayName: this.dayName ,
            dayNameShort: this.dayNameShort,
            timePoints: { ...this.timePoints },

            pointsLength: this.pointsLength,
            releaseLength: this.releaseLength,
            dayDuration: this.dayDuration,
        }

    }

    ToggleRelease( sec ){

        if( this.timePoints[ sec ] ){
            let { fill_count, is_reserved } = this.timePoints[ sec ];
            if( is_reserved ){

            }else{
                if( fill_count === 0 ){
                    let data = { ...this.timePoints[ sec ] };
                    data.fill_count = 1;
                    this.timePoints[ sec ] = { ...data };
                }else{
                    let data = { ...this.timePoints[ sec ] };
                    data.fill_count = 0;
                    this.timePoints[ sec ] = { ...data };
                };
            };

        }else{
            console.dir( 'ошибка' );
            console.dir( {
                sec,
                timePoints: this.timePoints
            } );

            
        };

        this.UpdateStatystic();

    }

    AllDayReleaseToggle(){

        let onCount = 0;
        let offCount = 0;

        for( let sec in this.timePoints ){
            let { fill_count, is_reserved } = this.timePoints[ sec ];
            if( is_reserved ){

            }else{
                if( fill_count === 0 ){
                    offCount++;
                }else{
                    onCount++
                };
            };
            
        };

        let new_fill_count = 0;
        if( onCount === offCount ){
            new_fill_count = 1
        }else{
            if( onCount > offCount ){
                new_fill_count = 0;
            }else{
                new_fill_count = 1;
            };
        };

        for( let sec in this.timePoints ){

            let new_timePoints = { ...this.timePoints[ sec ] };

            let { is_reserved } = new_timePoints;

            if( is_reserved ){
                
            }else{
                new_timePoints.fill_count = new_fill_count;
            };
            this.timePoints[ sec ] = { ...new_timePoints };
        };

        this.UpdateStatystic();
    }

    GetFillCountBySecond( sec ){
        let result = null;
        if( this.timePoints[ sec ] ){
            result = this.timePoints[ sec ].fill_count;
        };
        return result;
    }

    SetFillCountInPoint( sec, fill_count ){
        if( this.timePoints[ sec ] ){
            if( this.timePoints[ sec ].is_reserved ){

            }else{
                let data = { ...this.timePoints[ sec ] };
                data.fill_count = fill_count;
                this.timePoints[ sec ] = { ...data };
            };
        };
        this.UpdateStatystic();
    }

    UpdateStatystic(){

        let pointsLength = 0;
        let releaseLength = 0;
        for( let sec in this.timePoints ){
            let { fill_count, is_reserved } = this.timePoints[ sec ];
            if( is_reserved ){

            }else{
                pointsLength++;
                releaseLength = releaseLength + fill_count;
            };
        };
        this.pointsLength = pointsLength;
        this.releaseLength = releaseLength;
        this.dayDuration = this.SubApplication.duration_sec * this.releaseLength;
    }

    GetReleaseListForServer(){

        let result = [];

        let date = this.YYYY_MM_DD;

        for( let secName in this.timePoints ){
            let {
                sec,
                fill_count,
                grid_event_id,
                is_reserved,
            } = this.timePoints[ secName ];

            if( is_reserved ){

            }else{
                if( fill_count > 0 ){
                    let time_sec = sec;
                    for( let i = 0; i < fill_count; i++ ){
                        result.push({
                            grid_event_id,
                            date,
                            time_sec,
                        });
                    };
                };
            };

        };

        return result;
    }

    AddFillCount( grid_event_id, second ){

        if( grid_event_id === null ){
            for( let secName in this.timePoints ){
                if( this.timePoints[ secName ].is_reserved ){

                }else{
                    if( this.timePoints[ secName ].sec === second ){
                        this.timePoints[ secName ].fill_count = this.timePoints[ secName ].fill_count + 1;
                    };
                };
                
            };
        }else{
            for( let secName in this.timePoints ){
                if( this.timePoints[ secName ].is_reserved ){

                }else{
                    if( this.timePoints[ secName ].grid_event_id === grid_event_id ){
                        this.timePoints[ secName ].fill_count = this.timePoints[ secName ].fill_count + 1;
                    };
                };
                
            };
        };

        this.UpdateStatystic();

    }

    AddReservedFillCount( grid_event_id, name ){

        for( let secName in this.timePoints ){

            if( this.timePoints[ secName ].grid_event_id === grid_event_id ){

                let {
                    time,
                    sec,
                    title,
                    fill_count,
                    grid_event_id,
                } = this.timePoints[ secName ];

                this.timePoints[ secName ] = get_day_time_point_object({
                    time,
                    sec,
                    title,
                    fill_count: fill_count + 1,
                    grid_event_id,
                    is_reserved: true,
                    reserved_name: name,
                });

            };

        };
    }

}