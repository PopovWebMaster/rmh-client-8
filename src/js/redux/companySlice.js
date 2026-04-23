
import { createSlice } from '@reduxjs/toolkit';

export const companySlice = createSlice({

    name: 'company',

    initialState: {
        // currentCompanyAlias: '1-resp',
        // currentCompanyName: 'Первый республиканский',
        // currentCompanyType: 'tv',

        currentCompanyAlias: null,
        currentCompanyName: null,
        currentCompanyType: null,
        companyProgramSystem: null,
        companyLegalName: '',

        colontitul: 'Приложение 1 к Договору №_01-61/02 от 14.01.2025  на оказание услуг (выполнения работ) в сфере телевещания',
        executor:   'ГУП ДНР  "РМХ"',
        price: 28,
        pricePrime: 36,
        footerText: '* ГУП ДНР "РМХ" оставляет за собой право, в случае невозможности размещения рекламной продукции заказчика в указаннное время (форс-мажорные обстоятельства), предоставить клиенту эквивалентные по обьему и срокам позиции.',

        companyList: [],


    },

    reducers: {

        setCurrentCompanyAlias: ( state, action ) => {
            state.currentCompanyAlias =  action.payload;
        },

        setCurrentCompanyName: ( state, action ) => {
            state.currentCompanyName =  action.payload;
        },

        setCompanyList: ( state, action ) => {
            state.companyList =  action.payload;
        },

        setCurrentCompanyType: ( state, action ) => {
            state.currentCompanyType =  action.payload;
        },

        setCompanyProgramSystem: ( state, action ) => {
            state.companyProgramSystem =  action.payload;
        },

        
        setCompanyLegalName: ( state, action ) => {
            state.companyLegalName =  action.payload;
        },
        
        
        
        
        
    },

})

export const {  
    setCurrentCompanyAlias,
    setCurrentCompanyName,
    setCompanyList,
    setCurrentCompanyType,
    setCompanyProgramSystem,
    setCompanyLegalName,
   

} = companySlice.actions;

export const selectorData = ( state ) => {
    return {
        currentCompanyAlias:        state.company.currentCompanyAlias,
        currentCompanyName:         state.company.currentCompanyName,
        companyList:                state.company.companyList,

        currentCompanyType:         state.company.currentCompanyType,
        companyProgramSystem:       state.company.companyProgramSystem,
        companyLegalName:           state.company.companyLegalName,

        colontitul:                 state.company.colontitul,
        executor:                   state.company.executor,
        price:                      state.company.price,
        pricePrime:                 state.company.pricePrime,
        footerText:                 state.company.footerText,


        
        

        


    };
};

export default companySlice.reducer;






