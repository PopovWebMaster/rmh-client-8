

export const get_content_as_table_from_list = ( params ) => {
    let {
        list,
    } = params;

    let Date_ =             'Дата';
    let Time =              'Время начала';
    let FileName =          'Имя файла';
    let FileDuration =      'Длительность файла';
    let FileDurationSec =   'Длительность файла (секунды)';
    let SegmentDuration =   'Длительность сегмента';
    let SegmentDurationSec ='Длительность сегмента (секунды)';
    let SegmentStart =      'Старт сегмента с';

    let content_txt = get_row_str({
        Date: Date_,
        Time,
        FileName,
        FileDuration,
        FileDurationSec,
        SegmentDuration,
        SegmentDurationSec,
        SegmentStart,
    });

    for( let i = 0; i < list.length; i++ ){
        let {
            type,
            startTime,
            segmentRealDuration,
            markIn,
            fileDuration,
            file,
            date,
        } = list[ i ];

        if( type === 'movie' ){
            let row = get_row_str({
                Date: date.YYYY_MM_DD,
                Time: trim_ms( startTime.time ),
                FileName: file.name,
                FileDuration: trim_ms( fileDuration.time ),
                FileDurationSec: Math.round( fileDuration.ms/1000 ),
                SegmentDuration: trim_ms( segmentRealDuration.time ),
                SegmentDurationSec: Math.round( segmentRealDuration.ms/1000 ),
                SegmentStart: trim_ms( markIn.time ),
            });

            content_txt = `${content_txt}${row}`;

        }else if( type === 'empty' ){

            let row = get_row_str({
                Date: date.YYYY_MM_DD,
                Time: trim_ms( startTime.time ),
                FileName: 'Ошибка! Прерывание эфира по неизвестной причине',
                FileDuration: trim_ms( list[ i ].duration.time ),
                FileDurationSec: Math.round( list[ i ].duration.ms/1000 ),
                SegmentDuration: trim_ms( list[ i ].duration.time ),
                SegmentDurationSec: Math.round( list[ i ].duration.ms/1000 ),
                SegmentStart: trim_ms( '00:00:00.00' ),
            });

            content_txt = `${content_txt}${row}`;

        };

    };

    return content_txt;

}

function get_row_str( params ){
    let {
        Date,
        Time,
        FileName,
        FileDuration,
        FileDurationSec,
        SegmentDuration,
        SegmentDurationSec,
        SegmentStart,
    } = params;

    return `${Date}\t${Time}\t${FileName}\t${FileDuration}\t${FileDurationSec}\t${SegmentDuration}\t${SegmentDurationSec}\t${SegmentStart}\n`

};

function trim_ms( str ){
    let arr = str.split( '.' );
    return arr[0];
}