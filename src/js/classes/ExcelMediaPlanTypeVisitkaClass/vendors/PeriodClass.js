

export class PeriodClass{
    constructor(){

        this.from = {
            YYYY_MM_DD: '',
            dateFull:   '',
            dateShort:  '',

        };

        this.to = {
            YYYY_MM_DD: '',
            dateFull:   '',
            dateShort:  '',
        };

        this.SetFromMatrix = this.SetFromMatrix.bind(this);

    }

    SetFromMatrix( matrix ){
        if( matrix[0] ){
            let from_YYYY_MM_DD =   matrix[0].YYYY_MM_DD;
            let to_YYYY_MM_DD =     matrix[ matrix.length - 1 ].YYYY_MM_DD;

            let arr_from = from_YYYY_MM_DD.split( '-' );
            let arr_to = to_YYYY_MM_DD.split( '-' );

            let str_from_full =     arr_from[2]? `${arr_from[2]}.${arr_from[1]}.${arr_from[0]}`: '';
            let str_to_full =       arr_to[2]? `${arr_to[2]}.${arr_to[1]}.${arr_to[0]}`: '';
            let str_from_schort =   arr_from[2]? `${arr_from[2]}.${arr_from[1]}`: '';
            let str_to_schort =     arr_to[2]? `${arr_to[2]}.${arr_to[1]}`: '';

            this.from.YYYY_MM_DD =  from_YYYY_MM_DD;
            this.from.dateFull =    str_from_full;
            this.from.dateShort =   str_from_schort;

            this.to.YYYY_MM_DD =    to_YYYY_MM_DD;
            this.to.dateFull =      str_to_full;
            this.to.dateShort =     str_to_schort;
        };

    }
}