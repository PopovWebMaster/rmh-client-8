
import { MovieClass } from './MovieClass.js';
import { TitleClass } from './TitleClass.js';
import { FileDateClass } from './FileDateClass.js';

import { TimeClass } from './../../../../../../../classes/TimeClass.js';

import { EMPTY_TIME_MS_IGNORE } from './../../../../../../../config/logs.js';

const TYPE = {
    MOVIE: 'Movie',
    TITLE_OBJECT: 'TitleObject',
};

export class LogListClass{
    constructor( log_list ){

        this.log_list = log_list;

        this.list = [];

        this.Movie =    new MovieClass();
        this.Title =    new TitleClass();
        this.FileDate = new FileDateClass();

        this.total_time_ms = 0;

        this.RunProcessing = this.RunProcessing.bind(this);
        this.SetList = this.SetList.bind(this);
        this.GetResult = this.GetResult.bind(this);
        this.GetFileDate = this.GetFileDate.bind(this);

        this.GetFileDurationTime = this.GetFileDurationTime.bind(this);
        this.AddToListItemTypeEmpty = this.AddToListItemTypeEmpty.bind(this);


        

        this.RunProcessing();
    }

    RunProcessing(){

        for( let i = 0; i < this.log_list.length; i++ ){

            let { type } = this.log_list[i].attributes;

            if( type === TYPE.MOVIE ){
                this.Movie.AddItem( this.log_list[i] );
            }else if(  type === TYPE.TITLE_OBJECT  ){
                this.Title.AddItem( this.log_list[i] );
            }else{
                if( type.indexOf( 'Video' ) !== -1 ){
                    this.Movie.AddItemTypeVideo( this.log_list[i] );
                }else{
                    console.dir( 'отловленная дичь!!!!!!!!!!' );
                    console.dir( 'объект - говно' );
                    console.dir( this.log_list[i] );
                    console.dir( 'объект - норм (предыдущий)' );
                    console.dir( this.log_list[i - 1] );
                };

            };

            this.FileDate.AddItem( this.log_list[i] );

        };

        this.SetList( this.Movie.GetList(), this.Title.GetList() );

        this.AddToListItemTypeEmpty();

        this.FileDate.CreateLogFileDate();

    }

    SetList( movie_arr, grafics_arr ){
        let arr = [ ...movie_arr, ...grafics_arr ];
        let sortArr = arr.sort((a, b) => {
            if( a.TimePoint > b.TimePoint ){
                return 1;
            }else if( a.TimePoint < b.TimePoint ){
                return -1;
            }else{
                if( a.Type === 'movie' ){
                    return -1;
                }else{
                    return 1;
                }
            };
        });

        let arrMovies = [];

        for( let i = 0; i < sortArr.length; i++ ){
            if( sortArr[ i ].Type === 'movie' ){
                arrMovies.push( sortArr[ i ] );
            }else{
                arrMovies[ arrMovies.length - 1 ].AddGraphics( sortArr[ i ] );
            };
        };

        for( let i = 0; i < arrMovies.length; i++ ){
            let { segmentRealDuration } = arrMovies[ i ].GetDataAsObject();
            this.total_time_ms = this.total_time_ms + segmentRealDuration.ms;
            this.list.push( arrMovies[ i ].GetDataAsObject() );
        };

    }

    AddToListItemTypeEmpty(){

        let list_2 = [];

        for( let i = 0; i < this.list.length; i++ ){
            if( ( i + 1 ) < this.list.length ){
                let start_time_ms = this.list[ i ].startTime.ms;
                let duration_ms = this.list[ i ].segmentRealDuration.ms;
                let next_start_time_ms = this.list[ i + 1 ].startTime.ms;

                if( (start_time_ms + duration_ms) < next_start_time_ms ){

                    let StartTime = new TimeClass( start_time_ms + duration_ms );
                    let startTime = StartTime.GetDataAsObject()

                    let Duration = new TimeClass( next_start_time_ms - startTime.ms );
                    let duration = Duration.GetDataAsObject();
                    
                    list_2.push( this.list[ i ] );

                    console.log( 'duration.ms', duration.ms );

                    if( duration.ms > EMPTY_TIME_MS_IGNORE ){
                        list_2.push({
                            type: 'empty',
                            date: { ...this.list[ i ].date },
                            startTime: startTime,
                            timePoint: startTime.ms,
                            duration,
                        });
                    };


                }else{
                    list_2.push( this.list[ i ] );
                    

                };

            }else{ // последний
                list_2.push( this.list[ i ] );

            };
            

        };

        this.list = list_2;

    }

    GetResult(){
        return this.list;
    }

    GetFileDate(){
        return this.FileDate.GetDataAsObject();
    }

    GetFileDurationTime(){
        let DurationTime = new TimeClass( this.total_time_ms );
        return DurationTime.GetDataAsObject();

    }



}