import { action_constants } from '../constants'


const changeTab = (tabName)=>{
    return {
        type: action_constants.CHANGE_TAB,
        payload: tabName
    };
}

export { changeTab, }