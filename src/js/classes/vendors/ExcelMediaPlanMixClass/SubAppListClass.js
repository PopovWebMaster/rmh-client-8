
import store from './../../../redux/store.js';

export class SubAppListClass {
    constructor(){

        this.listById = {};

        this.CreateList = this.CreateList.bind(this);
        this.GetListArray = this.GetListArray.bind(this);


    }

    CreateList( arr ){
        let { application } = store.getState();
        let { currentSubAppListById } = application;

        for( let i = 0; i < arr.length; i++ ){
            let sub_app_id = arr[ i ];
            this.listById[ sub_app_id ] = { ...currentSubAppListById[ sub_app_id ] };
        };
    }

    GetListArray(){
        let arr = [];
        for( let key in this.listById ){
            arr.push( this.listById[ key ] );
        };
        return arr;

    }
}