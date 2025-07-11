
import store from './../../../redux/store.js';
import { DEFAULT_CATEGORY } from './../../../config/layout.js';

export class CategoryClass {
    constructor(){

        this.id = null;
        this.colorBg = '';
        this.colorText = '';
        this.name = '';
        this.prefix = '';

        let { application, layout } = store.getState();
        
        let { currentApplicationId, applicationById } = application;
        let { categoryListById } = layout;

        if( applicationById[ currentApplicationId ] ){
            let { category_id } = applicationById[ currentApplicationId ];

            if( categoryListById[ category_id ] ){
                let {
                    id,
                    colorBG,
                    colorText,
                    name,
                    prefix,
                } = categoryListById[ category_id ];

                this.id = id;
                this.colorBg = colorBG;
                this.colorText = colorText;
                this.name = name;
                this.prefix = prefix;

            }else{

                let {
                    id,
                    colorBG,
                    colorText,
                    name,
                    prefix,

                } = DEFAULT_CATEGORY;

                this.id = id;
                this.colorBg = colorBG;
                this.colorText = colorText;
                this.name = name;
                this.prefix = prefix;

            };


        }


        this.GetData = this.GetData.bind(this);
    
        
    }

    GetData(){
        return {
            id:         this.id,
            colorBg:    this.colorBg,
            colorText:  this.colorText,
            name:       this.name,
            prefix:     this.prefix,
        }
        
    }
}