import React, { useState, useEffect } from "react";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import {
  TextField,
  styled,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  IconButton
} from '@mui/material';
import eventBus from "../utils/eventBus";
import Button from '@mui/material/Button';

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

const StyledButton = styled(Button)({
  backgroundColor: '#AC4888',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#922a71',
  },
});

interface UploadSheetProps {
  onFileChange: (file: File) => void;
}

const UploadSheet: React.FC<UploadSheetProps> = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedReportType, setSelectedReportType] = useState<String | null>('thematic');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      eventBus.emit('reportTypeEvent', 'thematic');
    }
  }, [mounted]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedReportType((prevState) => {
      eventBus.emit('reportTypeEvent', event.target.value);
      setSelectedFile(null);
      return event.target.value;
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      onFileChange(files[0])
    }
  };

  const resetData = () => {
    eventBus.emit('reportTypeEvent', "thematic");
    setSelectedFile(null);
  };

  return (
    <div>
      {/* Report Type */}
      <div className="my-6">
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
          >
            <IconButton aria-label="one" style={{ color: '#AC4888' }}>
              <LooksOneIcon style={{ 'fontSize': '40px' }} />
            </IconButton>
            <span style={{ color: '#AC4888' }} className="text-xl">
              Report Type
            </span>
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

      {/* Upload sheet */}
      <div style={{ color: '#AC4888' }} className="mt-12 mb-6">
        <IconButton aria-label="two" style={{ color: '#AC4888' }}>
          <LooksTwoIcon style={{ 'fontSize': '40px' }} />
        </IconButton>
        <span className="text-2xl">Upload excel sheet below</span>
      </div>
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

      <div className="mt-12">
        <StyledButton variant="contained" onClick={resetData}>
          Clear
        </StyledButton>
      </div>
    </div>
  );
};

export default UploadSheet;