
import store from './../../../redux/store.js';
import { setEvenstTree } from './../../../redux/playReportAnalyticsSlise.js';

import { check_file_name_for_extension } from './../../../helpers/check_file_name_for_extension.js';

export class EventsTreeClass {
    constructor(){

        this.tree = {};

        this.CreateFromFilteredList = this.CreateFromFilteredList.bind(this);
        this.SetTreeToStore = this.SetTreeToStore.bind(this);
        this.ClearStore = this.ClearStore.bind(this);

        this.GetTree = this.GetTree.bind(this);
        this.ResetTree = this.ResetTree.bind(this);
        this.AddReleaseCounts = this.AddReleaseCounts.bind(this);







    }

    CreateFromFilteredList(){
        let { playReport, layout } = store.getState();
        let { filteredList } = playReport;
        let { eventListById } = layout;

        let tree = {};

        // console.dir({
        //     filteredList,
        //     eventListById
        // });

        for( let i = 0; i < filteredList.length; i++ ){

            // console.dir( 'filteredList[ i ]' );
            //     console.dir( filteredList[ i ] );
            let { eventId } = filteredList[ i ];
            if( eventId !== null ){
                let { 
                    startTime,
                    file,
                    premiere,
                    segmentRealDuration,

                } = filteredList[ i ];

                let fileName = file.name;

                // console.dir( 'eventListById[ eventId ]' );
                // console.dir( eventListById[ eventId ] );
                let { category_id } = eventListById[ eventId ];

                
                // console.dir( 'tree' );
                // console.dir( tree );

                // console.dir( 'category_id' );
                // console.dir( category_id );



                if( tree[ category_id ] ){  }else{
                    tree[ category_id ] = {};
                };

                // console.dir( '1' );

                if( tree[ category_id ][ eventId ] ){}else{
                    tree[ category_id ][ eventId ] = {};
                };
                // console.dir( '2' );

                if( tree[ category_id ][ eventId ][ fileName ] ){
                    tree[ category_id ][ eventId ][ fileName ].count = tree[ category_id ][ eventId ][ fileName ].count + 1;
                }else{
                    tree[ category_id ][ eventId ][ fileName ] = {
                        startTime:      startTime.ms/1000,
                        duration:       segmentRealDuration.ms/1000,
                        isPremiere:     premiere.isPremiere,
                        count:          1,
                        isUsed:         false,
                        releaseCount:   0,
                    };  
                    // console.dir( '3' );
                };

                // 
            };

        }

//         console.dir( 'tree' );
//                 console.dir( tree );
// console.dir( '!!!!!!!!!!!! конец' );
        this.tree = tree;

    }

    SetTreeToStore(){
        store.dispatch( setEvenstTree( structuredClone( this.tree ) ) );
    }

    ClearStore(){
        store.dispatch( setEvenstTree( {} ) );
    }

    GetTree(){
        return structuredClone( this.tree );
    }

    ResetTree( tree ){
        this.tree = tree;
    }

    AddReleaseCounts( release_list ){

        let tree = structuredClone( this.tree );

        for( let i = 0; i < release_list.length; i++ ){
            let {
                category_id,
                event_id,
                file_list,
                releaseName,
                startTime,
                releaseDuration,
            } = release_list[ i ];

            if( tree[ category_id ] ){}else{
                tree[ category_id ] = {};
            };
            if( tree[ category_id ][ event_id ] ){}else{
                tree[ category_id ][ event_id ] = {};
            };

            if( file_list.length > 0 ){

                for( let y = 0; y < file_list.length; y++ ){

                    let fileName = file_list[ y ];

                    if( check_file_name_for_extension( fileName ) ){
                        if( tree[ category_id ][ event_id ][ fileName ] ){
                            tree[ category_id ][ event_id ][ fileName ].releaseCount = tree[ category_id ][ event_id ][ fileName ].releaseCount + 1;
                        }else{
                            tree[ category_id ][ event_id ][ fileName ] = {
                                startTime:      startTime,
                                duration:       releaseDuration,
                                isPremiere:     false,
                                count:          0,
                                isUsed:         false,
                                releaseCount:   1,
                            };  
                        };
                    }else{
                        let fileName_ext = null;

                        // console.dir( tree[ category_id ][ event_id ] );
                        for( let key in tree[ category_id ][ event_id ] ){
                            let fileName_cut_ext = key.replace(/\.[^/.]+$/, '');

                            // console.dir( 'fileName_cut_ext' );
                            // console.dir( fileName_cut_ext );

                            if( fileName === fileName_cut_ext ){
                                fileName_ext = key;
                                break;
                            };
                        };
                        if( fileName_ext === null ){
                            if( tree[ category_id ][ event_id ][ fileName ] ){
                                tree[ category_id ][ event_id ][ fileName ].releaseCount = tree[ category_id ][ event_id ][ fileName ].releaseCount + 1;
                            }else{
                                tree[ category_id ][ event_id ][ fileName ] = {
                                    startTime:      startTime,
                                    duration:       releaseDuration,
                                    isPremiere:     false,
                                    count:          0,
                                    isUsed:         false,
                                    releaseCount:   1,
                                };  
                            };
                        }else{
                            tree[ category_id ][ event_id ][ fileName_ext ].releaseCount = tree[ category_id ][ event_id ][ fileName_ext ].releaseCount + 1;
                        };
                    };
                };

            }else{

                let fileName = releaseName;

                if( tree[ category_id ][ event_id ][ fileName ] ){
                    tree[ category_id ][ event_id ][ fileName ].releaseCount = tree[ category_id ][ event_id ][ fileName ].releaseCount + 1;
                }else{
                    tree[ category_id ][ event_id ][ fileName ] = {
                        startTime:      startTime,
                        duration:       releaseDuration,
                        isPremiere:     false,
                        count:          0,
                        isUsed:         false,
                        releaseCount:   1,
                    };  
                };

            };
        };

        this.tree = tree;
 
    }
}