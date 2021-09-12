import { useSelector } from "react-redux";

export const SelectView = () => useSelector(state => state.viewReducer.view);

export const UserInfo = () => useSelector(state => state.currentUserReducer)

export const CurrentInfoSchedule = () => useSelector(state => state.currentInfoSchedule);


