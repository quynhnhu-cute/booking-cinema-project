import { movieApi } from "apis/movieApi";
import {
  CHOOSE_SEAT,
  FETCH_SEAT_PLAN_FAIL,
  FETCH_SEAT_PLAN_REQUEST,
  FETCH_SEAT_PLAN_SUCCESS,
} from "./types";

const actFetchSeatPlanRequest = () => ({
  type: FETCH_SEAT_PLAN_REQUEST,
});
const actFetchSeatPlanSuccess = (seatPlan) => ({
  type: FETCH_SEAT_PLAN_SUCCESS,
  payload: seatPlan,
});
const actFetchSeatPlanFail = (err) => ({
  type: FETCH_SEAT_PLAN_FAIL,
  payload: err,
});

//CallApi suất chiếu param showtimeId -> seatPlan []
export const actFetchSeatPlan = (showTimeId) => {
  return async (dispatch) => {
    dispatch(actFetchSeatPlanRequest());
    try{
    const { data } = await movieApi.fetchSeatPlanApi(showTimeId);
    dispatch(actFetchSeatPlanSuccess(data));
    }
    catch (err) {
    dispatch(actFetchSeatPlanFail(err))
    }
  };
};

//Chức năng đặt (chọn ghế)

export const actChooseSeat = (seat) => ({
  type: CHOOSE_SEAT,
  payload: seat,
})
