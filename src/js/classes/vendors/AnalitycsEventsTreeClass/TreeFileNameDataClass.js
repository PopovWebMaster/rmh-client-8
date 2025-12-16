

export class TreeFileNameDataClass {
    constructor(){

        this.list = [];

        this.fileName = null;
        

        this.AddData = this.AddData.bind(this);
        this.GetData = this.GetData.bind(this);


    };

    AddData( filteredListItem ){
        let {
            file,
            fileDuration,
            markIn,
            premiere,
            startTime,
            segmentRealDuration,
            type,
        } = filteredListItem;

        if( type === 'movie' ){

            this.fileName = file.name;

            this.list.push({
                startTime:          startTime.ms/1000,
                duration:    segmentRealDuration.ms/1000,
                isPremiere:         premiere.isPremiere,
                // count:          1,
                isUsed: false,
                releaseCount:   0,
                markIn: markIn.ms/1000,
                fileDuration: fileDuration.ms/1000,
            });

        };

    }

    GetData(){

        let result = {};

        // let isNoCutParts = false;
        // let is_premiere = false;
        // let count = 0;

        let wholeItem = null;
        let cutList = [];

        // let cutIndex = 1;

        for( let i = 0; i < this.list.length; i++ ){
            let {
                fileDuration,
                duration,
                // isPremiere,
                // markIn, 
            } = this.list[ i ];

            if( fileDuration === duration ){
                let count = 1;
                if( wholeItem !== null ){
                    count = wholeItem.count + 1;
                };
                wholeItem = { ...this.list[ i ] };
                wholeItem.count = count;
            }else{
                let item = { ...this.list[ i ] };
                item.count = 1;
                cutList.push( item );
            };
        };

        if( wholeItem !== null ){
            result[ this.fileName ] = { ...wholeItem };
        };

        for( let i = 0 ; i < cutList.length; i++ ){
            result[ `${this.fileName} (Порезка ${i + 1})` ] = { ...cutList[ i ] };
        };

          
        return result

    }
}