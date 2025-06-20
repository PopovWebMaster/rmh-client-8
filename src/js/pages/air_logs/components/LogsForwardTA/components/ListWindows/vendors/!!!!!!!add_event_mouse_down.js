


export const add_event_mouse_down = ( e, windowRef, leftRef, rightRef, centerRef  ) => {

    var { x, width } = e.target.getBoundingClientRect();
    
    let click_error_rate =  ( e.screenX - x ) - ( width /2 );

    let windowRect = windowRef.current.getBoundingClientRect();

    let centerRect = centerRef.current.getBoundingClientRect();

    let body = document.querySelector( 'body' );
    let { fontSize } = window.getComputedStyle( body );

    let font_size_px = parseFloat(fontSize);
 
    let  mouseMoveEvent = ( event ) => {

        let cursor_x = event.x;

        let left_width_px = cursor_x - windowRect.left - click_error_rate;
        let right_width_px = windowRect.width - left_width_px;

        let left_width_proc = Math.round(( left_width_px * 100 ) / windowRect.width );
        let right_width_proc = 100 - left_width_proc;


        

        if( left_width_proc  > 20 && right_width_proc > 20 ){

            leftRef.current.style.width = `${left_width_proc}%`;
            rightRef.current.style.width = `${right_width_proc}%`;
            // centerRef.current.style.left = `calc( ${left_width_proc}% - ${(( centerRect.width/parseFloat(fontSize) + 1/parseFloat(fontSize) )/2 )}em )`;
            centerRef.current.style.left = `calc( ${left_width_proc}% - ${centerRect.width/2}px )`;

        }

    }

    

    function mouseUpEvent(){

        window.removeEventListener( 'mousemove', mouseMoveEvent );
        window.removeEventListener( 'mouseup', mouseUpEvent );

    }

    window.addEventListener( 'mousemove', mouseMoveEvent );
    window.addEventListener( 'mouseup', mouseUpEvent );


}