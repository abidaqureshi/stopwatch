import styled from 'styled-components';

interface IStyleButtonProps {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  width: string;
  height: string;
}

export const StyledButton = styled.button`
  height: ${(props: IStyleButtonProps) => props.height}px;
  font-size: ${(props: IStyleButtonProps) => (props.fontSize ? props.fontSize : '12')}px;
  font-weight: ${(props: IStyleButtonProps) => (props.fontWeight ? props.fontWeight : 'normal')};
  margin: 10px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
  width: ${(props: IStyleButtonProps) => props.width}px;
  background: ${(props: IStyleButtonProps) => (props.backgroundColor ? props.backgroundColor : '#FFFFFF')};
  color: ${(props: IStyleButtonProps) => (props.color ? props.color : '')};
`;

export const StyledCirCleButton = styled.button`
  height: ${(props: IStyleButtonProps) => props.height}px;
  width: ${(props: IStyleButtonProps) => props.width}px;
  background: #ffffff;
  border-radius: 25px;
`;
