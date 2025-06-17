
import store from './../redux/store.js'

export const send_request_to_server = ( params ) => {
    let {
        route,
        data,
        successCallback = () => {},
        errorCallback = () => {},
    } = params;

    let isError = false;

    let { common } = store.getState();
    let { page, companyAlias } = common;

    let token = '';
    let url = '';
    let headers = {};

    let data_complete = { ...data };
    data_complete.currentPage = page;
    data_complete.companyAlias = companyAlias;

    if( IS_DEVELOPMENT ){
        data_complete.route = route;
        url = `${HOST_TO_API_SERVER}/api`;
        headers = {
            'Content-Type': 'application/json; charset=UTF-8',
            "Accept": "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
        };

    }else{
        url = `${HOST_TO_API_SERVER}/${page}/${route}`;

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
            }else{
                errorCallback( response );
            };

        } catch (error) {
            console.error( `Ошибка !!!<|>: ${error}. При попытке вызвать fetch` );
            console.error({
                _token,
                // action,
                href,
                data,
            });
            console.log('');
        };

    };

    if( isError ){

    }else{
        send();
    };

    








    // async function sendProd(){





    //     let response = await fetch(url, {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json, text-plain, */*",
    //             "X-Requested-With": "XMLHttpRequest",
    //             "X-CSRF-TOKEN": token
    //             },
    //         method: 'post',
    //         credentials: "same-origin",
    //         body: JSON.stringify( data_complete )
    //     })
    //     .then((data) => {
    //         // window.location.href = redirect;
    //         console.dir( 'data' );
    //         console.dir( data );

    //         let data_respons = data.json();
    //             console.dir( 'data_respons' );
    //             console.dir( data_respons.then(( value )=>console.dir( value )) );


    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });

    // };

    // async function sendDev(){


    //     try {
    //         const response = await fetch( url, {
    //             method: 'post',  
    //             headers: {
    //                 'Content-Type': 'application/json; charset=UTF-8',

    //                 "Accept": "application/json, text-plain, */*",
    //                 "X-Requested-With": "XMLHttpRequest",
    //                 // "X-CSRF-TOKEN": _token
    //             },
    //             credentials: "same-origin",
    //             dataType: "json",
    //             // mode: 'no-cors',
    //             body: JSON.stringify({
    //                 _token: token,
    //                 data: data_complete,
    //             }) 
    //         });

    //         if ( response.ok ) { 
    //             let data_respons = await response.json();
    //             successCallback( data_respons );
    //         }else{
    //             errorCallback( response );
    //         };

    //     } catch (error) {
    //         console.error( `Ошибка !!!<|>: ${error}. При попытке вызвать fetch` );
    //         console.error({
    //             _token,
    //             // action,
    //             href,
    //             data,
    //         });
    //         console.log('');
    //     };













    //     // const data = {
    //     //     optPost: 'myAPI',
    //     //     message: 'We make a research of fetch'
    //     // };

    //     // fetch(url, {
    //     //     headers: {
    //     //         "Content-Type": "application/json",
    //     //         // "Accept": "application/json, text-plain, */*",
    //     //         // "X-Requested-With": "XMLHttpRequest",
    //     //         // "X-CSRF-TOKEN": token
    //     //     },
    //     //     method: 'POST',
    //     //     mode: 'no-cors',
    //     //     credentials: "same-origin",
    //     //     body: JSON.stringify(data)
    //     // })
    //     // .then(  (resp) => {
    //     //     console.dir( 'resp' );
    //     //     console.dir( resp );

    //     //     // resp.json()
    //     // })
    //     // .then(function(response) {
    //     //     console.info('fetch()', response);
    //     //     return response;
    //     // });

    //     // let response = await fetch(url, {
    //     //     headers: {
    //     //         "Content-Type": "application/json",
    //     //         "Accept": "application/json, text-plain, */*",
    //     //         "X-Requested-With": "XMLHttpRequest",
    //     //         "X-CSRF-TOKEN": token
    //     //         },
    //     //     method: 'post',
    //     //     mode: 'no-cors',
    //     //     credentials: "same-origin",
    //     //     body: JSON.stringify( data_complete )
    //     // })
    //     // .then((data) => {
    //     //     // window.location.href = redirect;
    //     //     console.dir( 'data' );
    //     //     console.dir( data );

    //     //     let data_respons = data.json();
    //     //         console.dir( 'data_respons' );
    //     //         console.dir( data_respons.then(( value )=>console.dir( value )) );


    //     // })
    //     // .catch(function(error) {
    //     //     console.log(error);
    //     // });












    //     // try {
    //         // const response = await fetch( url, {
    //         //     method: 'post',  
    //         //     mode: 'no-cors',
    //         //     headers: {
    //         //         'Content-Type': 'application/json; charset=UTF-8',
    //         //     },
    //         //     dataType: "json",
    //         //     body: JSON.stringify({
    //         //         _token: token,
    //         //         data: data_complete,
    //         //     }) 
    //         // });

    //         //     let data_respons = response.json();
    //         //     console.dir( 'data_respons' );
    //         //     console.dir( data_respons.then(( value )=> console.dir( value )) );

    //             // console.dir( data_respons.then(( value )=> console.dir( value )) );

    //         // console.dir( 'response' );
    //         // console.dir( response );

    //         // let data_respons = data.json();
    //         //     console.dir( 'data_respons' );
    //         //     console.dir( data_respons.then(( value )=> console.dir( value )) );

    //         // let data_respons = await response.json();
    //         // console.dir( 'data_respons' );
    //         // console.dir( data_respons );



    //         // if ( response.ok ) { 
    
    //             // let data_respons = await response.json();
    //             // console.dir( data_respons );
    //             // successCallback( data_respons );

    //             // let data_respons = data.json();
    //             // console.dir( 'data_respons' );
    //             // console.dir( data_respons.then(( value )=> console.dir( value )) );

    //         // }else{
    //             // errorCallback( response );
    //         // };

    //     // } catch (error) {

    //     //     console.error( `Ошибка: ${error}. При попытке вызвать fetch` );
    //     //     console.error({
    //     //         _token: token,
    //     //         // action,
    //     //         url,
    //     //         data_complete,
    //     //     });
    //     //     console.log('');
                

    //     // };


    // };

    // if( IS_DEVELOPMENT ){
    //     sendDev();
    // }else{
    //     sendProd();
    // };




}