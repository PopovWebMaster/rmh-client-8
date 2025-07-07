import store from './../../../redux/store.js';

export class EventClass {

    constructor(){
        let { application, layout } = store.getState();

        let {
            currentApplicationId,
            applicationById,

        } = application;

        let { eventListById } = layout;

        this.id = null;
        this.category_id = null;
        this.name = '';
        this.durationTime = '';
        this.notes = '';
        this.type = '';


        if( applicationById[ currentApplicationId ] ){
            let { event_id } = applicationById[ currentApplicationId ];
            if( eventListById[ event_id ] ){
                let { category_id, durationTime, id, name, notes, type } = eventListById[ event_id ];
                this.id =               id;
                this.category_id =      category_id;
                this.name =             name;
                this.durationTime =     durationTime;
                this.notes =            notes;
                this.type =             type;
            };
        };

        this.GetData = this.GetData.bind(this);
        
    }

    GetData(){
        return {
            id:             this.id,
            category_id:    this.category_id,
            name:           this.name,
            durationTime:   this.durationTime,
            notes:          this.notes,
            type:           this.type,

        }
        
    }
}