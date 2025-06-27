
import store from './../../../../../../../../../../../redux/store.js';

export const new_file_name_is_unic = ( new_file_name ) => {

    let result = {
        isUnic: true,
        repeatApplication: '',
        repeatSubApplication: '',
    };

    let { application } = store.getState();
    let { applicationList } = application;

    // console.dir( applicationList );

    for( let i = 0; i < applicationList.length; i++ ){
        let subApp = applicationList[ i ].sub_application_list;
        for( let subI = 0; subI < subApp.length; subI++ ){
            let file_names = subApp[ subI ].file_names;
            if( file_names.indexOf( new_file_name ) !== -1 ){
                result.isUnic = false;
                result.repeatApplication = applicationList[ i ].name;
                result.repeatSubApplication = subApp[ subI ].name;
                break;
            };
        };
    };



    return result;
};