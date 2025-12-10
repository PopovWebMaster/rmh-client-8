
import { WEEK_NAME } from './../.././../../../../../config/week.js';
import { MOUNTH_NAME } from './../.././../../../../../config/mounth.js';


export const get_first_excel_row = ( params ) => {
    let {
        currentDate,
        currentDayNum,
        currentMonth,
        currentYear,
        exportType,
    } = params;

    let title = 'Заголовок';
    if( exportType === 'schedule' ){
        title = 'Расписание';
    }else if( exportType === 'TV_program' ){
        title = 'Телепрограмма';
    };

    let value = `${title} ${currentDate} ${ MOUNTH_NAME[ currentMonth ] } ${currentYear} ${WEEK_NAME[ currentDayNum ]}`

    return [
        { 
            v: value, 
            t: "s", 
            s: { 
                font: { 
                    name: "Arial", 
                    sz: 14,
                    italic: false,
                    bold: true,
                },
                alignment: {
                    horizontal: 'left',
                    vertical: 'center',
                } 
            } 
        },
    ];

}