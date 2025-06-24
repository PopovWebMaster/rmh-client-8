


export const add_curtain_to_body = () => {
    let body  = document.querySelector( 'body' );
    let curtain = document.createElement( 'div' );
    curtain.id = 'curtain_time';

    body.append( curtain );
    
}