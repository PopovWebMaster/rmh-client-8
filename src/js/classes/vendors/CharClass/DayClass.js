


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
}