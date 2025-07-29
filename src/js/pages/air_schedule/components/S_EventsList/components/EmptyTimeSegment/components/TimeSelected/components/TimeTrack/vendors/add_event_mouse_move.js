


export const add_event_mouse_move = ( setDataHandler, onlyCkickHandler ) => {

    let curtain = document.getElementById( 'curtain_time' );

    let was_movement = false;

    
    curtain.onmousemove = ( e ) => {
        setDataHandler( e.x );
        was_movement = true;

    }

    curtain.onmouseleave = () => {
        curtain.onmouseleave = null;
        curtain.onmousemove = null;
        curtain.onmouseup = null;
        curtain.remove();

        if( was_movement ){

        }else{
            onlyCkickHandler();
        };
        
        was_movement = false;
    }

    curtain.onmouseup = () => {
        curtain.onmouseleave = null;
        curtain.onmousemove = null;
        curtain.onmouseup = null;
        curtain.remove();

        if( was_movement ){

        }else{
            onlyCkickHandler();
        };
        
        was_movement = false;
    }






}