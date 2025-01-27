import styled from 'styled-components';

export const ContainerStarQuantity = styled.div`
  display: flex;
`;

export const ContainerStarMain = styled.div`
  /* display: flex; */
  margin-right: 1px;
  position: relative;
`;

interface ContainerStarProps {
  $fifthHalfStar: boolean;
  $fourthHalfStar: boolean;
  $thirdHalfStar: boolean;
  $secondHalfStar: boolean;
  $firstHalfStar: boolean;
  $allStarWithoutFill: boolean;
  $starIndex: number;
}

export const ContainerStar = styled.div<ContainerStarProps>`
  width: 100%;
  width: ${props => props.$starIndex === 4 && props.$fifthHalfStar === true && "50%"};

  width: ${props => (props.$starIndex === 3) && props.$fourthHalfStar === true && "50%"};
  width: ${props => props.$starIndex === 4 && (props.$fourthHalfStar === true || props.$thirdHalfStar === true || props.$secondHalfStar === true || props.$firstHalfStar === true) && "0%"};

  width: ${props => props.$starIndex === 2 && props.$thirdHalfStar === true && "50%"};
  width: ${props => props.$starIndex === 3 && (props.$thirdHalfStar === true || props.$secondHalfStar === true || props.$firstHalfStar === true) && "0%"};

  width: ${props => props.$starIndex === 1 && props.$secondHalfStar === true && "50%"};
  width: ${props => props.$starIndex === 2 && (props.$secondHalfStar === true || props.$firstHalfStar === true) && "0%"};

  width: ${props => props.$starIndex === 0 && props.$firstHalfStar === true && "50%"};

  width: ${props => (props.$starIndex === 1 || props.$starIndex === 2 || props.$starIndex === 3 || props.$starIndex === 4)
  && (props.$firstHalfStar === true || props.$allStarWithoutFill === true) && "0%"};

  width: ${props => props.$starIndex === 0 && props.$allStarWithoutFill === true && "0%"};

  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
`;
