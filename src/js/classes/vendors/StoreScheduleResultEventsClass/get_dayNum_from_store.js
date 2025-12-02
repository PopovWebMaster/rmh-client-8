import store from './../../../redux/store.js'

export const get_dayNum_from_store = () => {
    let { layout } = store.getState();
    let { gridCurrentDay } = layout;
    return gridCurrentDay;
};