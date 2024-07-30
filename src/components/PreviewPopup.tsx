import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
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
  const [openLoader, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleReportTypeEvent = (data: string) => {
      setReportTypePrinted(data);
    };
    eventBus.on('reportTypeEvent', handleReportTypeEvent);
    eventBus.on('showLoader', (trigger: boolean) => {
      setOpen(trigger);
    });
    return () => {
      eventBus.off('reportTypeEvent', handleReportTypeEvent);
      eventBus.off('showLoader', (trigger: boolean) => {
        setOpen(trigger);
      });
    };
  }, [setOpen, reportTypePrinted]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      id="preview-popup"
    >
      <Backdrop
        sx={{ color: '#AC4888', zIndex: (theme) => theme.zIndex.drawer + 50 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

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
      {reportTypePrinted === 'thematic' && (
        <ThematicReport thematicReportData={rowData} />
      )}
      {reportTypePrinted === 'subject' && (
        <SubjectReport subjectReportData={rowData} />
      )}
    </Dialog>
  );
}

export default MyDialog;