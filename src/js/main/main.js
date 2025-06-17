
import './main.scss';

if( IS_DEVELOPMENT ){
    require('./../../scss/main/main_development.scss');


}else{
    require('./../../scss/main/main_production.scss');

};

console.dir( 'main.js подключен' );
console.log( 'HOST_TO_API_SERVER', HOST_TO_API_SERVER );






