import React, { useState } from "react";
import { TextField, styled, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

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

interface UploadSheetProps {
  onFileChange: (file: File) => void;
}

const UploadSheet: React.FC<UploadSheetProps> = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedReportType, setSelectedReportType] = useState('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedReportType(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      onFileChange(files[0])
    }
  };

  return (
    <div>
      <h4 className="font-light text-2xl mb-6">
        Upload excel sheet below
      </h4>
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
        inputProps={{ accept: '.xlsx, .xls, .csv'}}
      />
      {
        selectedFile &&
        <p className="text-gray-200">
          <span className="text-xs">Selected file:</span> {selectedFile.name}
        </p>
      }
      <div className="mt-6">
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
          >
            <span style={{ color: '#AC4888' }} className="text-xl">Report Type</span>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="thematic"
            name="radio-buttons-group"
            value={selectedReportType}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="thematic" control={<Radio />} label="Thematic (Lower primary)" />
            <FormControlLabel value="subject" control={<Radio />} label="Subject (Upper primary)" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default UploadSheet;