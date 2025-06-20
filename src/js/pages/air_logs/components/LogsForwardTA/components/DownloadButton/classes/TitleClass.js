
import { GraphicsClass } from './../../../../../../../classes/GraphicsClass.js';

export class TitleClass{
    constructor(){

        this.list = [];

        this.AddItem = this.AddItem.bind(this);
        this.GetList = this.GetList.bind(this);

    }
    
    AddItem( item ){
        this.list.push( new GraphicsClass( item ) )

    }

    GetList(){
        return this.list;
    }

}