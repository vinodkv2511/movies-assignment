import reducer from './homeReducer'
import consts, { action_constants } from '../../constants'

describe('home reducer', () => {
    it('Should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                activeTab: consts.tabs.POPULAR,
            }
        )
    })

    it("Should handle CHANGE_TAB", () => {
        expect(reducer(undefined, {
            type: action_constants.CHANGE_TAB,
            payload: consts.tabs.TRENDING
        })
        ).toEqual({
            activeTab: consts.tabs.TRENDING
        })
    })

})

