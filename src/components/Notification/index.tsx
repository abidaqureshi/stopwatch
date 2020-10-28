import React from 'react';
import styled from 'styled-components';

const StyledNotification = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-style: italic;
  font-size: 20px;
  min-height: 3rem;
`;

interface INotificationProps {
  currentSeconds: number;
  seconds: number;
  timesUp: boolean;
  isPause: boolean;
}

const Notification: React.FC<INotificationProps> = ({ currentSeconds, isPause, seconds, timesUp }) => {
  const halfWay = seconds / currentSeconds;

  return (
    <StyledNotification>
      {halfWay === 2 ? 'More than halfway there!' : ''}
      {isPause ? 'Pause' : ''}
      {timesUp ? 'Times up!' : ''}
    </StyledNotification>
  );
};

export default Notification;
