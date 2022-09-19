import { createSlice } from '@reduxjs/toolkit'
import { getHeartHistory } from './hearthistory-thunkActions'

const hearthistorySlice = createSlice({
  name: 'heart',
  initialState: {
    history: [
      {
        // heartid: undefined, //heartHistoryId
        // heartdate: undefined, //regDate
        // heartopponent: undefined, //from
        // heartaction: undefined, //route
        // heartamount: undefined,  //cnd
        /////////////////////////////////////////////////////////
        heartHistoryId: undefined,
        cnt: undefined,
        from: undefined,
        to: undefined,
        name: undefined,
        route: undefined,
        regDate: undefined,
      },
    ],
    isError: undefined,
    message: undefined,
  },
  extraReducers: {
    [getHeartHistory.pending]: () => {
      return
    },
    [getHeartHistory.fulfilled]: (state, { payload }) => {
      const historyItems = payload.data.map(item => ({
        heartHistoryId: item.heartHistoryId,
        cnt: item.cnt,
        name: item.name,
        route: item.route,
        regDate: item.regDate,
        from: item.from.nickname,
        to: item.to.nickname,
      }))
      state.history = historyItems
    },
    [getHeartHistory.rejected]: (state, { payload }) => {
      state.isError = true
      state.message = payload.message
    },
  },
})

export const heartActions = hearthistorySlice.actions
export default hearthistorySlice
