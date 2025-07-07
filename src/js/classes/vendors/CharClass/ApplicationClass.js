
import store from './../../../redux/store.js';

export class ApplicationClass {
    constructor(){
        
        let { application } = store.getState();

        let {
            currentApplicationId,
            applicationById,

        } = application;

        this.id = null;
        this.category_id = null;
        this.event_id = null;
        this.manager_notes = '';
        this.name = '';
        this.sub_application_list = [];

        if( applicationById[ currentApplicationId ] ){
            let {
                category_id,
                event_id,
                id,
                manager_notes,
                name,
                sub_application_list,
            } = applicationById[ currentApplicationId ];

            this.id = id;
            this.category_id = category_id;
            this.event_id = event_id;
            this.manager_notes = manager_notes;
            this.name = name;
            this.sub_application_list = sub_application_list;

        };

        
        






    }
}