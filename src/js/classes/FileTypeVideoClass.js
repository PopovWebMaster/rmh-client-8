

export class FileTypeVideoClass {
    constructor( params ){
        let {
            channel,
            type
        } = params;

        this.puth = type;

        this.name = `Прямая трансляция. Канал - ${channel}`;

        this.GetDataAsObject = this.GetDataAsObject.bind(this);

    }

    GetDataAsObject(){
        return {
            puth:   this.puth,
            name:   this.name,
        };

    }
}