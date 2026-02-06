
import store from './../../../../../../../redux/store.js';
import { setAltKayList } from './../../../../../../../redux/scheduleResultDragEventSlise.js';

export const cleare_altKey_list = () => {
    store.dispatch( setAltKayList( {} ) );
};