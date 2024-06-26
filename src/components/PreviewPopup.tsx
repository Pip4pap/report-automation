import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import '../styles/Report.css';
import ThematicReport from './ThematicReport';
import SubjectReport from './SubjectReport';
import eventBus from '../utils/eventBus';

interface MyDialogProps {
  open: boolean;
  onClose: () => void;
  rowData: any;
}

const MyDialog: React.FC<MyDialogProps> = ({ open, onClose, rowData }) => {
  const [reportTypePrinted, setReportTypePrinted] = useState<String | null>('');

  useEffect(() => {
    const handleReportTypeEvent = (data: string) => {
      setReportTypePrinted(data);
      console.warn("popup answer", data);
    };
    eventBus.on('reportTypeEvent', handleReportTypeEvent);
  }, []);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      id="preview-popup"
    >
      <IconButton
        onClick={onClose}
        aria-label="close"
        sx={{
          position: 'absolute',
          right: 8,
          top: 1,
          color: (theme) => theme.palette.grey[700],
        }}
      >
        <CloseIcon />
      </IconButton>
      
    </Dialog>
  );
}

export default MyDialog;