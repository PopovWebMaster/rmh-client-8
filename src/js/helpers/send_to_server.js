

// export const send_to_server = ( params ) => {

//     let href =              params.href;
//     let data =              params.data;
//     let successCallback =   params.successCallback;
//     let errorCallback =     params.errorCallback;

//     let token = '';
//     let url = '';

//     if( IS_DEVELOPMENT ){
//         url = 'http://rmh-donetsk.ru/get-data';
//     }else{
//         token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

//     };



//     // let url = 'http://rmh-donetsk.ru/get-data';
    

//                 async function onClick(){
//                     let response = await fetch(url, {
//                         headers: {
//                             "Content-Type": "application/json",
//                             "Accept": "application/json, text-plain, */*",
//                             "X-Requested-With": "XMLHttpRequest",
//                             "X-CSRF-TOKEN": token
//                             },
//                         method: 'post',
//                         credentials: "same-origin",
//                         body: JSON.stringify({
//                             name: 'Tushar',
//                             number: '78987'
//                         })
//                     })
//                     .then((data) => {
//                         // window.location.href = redirect;
//                         console.dir( 'data' );
//                         console.dir( data );

//                         let data_respons = data.json();
//                             console.dir( 'data_respons' );
//                             console.dir( data_respons.then(( value )=>console.dir( value )) );


//                     })
//                     .catch(function(error) {
//                         console.log(error);
//                     });

//                 };

//                 onClick();




// }