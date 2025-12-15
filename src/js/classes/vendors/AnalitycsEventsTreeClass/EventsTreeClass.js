
import store from './../../../redux/store.js';
import { setEvenstTree } from './../../../redux/playReportAnalyticsSlise.js';

import { check_file_name_for_extension } from './../../../helpers/check_file_name_for_extension.js';

import { TreeFileNameDataClass } from './TreeFileNameDataClass.js';

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

        let tree_list = {};

        for( let i = 0; i < filteredList.length; i++ ){

            let { eventId } = filteredList[ i ];
            if( eventId !== null ){
                let { 
                    startTime,
                    file,
                    premiere,
                    segmentRealDuration,
                    markIn,
                    fileDuration,

                } = filteredList[ i ];

                // console.dir( filteredList[ i ] );

                let fileName = file.name;

                let { category_id } = eventListById[ eventId ];

                if( tree[ category_id ] ){  }else{
                    tree[ category_id ] = {};
                };

                if( tree_list[ category_id ] ){  }else{
                    tree_list[ category_id ] = {};
                };

                if( tree[ category_id ][ eventId ] ){}else{
                    tree[ category_id ][ eventId ] = {};
                };

                if( tree_list[ category_id ][ eventId ] ){}else{
                    tree_list[ category_id ][ eventId ] = {};
                };

                if( tree[ category_id ][ eventId ][ fileName ] ){
                    tree[ category_id ][ eventId ][ fileName ].count = tree[ category_id ][ eventId ][ fileName ].count + 1;
                }else{
                    let mark_in_sec = markIn.ms/1000;
                    let file_duration_sec = fileDuration.ms/1000;

                    tree[ category_id ][ eventId ][ fileName ] = {
                        startTime:      startTime.ms/1000,
                        duration:       segmentRealDuration.ms/1000,
                        isPremiere:     premiere.isPremiere,
                        count:          1,
                        isUsed:         false,
                        releaseCount:   0,

                        markIn: mark_in_sec,
                        fileDuration: file_duration_sec
                    };  

                    // tree_list
                };


                if( tree_list[ category_id ][ eventId ][ fileName ] ){

                }else{
                    tree_list[ category_id ][ eventId ][ fileName ] = new TreeFileNameDataClass;
                };

                tree_list[ category_id ][ eventId ][ fileName ].AddData( filteredList[ i ] );

                // tree_list[ category_id ][ eventId ][ fileName ].push( {
                //     startTime:      startTime.ms/1000,
                //     duration:       segmentRealDuration.ms/1000,
                //     isPremiere:     premiere.isPremiere,
                //     count:          1,
                //     isUsed:         false,
                //     releaseCount:   0,

                //     markIn: markIn.ms/1000,
                //     fileDuration: fileDuration.ms/1000,
                // } );


            };

        };

        let tree_v2 = {};
        for( let category_id in tree_list ){
            for( let eventId in tree_list[ category_id ] ){
                for( let fileName in tree_list[ category_id ][ eventId ] ){
                    if( tree_v2[ category_id ]){}else{ tree_v2[ category_id ] = {} };
                    if( tree_v2[ category_id ][ eventId ]){}else{ tree_v2[ category_id ][ eventId ] = {} };

                    let items = tree_list[ category_id ][ eventId ][ fileName ].GetData();

                    for( let file_name in items ){
                        tree_v2[ category_id ][ eventId ][ file_name ] = items[ file_name ]
                    };



                    // tree_v2[ category_id ][ eventId ][ fileName ] = tree_list[ category_id ][ eventId ][ fileName ].GetData();
                };
            };
        };

        console.dir( 'tree' );
        console.dir( tree );

        // console.dir( 'tree_list' );
        // console.dir( tree_list );

        console.dir( 'tree_v2' );
        console.dir( tree_v2 );




        this.tree = tree_v2;

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