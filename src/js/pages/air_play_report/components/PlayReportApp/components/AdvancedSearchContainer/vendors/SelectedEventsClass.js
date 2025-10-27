
import store from './../../../../../../../redux/store.js';


import { DEFAULT_CATEGORY, EVENT_TYPE } from './../../../../../../../config/layout.js'


export class SelectedEventsClass{
    constructor(){
        this.list = [];
        this.listById = {};

        this.AddAsToggle = this.AddAsToggle.bind(this);
        this.GetList =  this.GetList.bind(this);
        this.Remove =  this.Remove.bind(this);
        this.SetList =  this.SetList.bind(this);
        this.CreateEvent =  this.CreateEvent.bind(this);
        this.AddEvent =  this.AddEvent.bind(this);

        

        
        

    }

    SetList( arr ){
        let list = [];
        let listById = {};

        for( let i = 0; i < arr.length; i++ ){
            let { event_id } = arr[ i ];
            list.push( { ...arr[ i ] } );
            listById[ event_id ] = { ...arr[ i ] };
        };

        this.list = list;
        this.listById = listById;

    }

    CreateEvent( id ){
        let { layout } = store.getState();
        let { eventListById, categoryListById } = layout;

        let event = eventListById[ id ];
        let style = {
            backgroundColor:    DEFAULT_CATEGORY.colorBG,
            color:              DEFAULT_CATEGORY.colorText,
            borderColor:        DEFAULT_CATEGORY.colorBG,
        };

        if( categoryListById[ event.category_id ] ){
            let { colorBG, colorText } = categoryListById[ event.category_id ];
            if( event.type === EVENT_TYPE.BLOCK ){
                style.backgroundColor = '#00000000';
                style.color = colorBG;
                style.borderColor = colorBG;
            }else{
                style.backgroundColor = colorBG;
                style.color = colorText;
                style.borderColor = colorBG;
            };
        };

        let result = {
            event_id:       event.id,
            category_id:    event.category_id,
            type:           event.type,
            name:           event.name,
            style:          style,
        };

        return result;

    }

    AddEvent( id ){
        let newEvent = this.CreateEvent( id );
        this.list.push( newEvent );
        this.listById[ id ] = newEvent;

    };

    AddAsToggle( id ){ // если нет такого, то добавит, а если есть, то удалит

        if( this.listById[ id ] ){
            this.Remove( id );
        }else{
            this.AddEvent( id );
        };
    }

    GetList(){
        let arr = structuredClone( this.list );

        let result = arr.sort( ( a, b ) => {
            if( a.category_id > b.category_id ){
                return 1
            }else if( a.category_id < b.category_id ){
                return -1
            }else{
                if( a.event_id > b.event_id ){
                    return -1;
                }else{
                    return 1;
                };
            };
        } );
        
        return result;
    }

    Remove( id ){
        let list = [];
        let listById = {};
        
        for( let i = 0; i < this.list.length; i++ ){
            let { event_id } = this.list[ i ];
            if( event_id !== id ){
                list.push( { ...this.list[ i ] } );
                listById[ event_id ] = { ...this.list[ i ] };
            };
        };

        this.list = list;
        this.listById = listById;

    }
}