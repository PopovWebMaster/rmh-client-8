
import nanoMetadata from 'nano-metadata'

export const get_metadata_from_video_file = ( file, callback ) => {
    let {
        name,
        type,
    } = file;

    let fileName = name;
    let fileDuration = null;

    if( type === 'video/mp4' ){
        nanoMetadata.video.duration(file).then((duration) => {
            fileDuration = Math.floor( Number( duration ) );

            console.dir( 'fileDuration' )
            console.dir( fileDuration )

            callback( fileName, fileDuration );
        });
    }else{
        callback( fileName, fileDuration );
    };

}