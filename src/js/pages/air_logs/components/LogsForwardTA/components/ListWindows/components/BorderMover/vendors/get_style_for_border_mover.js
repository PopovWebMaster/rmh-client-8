

export const get_style_for_border_mover = ( params ) => {
    let {
        position,
        windowLeftWidth,
        borderMoverWidtnPx,
    } = params;

    // let top = 0;

    // let header = document.querySelector( '.FTA_SingleServerWindow .FTA_SSWHeader' );
    // if( header ){
    //     let { height } = window.getComputedStyle( header );
    //     top = height;
    // };

    // let result = {
    //     width: borderMoverWidtnPx + 'px',
    //     left: `calc(${windowLeftWidth}% - ${borderMoverWidtnPx/2}px)`,
    //     top,
    // };

    let width = (borderMoverWidtnPx) + 'px';
    let top = 0;
    let left = `-${borderMoverWidtnPx/2}px`;
    let right = `-${borderMoverWidtnPx/2}px`;

    let result = {
        width,
        top,
    };

    if( position === 'left' ){
        result.left = left;
    }else{
        result.right = right;
    };

    // let result = {
    //     width: borderMoverWidtnPx + 'px',
    //     right: `-${borderMoverWidtnPx/2}px`,
    //     top: 0,
    // };

    return result;

}