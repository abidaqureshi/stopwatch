import React from 'react';
import { DigitalWrapper } from '../ContentWrapper';

interface IDigitalDisplayProps {
  displayMinutes: number;
  displaySeconds: number;
  currentSeconds: number;
  seconds: number;
}

const DigitalDisplay = ({ displayMinutes, displaySeconds, currentSeconds, seconds }: IDigitalDisplayProps): JSX.Element => {
  const secondsLeft = seconds - currentSeconds;

  return (
    <DigitalWrapper
      color={secondsLeft > 0 && secondsLeft <= 20 ? '#FF0000' : '#000000'}
      isBlinkerActive={secondsLeft > 0 && secondsLeft <= 10}
    >
      <span>{displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes}</span>
      <span>{displaySeconds >= 0 && displaySeconds < 10 ? `:0${displaySeconds}` : `:${displaySeconds}`}</span>
    </DigitalWrapper>
  );
};

export default DigitalDisplay;
