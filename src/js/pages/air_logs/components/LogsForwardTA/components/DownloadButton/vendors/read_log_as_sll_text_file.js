const convert = require('xml-js');

export const read_log_as_sll_text_file = ( file, callback ) => {

     let reader = new FileReader();
    
        let utf8 = false;
    
        reader.readAsText( file, utf8 ? 'UTF-8' : 'CP1251' );
    
        reader.onload = function() {


            let arr = reader.result.split( '\r\r\n' );


            console.dir( 'arr' );
            console.dir( arr );

            let newarr = [];

            let str_xml = '<?xml version="1.0" ?><root TimeCodeFormat="10ms" FrameRate="25">'


            for( let i = 0; i < arr.length; i++ ){
                // let item = arr[ i ].split( 'Program            Report' );
                let item = arr[ i ].split( '  Report  ' );

                if( item[ 1 ] ){
                    newarr.push( item[ 1 ].trim() );
                    str_xml = str_xml + item[ 1 ].trim();
                };

            };

            // console.dir( 'newarr' );
            // console.dir( newarr );

            var result2 = convert.xml2js( str_xml, {compact: false, spaces: 4});

            console.dir( 'result2' );
            console.dir( result2 );



            // var result2 = convert.xml2js( reader.result, {compact: false, spaces: 4});

            

            if( result2.elements ){
                if( result2.elements[0] ){
                    if( result2.elements[0].elements ){
                        let list = result2.elements[0].elements;
                        callback( list );
                    };
                };
            };
        };

}