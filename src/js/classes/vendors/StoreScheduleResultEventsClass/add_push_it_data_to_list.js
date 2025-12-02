
import { PUSH_IT } from './../../../config/layout.js'

export const add_push_it_data_to_list = ( list ) => {

    let result = [];

    for( let i = 0; i < list.length; i++ ){
        let item = structuredClone( list[ i ] );
        let { 
            pushIt,
            isKeyPoint,
            startTime,
            durationTime,
        } = item;

        let push_it = null

        if( i === 0 ){
            if( isKeyPoint ){
                push_it = null;
            }else{
                if( list[ i + 1 ] ){
                    if( (startTime + durationTime + 1) === list[ i + 1 ].startTime ){
                        if( list[ i + 1 ].isKeyPoint ){
                            push_it = PUSH_IT.BOTTOM;
                        }else{
                            push_it = is_push_down( i, list, startTime, durationTime );
                        };
                    };
                };
            };
        }else{
            if( isKeyPoint ){
                item.pushIt = null;
            }else{
                if( result[ i - 1 ] ){
                    if( (result[ i - 1 ].startTime + result[ i - 1 ].durationTime + 1) === startTime ){
                        if( result[ i - 1 ].isKeyPoint ){
                            push_it = PUSH_IT.UP;
                        }else{
                            if( result[ i - 1 ].pushIt !== null ){
                                push_it = result[ i - 1 ].pushIt;
                            }else{
                                if( list[ i + 1 ]){
                                    if( (startTime + durationTime + 1) === list[ i + 1 ].startTime ){
                                        if( list[ i + 1 ].isKeyPoint ){
                                            push_it = PUSH_IT.BOTTOM
                                        }else{
                                            push_it = is_push_down( i, list, startTime, durationTime );
                                        };
                                    };
                                };
                            };
                        };
                    }else{
                        if( list[ i + 1 ] ){
                            if( (startTime + durationTime + 1) === list[ i + 1 ].startTime ){
                                if( list[ i + 1 ].isKeyPoint ){
                                    push_it = PUSH_IT.BOTTOM
                                }else{
                                    push_it = is_push_down( i, list, startTime, durationTime );
                                };
                            };
                        };
                    };
                }else if( list[ i + 1 ] ){
                    if( (startTime + durationTime + 1) === list[ i + 1 ].startTime ){
                        if( list[ i + 1 ].isKeyPoint ){
                            push_it = PUSH_IT.BOTTOM
                        }else{
                            push_it = is_push_down( i, list, startTime, durationTime );
                        };
                    };
                };
            }

        };

        item.pushIt = push_it;

        result.push( { ...item } );
    };

    return result;

}

function is_push_down( i, list, startTime, durationTime ){
    let plus = 1;
    let flag = true;
    let result = null;
    while( flag ){
        flag = false;
        if( list[i+plus] ){
            if(list[i+plus+1]){
                if( (list[i+plus].startTime + list[i+plus].durationTime + 1) === list[i+plus+1].startTime){
                    if(list[i+plus+1].isKeyPoint){
                        result = PUSH_IT.BOTTOM;
                    }else{
                        flag = true;
                        plus = plus + 1;
                    };
                };
            }else{
                if((startTime + durationTime + 1) === list[i+plus].startTime){
                    if(list[i+plus].isKeyPoint){
                        result = PUSH_IT.BOTTOM;
                    };
                };
            };
        };
    };
    return result;
}