
// import { key_down_alt_handler } from './key_down_alt_handler.js';

function key_up_alt(){
    let curtain = document.getElementById( 'grabCurtain' );
    curtain.style.display = 'none';

    document.onmousedown = null;
    document.onmouseup = null;

    // document.removeEventListener( 'mousemove', mouse_move );
}

const key_down_alt_handler = ( e ) => {


    if( e.key === 'Alt' ){

        let curtain = document.getElementById( 'grabCurtain' );
        curtain.style.display = 'block';

        let start_y = 0;
        let scrollTop = 0

        function mouse_move( ev ){
            let list = document.querySelector( '.PR_PlayReportList' );
            list.scrollTop = scrollTop + start_y - ev.clientY;
        }

        function mouse_down( ev ){
            let elem = document.getElementById( 'grabCurtain' );
            elem.className = 'mouseDown';
            start_y = ev.clientY;
            let list = document.querySelector( '.PR_PlayReportList' );
            scrollTop = list.scrollTop;
            // document.addEventListener( 'mousemove', mouse_move );
            document.onmousemove = mouse_move;

        }

        function mouse_up( ev ){
            let elem = document.getElementById( 'grabCurtain' );
            elem.className = '';
            // document.removeEventListener( 'mousemove', mouse_move );
            document.onmousemove = null;

        }

        // document.addEventListener( 'mousedown', mouse_down );

        document.onmousedown = mouse_down;
        document.onmouseup = mouse_up;



        // document.addEventListener( 'mouseup', mouse_up );

        document.addEventListener( 'keyup', key_up_alt );


    }


    
}

export const add_event_key_down_alt = () => {

    // document.onkeydown = key_down_alt_handler;

    document.addEventListener( 'keydown', key_down_alt_handler );

    document.onkeyup = () => {
        let curtain = document.getElementById( 'grabCurtain' );
        curtain.style.display = 'none';
        document.onmousedown = null;
        document.onmouseup = null;
        document.onmousemove = null;

    };




};