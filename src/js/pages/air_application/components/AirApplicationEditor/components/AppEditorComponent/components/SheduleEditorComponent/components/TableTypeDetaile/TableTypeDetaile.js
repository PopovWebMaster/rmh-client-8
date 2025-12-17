
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import './TableTypeDetaile.scss';

import { selectorData as currentSubApplicationSlise } from './../../../../../../../../../../redux/currentSubApplicationSlise.js';
import { ScrollContainer } from './../../../../../../../../../../components/ScrollContainer/ScrollContainer.js';


const TableTypeDetaileComponent = ( props ) => {

    let {
        isActive,
    } = props;






    return (
        <div className = 'SB_tableTypeDetaile'>

            <div className = 'SB_tableTypeDetaile_header'>

                <span>Раздел 1</span>
                <span>Раздел 2</span>
                <span>Раздел 3</span>
                <span>Раздел 4</span>
                <span>Раздел 5</span>
                <span>Раздел 6</span>
                <span>Раздел 7</span>
                <span>Раздел 8</span>
                <span>Раздел 9</span>
                <span>Раздел 10</span>
                <span>Раздел 12</span>
                <span>Раздел 13</span>
                <span>Раздел 14</span>
                <span>Раздел 15</span>
                <span>Раздел 16</span>
                <span>Раздел 17</span>
                <span>Раздел 18</span>
                <span>Раздел 19</span>
                <span>Раздел 20</span>
                <span>Раздел 21</span>
                <span>Раздел 22</span>
                <span>Раздел 23</span>
                <span>Раздел 24</span>
                <span>Раздел 25</span>
                <span>Раздел 26</span>
                <span>Раздел 27</span>
                <span>Раздел 28</span>
                <span>Раздел 29</span>
                <span>Раздел 30</span>


            </div>

            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>
            <p>111</p>
            <p>222</p>
            <p>333</p>
            <p>444</p>
            <p>555</p>
            <p>666</p>
            <p>777</p>
            <p>888</p>
            <p>999</p>
            <p>000</p>











        </div>
    )

};

export function TableTypeDetaile( props ){

    const currentSubApplication = useSelector( currentSubApplicationSlise );
    // const dispatch = useDispatch();

    return (
        <TableTypeDetaileComponent
            { ...props }

            modeMix = { currentSubApplication.modeMix }

            // setCategoryesIsChanged = { ( val ) => { dispatch( setCategoryesIsChanged( val ) ) } }


        />
    );


}
