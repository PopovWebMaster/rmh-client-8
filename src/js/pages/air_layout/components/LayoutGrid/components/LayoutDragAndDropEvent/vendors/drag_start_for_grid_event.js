
import { LayoutDragEventClass } from './../../../../../../../classes/LayoutDragEventClass/LayoutDragEventClass.js';
import { DRAG_START } from './../../../../../../../config/layout.js';

export const drag_start_for_grid_event = ( gridEventId ) => {

    let LayoutDragEvent = new LayoutDragEventClass();
    LayoutDragEvent.SetStartFrom( DRAG_START.GRID_EVENT );
    LayoutDragEvent.SetGridEvent( gridEventId );

    LayoutDragEvent.SetStartTimeLimit();
    LayoutDragEvent.SetToStore();





}