
const convert = require('xml-js');

export const read_log_file = ( file, callback ) => {

    let reader = new FileReader();

    let utf8 = false;

    reader.readAsText( file, utf8 ? 'UTF-8' : 'CP1251' );

    reader.onload = function() {
        var result2 = convert.xml2js( reader.result, {compact: false, spaces: 4});
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