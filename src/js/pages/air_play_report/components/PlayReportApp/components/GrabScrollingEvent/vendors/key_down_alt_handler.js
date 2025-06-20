

export const key_down_alt_handler = ( e ) => {

    function key_up_alt(){

    }

    if( e.key === 'Alt' ){

        // let curtain = document.getElementById( 'grabCurtain' );
        // curtain.style.display = 'block';

        let start_y = 0;
        let scrollTop = 0
        function mouse_move( ev ){
            let list = document.querySelector( '.PR_PlayReportList' );
            list.scrollTop =  start_y - ev.clientY;
        }

        function mouse_down( ev ){

            let elem = document.getElementById( 'grabCurtain' );
            elem.className = 'mouseDown';

            start_y = ev.clientY;

            let list = document.querySelector( '.PR_PlayReportList' );
            scrollTop = list.scrollTop;

            document.addEventListener( 'mousemove', mouse_move );

        }

        function mouse_up( ev ){
            let elem = document.getElementById( 'grabCurtain' );
            elem.className = '';

            document.removeEventListener( 'mousemove', mouse_move );


        }

        document.addEventListener( 'mousedown', mouse_down );
        document.addEventListener( 'mouseup', mouse_up );


        // console.dir( e.key );

    }

    
}