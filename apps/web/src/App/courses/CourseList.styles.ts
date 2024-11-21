import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10vh 20vw 0;
  height: 100%;
`;

export const SearchInput = styled(Input)`
  margin-bottom: 16px;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;
