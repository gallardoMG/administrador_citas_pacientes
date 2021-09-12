import React from 'react';
import { SelectView } from '../../stateManagement/selectors/selectors';
import { DATA_VIEW, DISEASE_VIEW, SCHEDULE_VIEW } from '../../utils/constants';
import { WrapperSteps, Circle, Step } from './StepsElements';

const Steps = () => {
  const step = SelectView();
  const state = () => {
    if (step === SCHEDULE_VIEW) return 'active3';
    else if (step === DISEASE_VIEW || step === SCHEDULE_VIEW) return 'active2';
    else if (
      step === DATA_VIEW ||
      step === DISEASE_VIEW ||
      step === SCHEDULE_VIEW
    )
      return 'active1';
  };
  const state3 = () => (step === SCHEDULE_VIEW ? 'active' : 'desactive');

  const state2 = () =>
    step === DISEASE_VIEW || step === SCHEDULE_VIEW ? 'active' : 'desactive';
  const state1 = () =>
    step === DATA_VIEW || step === DISEASE_VIEW || step === SCHEDULE_VIEW
      ? 'active'
      : 'desactive';

  return (
    <WrapperSteps state={state()}>
      <Step number='1'>
        <Circle state={state1()}>1</Circle>
      </Step>
      <Step number='2'>
        <Circle state={state2()}>2</Circle>
      </Step>
      <Step number='3'>
        <Circle state={state3()}>3</Circle>
      </Step>
    </WrapperSteps>
  );
};

export default Steps;
