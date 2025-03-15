import { styled } from "styled-components";

export const Root = styled.div`
  width: 600px;
  margin: 40px;
`;

export const CsRoot = styled.div`
  width: 400px;
  margin: 40px;
`;

export const CsRootH = styled.div`
  width: 400px;
  margin: 40px;
  
  > .root-item {
    height: 300px;
  }
`;

export const RootItem = styled.div`
  margin: 40px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  box-shadow: 0px 0px 5px #00f;
`;

export const Item = styled.div`
  box-shadow: 0px 0px 5px #f00;
`;

export const Item1 = styled.div`
  background-color: #ffe26b;
  padding: 20px;
  color: white;
`;

export const Item2 = styled.div`
  background-color: #30803a;
  padding: 30px;
  color: white;
`;

export const Item2InlineBlock = styled.div`
  background-color: #30803a;
  padding: 30px;
  color: white;
  display: inline-block;
`;

export const Item3 = styled.div`
  background-color: #4174ff;
  padding: 10px 50px 20px;
  color: white;
`;

