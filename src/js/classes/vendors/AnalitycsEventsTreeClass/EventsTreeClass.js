
import store from './../../../redux/store.js';
import { setEvenstTree } from './../../../redux/playReportAnalyticsSlise.js';

export class EventsTreeClass {
    constructor(){

        this.tree = {};

        this.CreateFromFilteredList = this.CreateFromFilteredList.bind(this);
        this.SetTreeToStore = this.SetTreeToStore.bind(this);
        this.ClearStore = this.ClearStore.bind(this);

        this.GetTree = this.GetTree.bind(this);
        this.ResetTree = this.ResetTree.bind(this);





    }

    CreateFromFilteredList(){
        let { playReport, layout } = store.getState();
        let { filteredList } = playReport;
        let { eventListById } = layout;

        let tree = {};

        console.dir({
            filteredList,
            eventListById
        });

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
        this.tree = tree
    }
}