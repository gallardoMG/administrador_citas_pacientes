import Complete from "./containers/Complete/index";
import DataUser from "./containers/DataUser/index";
import DiseaseInfo from "./containers/DiseaseInfo";
import Schedule from "./containers/Schedule/index";
import Login from "./containers/Login/index";
import { SelectView } from './stateManagement/selectors/selectors';
import Steps from "./containers/Steps";
import { LOGIN_VIEW, COMPLETE_VIEW, SCHEDULE_VIEW, DISEASE_VIEW, DATA_VIEW } from './utils/constants'
import { MainWrapper } from "./AppElements";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser, setId, updateView } from "./stateManagement/actions/actions";

function App() {
  const currentView = SelectView();
  const dispatch = useDispatch()
  const showStep = () => (currentView === DATA_VIEW || currentView === DISEASE_VIEW || currentView === SCHEDULE_VIEW) ? true : false;
  useEffect(() => {
    const currentUserReducer = localStorage.getItem('currentUserReducer');
    const viewReducer = localStorage.getItem('viewReducer');
    const currentInfoSchedule = localStorage.getItem('currentInfoSchedule');
    if (currentUserReducer !== null && viewReducer !== null && currentInfoSchedule !== null) {
      dispatch(currentUser(JSON.parse(currentUserReducer)));
      dispatch(updateView(JSON.parse(viewReducer).view));
      dispatch(setId(JSON.parse(currentInfoSchedule).id))
    }
  }, [])
  return (
    <MainWrapper>
      {showStep() && <Steps />}
      {currentView === LOGIN_VIEW && <Login />}
      {currentView === DATA_VIEW && <DataUser />}
      {currentView === DISEASE_VIEW && <DiseaseInfo />}
      {currentView === SCHEDULE_VIEW && <Schedule />}
      {currentView === COMPLETE_VIEW && <Complete />}
    </MainWrapper>
  );
}

export default App;
