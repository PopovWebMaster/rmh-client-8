

export class DateClass {
    constructor( YYYY_MM_DD ){

        let date = new Date( YYYY_MM_DD );

        this.YYYY_MM_DD = YYYY_MM_DD;
        this.ms = date.getTime();

        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC'
        };
        this.localeString =  date.toLocaleString( "ru", options );

        this.GetDataAsObject = this.GetDataAsObject.bind(this);

    }

    GetDataAsObject(){
        return {
            YYYY_MM_DD:     this.YYYY_MM_DD,
            ms:             this.ms,
            localeString:   this.localeString,
        };

    }
}