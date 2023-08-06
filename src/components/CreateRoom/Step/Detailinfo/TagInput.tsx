import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Tagify from '@yaireo/tagify';

type Props = {};

const TagInput: React.FC<Props> = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const tagifyRef = useRef<Tagify | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      const tagifySettings = {
        placeholder: '태그를 입력해주세요.(ex. #자유관광)',
        // Add any other settings you want to use
      };

      tagifyRef.current = new Tagify(inputRef.current, tagifySettings);
    }

    return () => {
      if (tagifyRef.current) {
        tagifyRef.current.destroy();
      }
    };
  }, []);

  return (

      <StyledInput>
        <input
          ref={inputRef}
          name="tags"
          placeholder="태그를 입력해주세요.(ex. #자유관광)"
        />
      </StyledInput>
  );
};

export default TagInput;


const StyledInput = styled.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 300px;
    padding: 10px;
    font-size: 16px;
  }
`;
