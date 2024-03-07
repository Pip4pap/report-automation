import React, { useState } from "react";
import { Button, TextField, styled } from '@mui/material';

const CustomTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style
  },
  '& #validation-outlined-input-label': {
    color: '#E0E3E7'
  }
});

const UploadSheet: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  return (
    <div>
      <h4 className="font-light text-2xl mb-6">Upload excel sheet below</h4>
      <CustomTextField
        label="Upload File"
        type="file"
        InputLabelProps={{
          shrink: true
        }}
        onChange={handleFileChange}
        color="primary"
        required
        id="validation-outlined-input"
      />
      {
        selectedFile &&
        <p>
          <span className="text-xs">Selected file:</span> {selectedFile.name}
        </p>
      }
      <div className="mt-3">
        <Button variant="contained">Start Process</Button>
      </div>
    </div>
  );
};

export default UploadSheet;