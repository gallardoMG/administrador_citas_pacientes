import { Input, Label, TextArea, Button, Text } from '../../components/index';
import {
  scheduleUpdate,
  updateView,
} from '../../stateManagement/actions/actions';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { Form } from './DiseaseInfoElements';
import {
  CurrentInfoSchedule,
  UserInfo,
} from '../../stateManagement/selectors/selectors';
import { SCHEDULE_VIEW } from '../../utils/constants';

const DisiaseInfo = () => {
  const dispatch = useDispatch();
  const idSchedule = CurrentInfoSchedule();
  const currentData = UserInfo().infoSchedule.filter(
    el => el.id === idSchedule.id
  );
  const disease = useRef(currentData[0].disease);
  const daysDisease = useRef(currentData[0].daysDisease);
  const currentInfoSchedule = CurrentInfoSchedule();
  const next = e => {
    e.preventDefault();
    const data = {
      daysDisease: daysDisease.current.defaultValue || daysDisease.current,
      disease: disease.current.defaultValue || disease.current,
    };
    dispatch(scheduleUpdate(currentInfoSchedule.id, data));
    dispatch(updateView(SCHEDULE_VIEW));
  };
  return (
    <Form onSubmit={e => next(e)}>
      <Text type='title'>Sintomas</Text>
      <Label type='describe'>
        Describenos los sintomas de tu enfermedad
        <TextArea
          ref={disease}
          defaultValue={disease.current}
          type='textarea'
          required
          onChange={e => (disease.current = e.target.value)}
        />
      </Label>
      <Label type='describe' s>
        ¿Cuantos días llevas con esos sintomas?
        <Input
          ref={daysDisease}
          defaultValue={daysDisease.current}
          type='number'
          min='1'
          required
          onChange={e => (daysDisease.current = e.target.value)}
        />
      </Label>
      <Button type='submit'>SIGUIENTE</Button>
    </Form>
  );
};

export default DisiaseInfo;
