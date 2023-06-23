import React from 'react';
import styled from 'styled-components';
type Props = {
  id: string;
  options: option[];
};
interface option {
  value: string;
  name: string;
}
const SelectBox = (props: Props) => {
  return (
    <select size={1}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
