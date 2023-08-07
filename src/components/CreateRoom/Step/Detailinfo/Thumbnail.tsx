import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';

type Props = {};

const Thumbnail = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <StyledInput>
      <label htmlFor="imageInput">
        <UploadBox>
          {selectedImage ? (
            <ImagePreview src={selectedImage} alt="Selected" />
          ) : (
            <>
              <CustomIcon />
              <DIV>대표 이미지 선택</DIV>
            </>
          )}
        </UploadBox>
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
    </StyledInput>
  );
};

export default Thumbnail;

const StyledInput = styled.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

const CustomIcon = styled(AiOutlinePlusCircle)`
  width: 40px;
  height: 40px;
  color: #ccc;
`;

const DIV = styled.div`
  margin-top: 10px;
  color: #ccc;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;
