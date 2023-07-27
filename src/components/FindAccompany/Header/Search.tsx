import styled from 'styled-components';
type Props = {};

const Search = (props: Props) => {
  return (
    <SearchBar>
      <SearchText>검색</SearchText>
      <SearchInput />
    </SearchBar>
  );
};
const SearchBar = styled.div`
  width: 226px;
  height: 29px;
  background-color: #eeeeee;
  border: none;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 25px;
`;
const SearchText = styled.p`
  font-size: 12px;
  font-weight: bold;
`;
const SearchInput = styled.input`
  width: 170px;
  height: 29px;
  background-color: #eeeeee;
  border: none;
  border-radius: 12px;
  padding: 3px 5px;
`;
export default Search;
