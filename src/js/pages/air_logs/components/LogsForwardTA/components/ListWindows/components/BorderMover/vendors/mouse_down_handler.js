
import store from './../../../../../../../../../redux/store.js';
import { setWindowLeftWidth, setWindowRightWidth } from './../../../../../../../../../redux/logsForwardTASlise.js';

export const mouse_down_handler = ( e ) => {

    let { logsForwardTA } = store.getState();
    let { minWidth, borderMoverWidtnPx } = logsForwardTA;

    let click_error_rate = 0;
    let parent_window_left = 0;
    let parent_window_width = 0;

    var { x } = e.target.getBoundingClientRect();

    click_error_rate =  ( e.screenX - x ) + borderMoverWidtnPx;


    let FTA_ListWindows = document.querySelector( '.FTA_ListWindows' );
    let windowRect = FTA_ListWindows.getBoundingClientRect();
    parent_window_left = windowRect.left;
    parent_window_width = windowRect.width;

    let div = document.createElement('div');
    div.id = 'curtainCurs';
    let app = document.querySelector('#app');
    app.append( div );


    
    let move_handler = ( move_e ) => {
        let cursor_x = move_e.x;
        let left_width_px = cursor_x - parent_window_left - click_error_rate;
        let left_width_proc = Math.round(( left_width_px * 100 ) / parent_window_width );
        let right_width_proc = 100 - left_width_proc;

        if( left_width_proc  > minWidth && right_width_proc > minWidth ){
            store.dispatch( setWindowLeftWidth( left_width_proc ) );
            store.dispatch( setWindowRightWidth( right_width_proc ) );

        }
    };

    const mouse_up_handler = () => {
        window.removeEventListener( 'mousemove', move_handler );
        window.removeEventListener( 'mouseup', mouse_up_handler );
        let curtainCurs = document.querySelector('#curtainCurs');
        curtainCurs.remove();

    }

    window.addEventListener( 'mousemove', move_handler );
    window.addEventListener( 'mouseup', mouse_up_handler );


}