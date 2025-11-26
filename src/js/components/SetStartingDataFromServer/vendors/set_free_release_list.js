

import { FreeReleasesListClass } from './../../../classes/FreeReleasesListClass.js';


export const set_free_release_list = ( response ) => {


    let { freeReleaseList } = response;

    if( freeReleaseList ){

        let FreeReleasesList = new FreeReleasesListClass();
        FreeReleasesList.SetListFromStore( freeReleaseList );
        FreeReleasesList.SetToStore();


    };
};