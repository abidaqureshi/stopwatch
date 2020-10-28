import React, { useEffect, useCallback, useReducer, useRef } from 'react';
import { PauseCircleOutlined } from '@ant-design/icons';
import initialState from '../../reducer/initialState';
import timerReducer from '../../reducer';

import { ContentWrapper, ContentWrapperColumn } from '../ContentWrapper';
import { LabeledInput } from '../Input/input';
import { IButton, IRoundButton } from '../Buttons/Button';
import SpeedButtons from '../Buttons/SpeedButtons';
import Notification from '../Notification/index';
import DigitalDisplay from '../DigitalDisplay/index';

const Timer = (): JSX.Element => {
  const [timer, dispatch] = useReducer(timerReducer, initialState);
  const { stop, start, minutes, pause, displayMinutes, displaySeconds, timesUp, speed } = timer;

  const secondsPerMinute = 60;
  const refCount = useRef(0);

  const startTimer = useCallback(() => {
    const { speed } = timer;

    // tslint:disable-next-line:no-unnecessary-local-variable
    const intervalRef = setInterval(() => {
      refCount.current += 1;
      dispatch({
        type: 'TIMER_DECREMENT',
        payload: 1,
      });
    }, speed);

    return intervalRef;
  }, [timer]);

  const endTimer = useCallback((intervalRef: number) => {
    clearImmediate(intervalRef);
    refCount.current = 0;
    dispatch({
      type: 'TIMER_UPDATE',
      payload: {
        ...timer,
        start: false,
        stop: true,
        timesUp: true,
      },
    });
  }, []);

  const seepMeUp = useCallback(
    (s: number) => {
      dispatch({
        type: 'TIMER_UPDATE',
        payload: {
          ...timer,
          speed: s,
        },
      });
    },
    [timer],
  );

  const inputHandler = useCallback(
    minutes => {
      const min: number = minutes;
      dispatch({
        type: 'TIMER_UPDATE',
        payload: {
          ...initialState,
          minutes: min,
          displayMinutes: min >= 1 ? min - 1 : 0,
          displaySeconds: min < 1 ? min * secondsPerMinute : secondsPerMinute,
        },
      });
    },
    [dispatch],
  );

  const startTimerHandler = () => {
    if (!refCount.current && minutes) {
      dispatch({
        type: 'TIMER_UPDATE',
        payload: {
          ...timer,
          start: true,
          stop: false,
        },
      });
      return;
    }

    if (!start && pause) {
      dispatch({
        type: 'TIMER_UPDATE',
        payload: {
          ...timer,
          start: true,
          stop: false,
          pause: false,
        },
      });
    }
  };

  const pauseTimerHandler = () => {
    dispatch({
      type: 'TIMER_UPDATE',
      payload: {
        ...timer,
        stop: true,
        start: false,
        pause: true,
      },
    });
  };

  useEffect(() => {
    let intervalRef = 0;
    if (start) {
      intervalRef = startTimer();
    }

    if (pause) {
      clearImmediate(intervalRef);
    }

    if (refCount.current === minutes * secondsPerMinute && minutes > 0) {
      endTimer(intervalRef);
    }

    if (displaySeconds === 0 && displayMinutes !== 0) {
      dispatch({
        type: 'TIMER_UPDATE',
        payload: {
          ...timer,
          displayMinutes: displayMinutes - 1,
          displaySeconds: secondsPerMinute,
        },
      });
    }

    return () => clearInterval(intervalRef);
  }, [start, displaySeconds, displayMinutes, minutes, pause, startTimer]);

  return (
    <>
      <ContentWrapper>
        <ContentWrapperColumn>
          <LabeledInput placeholder='min' type='number' onChangeHandler={inputHandler} label='Countdown' />
        </ContentWrapperColumn>
        <ContentWrapperColumn width='120'>
          {stop && (
            <IButton onClickHandler={startTimerHandler} height='51' width='100' fontSize='18' backgroundColor='#006400' color='#ffffff'>
              Start
            </IButton>
          )}
        </ContentWrapperColumn>
      </ContentWrapper>
      <ContentWrapper>
        <Notification currentSeconds={refCount.current} isPause={pause} seconds={minutes * secondsPerMinute} timesUp={timesUp} />
      </ContentWrapper>
      <ContentWrapper>
        <ContentWrapperColumn>
          <DigitalDisplay
            currentSeconds={refCount.current}
            seconds={minutes * secondsPerMinute}
            displayMinutes={displayMinutes}
            displaySeconds={displaySeconds}
          />
        </ContentWrapperColumn>
        <ContentWrapperColumn width='50'>
          {start && (
            <IRoundButton height='51' width='48' onClickHandler={pauseTimerHandler}>
              <PauseCircleOutlined />
            </IRoundButton>
          )}
        </ContentWrapperColumn>
      </ContentWrapper>
      <ContentWrapper>
        <SpeedButtons width='100' height='50' selectedSpeed={speed} onClickHandler={seepMeUp} />
      </ContentWrapper>
    </>
  );
};

export default Timer;
