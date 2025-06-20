

export const get_style_for_server_window = ( params ) => {
    let {
        location, // left right
        windowLeftWidth,
        windowRightWidth,
    } = params;

    let result = { width: '0%' };

    switch( location ){
        case 'left':
            result.width = windowLeftWidth + '%';
            break;

        case 'right':
            result.width = windowRightWidth + '%';
            break;

    };

    return result;

};