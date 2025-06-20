

export class FileClass {
    constructor( file ){

        this.puth = file;

        let arr = file.split( '\\' );
        this.name = arr[ arr.length - 1 ];

        this.GetDataAsObject = this.GetDataAsObject.bind(this);

    }

    GetDataAsObject(){
        return {
            puth:   this.puth,
            name:   this.name,
        };

    }
}