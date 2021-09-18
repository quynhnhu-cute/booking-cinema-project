import { FETCH_SEAT_PLAN_FAIL, FETCH_SEAT_PLAN_REQUEST, FETCH_SEAT_PLAN_SUCCESS } from "./types"

const initialState = {
    seatPlan : [],
    loading: true,
    err: ''
}

const seatPlanReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_SEAT_PLAN_REQUEST:
        return { ...state, loading: true}
    case FETCH_SEAT_PLAN_SUCCESS:
        return { ...state, loading: false, seatPlan: payload}
    case FETCH_SEAT_PLAN_FAIL:
        return { ...state, loading: false, err: payload}

    default:
        return state
    }
}

export default seatPlanReducer
