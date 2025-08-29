
import { send_request_to_server } from './../../../../../../../../../helpers/send_request_to_server.js';

export const get_user_access_rights = ( userId, callback ) => {

    send_request_to_server({
        route: 'get-user-access-right',
        data: {
            userId,
        },
        successCallback:( resp ) => {
            callback( resp );
        },
    });


}