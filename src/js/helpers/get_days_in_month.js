



export const get_days_in_month = ( year, month ) => {
    return new Date(year, month, 0).getDate();
};