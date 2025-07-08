


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


        this.YYYY_MM_DD =   YYYY_MM_DD;
        this.year =         year;
        this.mounth =       mounth;
        this.date =         date;
        this.dayNum =       dayNum;
        this.dayName =      dayName;
        this.dayNameShort = dayNameShort;

        this.timeToints = {};

        this.AddTimePoints = this.AddTimePoints.bind(this);
        this.GetData = this.GetData.bind(this);
        this.ToggleRelease = this.ToggleRelease.bind(this);
        this.AllDayReleaseToggle = this.AllDayReleaseToggle.bind(this);
        this.GetFillCountBySecond = this.GetFillCountBySecond.bind(this);
        this.SetFillCountInPoint = this.SetFillCountInPoint.bind(this);





        


        


    }

    AddTimePoints( arr ){

        let obj = {};

        for( let i = 0; i < arr.length; i++ ){

            let {
                time,
                sec,
                title,
            } = arr[ i ];

            obj[ sec ] = {
                 time,
                sec,
                title,
                fill_count: 0,
            };

        };


        this.timeToints = { ...obj };

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

            timeToints: { ...this.timeToints },
        }

    }

    ToggleRelease( sec ){

        if( this.timeToints[ sec ] ){
            let { fill_count } = this.timeToints[ sec ];
            if( fill_count === 0 ){
                this.timeToints[ sec ].fill_count = 1;
            }else{
                this.timeToints[ sec ].fill_count = 0;
            };
        }else{
            console.dir( 'ошибка' );
            console.dir( {
                sec,
                timeToints: this.timeToints
            } );

            
        };

    }

    AllDayReleaseToggle(){

        let onCount = 0;
        let offCount = 0;

        for( let sec in this.timeToints ){
            let { fill_count } = this.timeToints[ sec ];
            if( fill_count === 0 ){
                offCount++;
            }else{
                onCount++
            };
        };

        if( onCount === offCount ){
            for( let sec in this.timeToints ){
                this.timeToints[ sec ].fill_count = 1;
            };
        }else{
            if( onCount > offCount ){
                for( let sec in this.timeToints ){
                    this.timeToints[ sec ].fill_count = 0;
                };  
            }else{
                for( let sec in this.timeToints ){
                    this.timeToints[ sec ].fill_count = 1;
                };
            }

        };
    }

    GetFillCountBySecond( sec ){
        let result = null;
        if( this.timeToints[ sec ] ){
            result = this.timeToints[ sec ].fill_count;
        };
        return result;
    }

    SetFillCountInPoint( sec, fill_count ){
        if( this.timeToints[ sec ] ){
            this.timeToints[ sec ].fill_count = fill_count;
        };
    }

    // AllDayReleaseToggle(){

    // }
}