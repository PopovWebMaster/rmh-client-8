

import { LayoutDragEventClass } from './../../../../../../../classes/LayoutDragEventClass/LayoutDragEventClass.js';
import { DRAG_START } from './../../../../../../../config/layout.js';

export const drag_start_for_new_event = ( eventId ) => {

    let LayoutDragEvent = new LayoutDragEventClass();
    LayoutDragEvent.SetStartFrom( DRAG_START.NEW_EVENT );
    LayoutDragEvent.SetEvent( eventId );

    LayoutDragEvent.SetToStore();

}