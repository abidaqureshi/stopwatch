import React from 'react';
import { StyledButton, StyledCirCleButton } from './Button.style';

interface IButtonProps {
  height: string;
  width: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  color?: string;
  onClickHandler(event: React.MouseEvent<HTMLElement>): void;
}

const IButton: React.FC<IButtonProps> = ({ height, width, onClickHandler, children, ...props }) => {
  return (
    <StyledButton height={height} width={width} onClick={onClickHandler} {...props}>
      {children}
    </StyledButton>
  );
};

const IRoundButton: React.FC<IButtonProps> = ({ height, width, onClickHandler, children, ...props }) => {
  return (
    <StyledCirCleButton height={height} width={width} onClick={onClickHandler} {...props}>
      {children}
    </StyledCirCleButton>
  );
};

export { IButton, IRoundButton };
