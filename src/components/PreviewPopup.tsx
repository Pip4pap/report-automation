import React from 'react';
import Dialog from '@mui/material/Dialog';

interface MyDialogProps {
  open: boolean;
  onClose: () => void;
  rowData: any;
}

const MyDialog: React.FC<MyDialogProps> = ({ open, onClose, rowData }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div>
        <h2>{rowData?.["First Name"]}</h2>
        <h2>{rowData?.["Last Name"]}</h2>
        <h2>{rowData?.Gender}</h2>
        <h2>{rowData?.Country}</h2>
        <h2>{rowData?.Age}</h2>
        <h2>{rowData?.Date}</h2>
        <h2>{rowData?.Id}</h2>
        <button onClick={onClose} className="mt-6">Close</button>
      </div>
    </Dialog>
  );
}

export default MyDialog;