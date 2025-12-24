
import store from './../redux/store.js';

let sendCount = 0;

export const send_request_to_server = ( params ) => {
    let {
        route,
        data,
        successCallback = () => {},
        errorCallback = () => {},
    } = params;

    /*
        Внимание!!!
        
        Все пост запросы отправляются по принципу HOST/page/route( строка без / )

        "currentPage" и "companyAlias" передаются в объекте data

        ТОЛЬКО ТАК!!!!!!!!!!
    
    */

    let isError = false;

    let { common, company } = store.getState();
    let { currentPage } = common;
    let { currentCompanyAlias } = company;

    let token = '';
    let url = '';
    let headers = {};

    let data_complete = { ...data };
    data_complete.currentPage = currentPage;
    data_complete.companyAlias = currentCompanyAlias;

    if( IS_DEVELOPMENT ){

        data_complete.route = `${currentPage}/${route}`;
        url = `${HOST_TO_API_SERVER}/api`;
        headers = {
            'Content-Type': 'application/json; charset=UTF-8',
            "Accept": "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
        };

    }else{
        url = `${HOST_TO_API_SERVER}/${currentPage}/${route}`;

        if( document.querySelector('meta[name="csrf-token"]') ){
            token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            headers = {
                "Content-Type": "application/json",
                "Accept": "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": token
            };
        }else{
            isError = true;
            console.error( 'Токен не найден' );
        };
    };

    const send = async () => {
        try {
            const response = await fetch( url, {
                method: 'post',  
                headers,
                credentials: "same-origin",
                dataType: "json",
                body: JSON.stringify({
                    _token: token,
                    data: data_complete,
                }) 
            });

            if ( response.ok ) { 
                let data_respons = await response.json();
                successCallback( data_respons );
                sendCount = 0;
            }else{

                // send();
                let conf = confirm( 'Ошибка соединения, попробовать снова?' );
                if( conf ){
                    send();
                }else{

                };

                errorCallback( response );
            };

        } catch (error) {

            let conf = confirm( 'Ошибка соединения, попробовать снова?' );
            if( conf ){
                send();
            }else{

            };




            // send();
            console.error( `Ошибка : ${error}. При попытке вызвать fetch` );
            console.error({
                _token: token,
                url,
                data,
            });
            console.log('');
        };

    };

    if( isError ){

    }else{

        if( sendCount < 3 ){
            send();
        }else{
            sendCount = 0;
        };
        
    };

}