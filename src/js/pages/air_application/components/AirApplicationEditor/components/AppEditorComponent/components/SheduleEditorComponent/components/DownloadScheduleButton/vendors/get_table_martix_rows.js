
import { DAY_LENGTH } from './excel_config.js';
import { BORDER_STYLE } from './excel_config.js';
import { BORDER_COLOR_STYLE } from './excel_config.js';
import { FILL_BG_COLOR } from './excel_config.js';


let get_first_cells = ( time, releaseDuration, price, rowNum ) => {
    let result = [
        {
            v: time, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 11,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    // top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    // left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: 'эфир', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    // top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    // left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: `${price}`, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                    color: { rgb: "0964CC" }
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    // top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    // left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                },
                // numFmt: "0.00%"
            } 
        },
        {
            v: releaseDuration, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                    // color: { rgb: "0964CC" }
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    // top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    // left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                },
            } 
        },

        {
            // v: `${ releaseDuration * price }`.padStart( 2, "0" ), t: "s", 
            // v: `${ releaseDuration * price } ${rowNum}`.padStart( 2, "0" ), t: "s", 
            v: '', 
            t: "s", 
            f: `=C${rowNum}*D${rowNum}`,

            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                    color: { rgb: "E01E10" }
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    // top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    // left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
                },
            } 
        },
    ];

    return result;

}

let get_last_cells = ( allDuration, allPrice ) => {

    return [
        {
            v: allDuration, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: true,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                    wrapText: true,
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: allPrice, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: true,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                    wrapText: true,
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },
    ];

}

const getCell = ( str ) => {

    return { 
        v: str === 0? '': str, t: "s", 
        s: { 
            font: { 
                name: "Arial Cyr", 
                sz: 12,
                italic: false,
                bold: true,
                
            },
            alignment: {
                horizontal: 'center',
                vertical: 'bottom',
                // textRotation: 90,
            },
            border: {
                // top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                // left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                right: { style: 'thin', color: BORDER_COLOR_STYLE },
                bottom: { style: 'thin', color: BORDER_COLOR_STYLE },
            },
        } 
    };
}


const get_row = ( matrix_row, price, releaseDuration, rowNum ) => {

    let result = {
        rows: [],
        allDuration: 0,
        allPrice: 0,
        // releaseCount: 0,
    };

    let allDuration = 0;
    let allPrice = 0;
    // let releaseCount = 0;

    let titleVal = '';

    let arr_center_cells = [];

    let count = 0;
    for( let YYYY_MM_DD in matrix_row ){
        let { duration, title } = matrix_row[ YYYY_MM_DD ];
        titleVal = title;
        allDuration = allDuration + duration;
        arr_center_cells.push( getCell( duration ) );
        if( duration > 0){
            // releaseCount = releaseCount + 1;
        };
        count++;
    };
    for( let i = count; i < DAY_LENGTH; i++ ){
        arr_center_cells.push( getCell( '' ) );
    };

    allPrice = price * allDuration;

    let arr_first_cells = get_first_cells( titleVal, releaseDuration, price, rowNum );

    let arr_last_cells = get_last_cells( allDuration, allPrice );

    result.rows = [ ...arr_first_cells, ...arr_center_cells, ...arr_last_cells ];
    result.allDuration = allDuration;
    result.allPrice = allPrice;
    // result.rows.releaseCount = releaseCount
    return result;

}

const get_row_footer = ( martix, sumDuration, sumPrice ) => { 

    let first_arr = [
        {
            v: '', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: '', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: '', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: '', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: '', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: false,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },

    ];
    let center_arr = [];
    let arr = [];

    let obj = {};
    let arr_keys_sort = [];
    for( let i = 0; i < martix.length; i++ ){

        let arr_keys = Object.keys( martix[ i ] );
        arr_keys_sort = arr_keys.sort( ( a, b ) => {
            if( a > b ){
                return 1
            }else{
                return -1
            };
        } );

        for( let y = 0; y < arr_keys_sort.length; y++ ){
            let YYYY_MM_DD = arr_keys_sort[ y ];
            let { duration } = martix[ i ][ YYYY_MM_DD ];
            if( obj[ YYYY_MM_DD ] ){
                if( duration > 0 ){
                    obj[ YYYY_MM_DD ] = obj[ YYYY_MM_DD ] + 1;
                };
                
            }else{
                if( duration > 0 ){
                    obj[ YYYY_MM_DD ] = 1;
                };
            };
        }

    };


    for( let i = 0; i < DAY_LENGTH; i++ ){
        arr.push( '' );
    };
    let index = 0;

    for( let y = 0; y < arr_keys_sort.length; y++ ){
        let YYYY_MM_DD = arr_keys_sort[ y ];
        arr[ index ] = obj[ YYYY_MM_DD ] === 0? '': obj[ YYYY_MM_DD ];
        index = index + 1;
    };

    for( let i = 0; i < arr.length; i++ ){
        center_arr.push({
            v: arr[i], t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: true,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        });
    };

    // sumDuration, sumPrice 

    let last_arr = [
        {
            v: sumDuration, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: true,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                    wrapText: true,
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },
        {
            v: sumPrice, t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 12,
                    italic: false,
                    bold: true,
                },
                
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                    wrapText: true,
                },
                border: {
                    top: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    left: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    right: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                    bottom: { style: BORDER_STYLE, color: BORDER_COLOR_STYLE },
                },
            } 
        },
    ];




    let result = [ ...first_arr, ...center_arr, ...last_arr ];
    return result;

}

export const get_table_martix_rows = ( martix, price, releaseDuration ) => {

    let result = [];
    
    let sumDuration = 0;
    let sumPrice = 0;
    let sumReleaseCount = 0;
    let countArr = [];

    for( let i = 0; i < martix.length; i++ ){
        let { 
            rows,
            allDuration,
            allPrice,
         } = get_row( martix[ i ], price, releaseDuration, 16 + i );
        result.push( rows );

        sumDuration = sumDuration + allDuration;
        sumPrice = sumPrice + allPrice;

    };
    let footerArr = get_row_footer( martix, sumDuration, sumPrice );
    result.push( footerArr );
    result.push( [] );
    result.push( [
        {
            v: '* ГУП ДНР "РМХ" оставляет за собой право, в случае невозможности размещения рекламной продукции заказчика в указаннное время (форс-мажорные обстоятельства), предоставить клиенту эквивалентные по обьему и срокам позиции.', t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 10,
                    italic: false,
                    bold: false,
                },
                
            } 
        },
    ] );



    // let res = [ ...result, ...footerArr ];
    // console.dir( result );


    return  result;


    

    // return result

};