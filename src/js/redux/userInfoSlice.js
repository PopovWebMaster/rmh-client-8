import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({

    name: 'userInfo',

    initialState: {

        isAuth: false,

        user_id: '',
        user_name: '',
        user_email: '',
        user_position: '',
        user_company: '',
        user_accessRights: [],

    },

    reducers: {

        setUserData: ( state, action ) => {

            if( action.payload !== null ){
                let {
                    isAuth,
                    email,
                    id,
                    name,
                    position,
                    company,
                    accessRights,
                } = action.payload;

                state.isAuth =              isAuth;
                state.user_id =             id;
                state.user_name =           name;
                state.user_email =          email;
                state.user_position =       position;
                state.user_company =        company;
                state.user_accessRights =   accessRights;

            };

        },
        

    },

})

export const {  
    // setFileExtension,
    setUserData,
   

} = userInfoSlice.actions;





export const selectorData = ( state ) => {
    return {
        isAuth:             state.userInfo.isAuth,
        user_id:            state.userInfo.user_id,
        user_name:          state.userInfo.user_name,
        user_email:         state.userInfo.user_email,
        user_position:      state.userInfo.user_position,
        user_company:       state.userInfo.user_company,
        user_accessRights:  state.userInfo.user_accessRights,


    };
};

export default userInfoSlice.reducer;






