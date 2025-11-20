

export class FreeReleaseClass {
    constructor( params ){

        let {
            fileName,
            eventId,
            count = 0,
            duration,
        } = params;

        this.fileName = fileName;
        this.eventId = eventId;
        this.duration = duration;

        /*
            count считается на клиенте, от сервера мы его не получаем
        */

        this.count = count;


    }

    
}