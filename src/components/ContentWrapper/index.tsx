import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 24px;
`;

const StyledControlContainerRow = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapper: React.FC = ({ children }) => (
  <StyledContainer>
    <StyledControlContainerRow>{children}</StyledControlContainerRow>
  </StyledContainer>
);

interface IStyledContainerColumnProp {
  width?: string;
}

const StyledControlContainerColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${(props: IStyledContainerColumnProp) => (props.width ? `${props.width}px` : 'auto')};
`;

const ContentWrapperColumn: React.FC<IStyledContainerColumnProp> = ({ width, children }) => (
  <StyledControlContainerColumn width={width}>{children}</StyledControlContainerColumn>
);

interface IDisplayProps {
  fontSize?: string;
  margin?: string;
  color?: string;
}

const StyledDigitalTimer = styled.div`
  margin: ${(props: IDisplayProps) => (props.margin ? props.margin : 20)}px;
  font-size: ${(props: IDisplayProps) => (props.fontSize ? props.fontSize : 54)}px;
  color: ${(props: IDisplayProps) => (props.color ? props.color : '#000000')};
  width: 200px;
  text-align: center;
`;

const BlinkerAnimateFrames = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.7;
    }

    100% {
        opacity: 0;
    }
`;

const Blinker = styled.div`
  animation: ${BlinkerAnimateFrames} 1.5s linear infinite;
`;

interface IDigitalWrapperProps extends IDisplayProps {
  isBlinkerActive: boolean;
}

const DigitalWrapper: React.FC<IDigitalWrapperProps> = ({ color, fontSize, margin, isBlinkerActive, children }) => (
  <StyledDigitalTimer color={color} fontSize={fontSize} margin={margin}>
    {isBlinkerActive ? <Blinker>{children}</Blinker> : children}
  </StyledDigitalTimer>
);

export { ContentWrapper, DigitalWrapper, ContentWrapperColumn };
