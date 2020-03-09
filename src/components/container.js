import React from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 42rem;
`

const Container = ({children}) => {
  return (
    <ContainerBox>
      {children}
    </ContainerBox>
  );
}
 
export default Container;