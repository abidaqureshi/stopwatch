import React from 'react';
import { IButton } from '../Button';

interface ISpeedButtonsProps {
  width: string;
  height: string;
  selectedSpeed: number;
  onClickHandler(n: number): void;
}

const SpeedButtons = ({ width, height, selectedSpeed, onClickHandler }: ISpeedButtonsProps): JSX.Element => {
  return (
    <>
      <IButton
        fontWeight='bold'
        fontSize='24'
        color={selectedSpeed === 1000 ? '#FFFFFF' : '#000000'}
        backgroundColor={selectedSpeed === 1000 ? '#000000' : '#FFFFFF'}
        height={height}
        width={width}
        onClickHandler={() => onClickHandler(1000)}
      >
        1x
      </IButton>

      <IButton
        fontWeight='bold'
        fontSize='24'
        color={selectedSpeed === 667 ? '#FFFFFF' : '#000000'}
        backgroundColor={selectedSpeed === 667 ? '#000000' : '#FFFFFF'}
        height={height}
        width={width}
        onClickHandler={() => onClickHandler(667)}
      >
        1.5x
      </IButton>
      <IButton
        fontWeight='bold'
        fontSize='24'
        color={selectedSpeed === 500 ? '#FFFFFF' : '#000000'}
        backgroundColor={selectedSpeed === 500 ? '#000000' : '#FFFFFF'}
        height={height}
        width={width}
        onClickHandler={() => onClickHandler(500)}
      >
        2x
      </IButton>
    </>
  );
};

export default SpeedButtons;
