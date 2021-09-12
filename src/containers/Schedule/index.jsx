import React from 'react';
import { Input, Label, Button, Text } from '../../components/index';
import { Form } from './ScheduleElements';
import {
  CurrentInfoSchedule,
  UserInfo,
} from '../../stateManagement/selectors/selectors';
import { scheduleUpdate } from '../../stateManagement/actions/actions';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { updateUser } from '../../stateManagement/actions';

const Schedule = () => {
  const currentInfoSchedule = CurrentInfoSchedule();
  const currentData = UserInfo().infoSchedule.filter(
    el => el.id === currentInfoSchedule.id
  );
  const date = useRef(currentData[0].date);
  const time = useRef(currentData[0].time);
  const dispatch = useDispatch();
  const next = e => {
    e.preventDefault();
    const data = {
      date: date.current.defaultValue || date.current,
      time: time.current.defaultValue || time.current,
    };
    dispatch(scheduleUpdate(currentInfoSchedule.id, data));
    dispatch(updateUser());
  };
  const currentDate = year => {
    const now = new Date();
    const day = ('0' + now.getDate()).slice(-2);
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const today = now.getFullYear() + year + '-' + month + '-' + day;
    return today;
  };
  const currentHour = hours => {
    const now = new Date();
    const hour = ('0' + (now.getHours() + hours)).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    if (parseInt(hour) > 8) return `${hour}:${minutes}`;
    else if (parseInt(hour) < 8) return '09:00';
  };
  return (
    <Form onSubmit={e => next(e)}>
      <Text type='title'>Agenda tu cita</Text>
      <Label>
        <Text> Elige una fecha</Text>
        <Input
          ref={date}
          defaultValue={date.current}
          type='date'
          required
          min={currentDate(0)}
          max={currentDate(1)}
          onChange={e => (date.current = e.target.value)}
        />
      </Label>
      <Label>
        <Text>Elige una hora</Text>
        <Input
          type='time'
          defaultValue={time.current}
          min={currentHour(1)}
          max='23:00'
          required
          onChange={e => (time.current = e.target.value)}
        />
      </Label>
      <Button type='submit'>SIGUIENTE</Button>
    </Form>
  );
};
export default Schedule;
