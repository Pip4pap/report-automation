import React from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
import '../styles/Report.css';
import logo from '../images/logo.png';

interface MyDialogProps {
  open: boolean;
  onClose: () => void;
  rowData: any;
}

const MyDialog: React.FC<MyDialogProps> = ({ open, onClose, rowData }) => {
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
      <div id="report-display-outer-wrap">
        <div id="report-display-inner-wrap" className="flex flex-col items-center justify-center">
          {/* HEADER */}
          <section id="report-header" className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                width="100"
                height="119"
                alt="LAMPS badge"
                src={logo}
              />
            </div>
            <div style={{ paddingLeft: '50pt' }}>
              <h1 style={{ paddingTop: '2pt', textIndent: '0pt', lineHeight: '32pt', textAlign: 'left' }}>LWAGULA MEMORIAL</h1>
              <h2 style={{ textIndent: '0pt', lineHeight: '29pt', textAlign: 'left' }}>PRIMARY SCHOOL (LAMPS)</h2>
              <h4 style={{ paddingTop: '2pt', textIndent: '0pt', textAlign: 'left' }}>Box 12522, Kampala. Tel : 0755-406702, 0772-406702</h4>
              <p
                className="s1"
                style={{
                  paddingTop: '5pt',
                  textIndent: '0pt',
                  textAlign: 'left'
                }}>REPORT CARD FOR P1-P3 (THEMATIC CURRICULUM)</p>
            </div>
          </section>

          {/* FIRST INFORMATION */}
          <section className="mt-4 w-full">
            <div
              className="s2 flex justify-between"
              style={{
                paddingTop: '4pt',
                paddingLeft: '6pt',
              }}>
              TERM&nbsp;.............................................................
              <div className="flex">YEAR 20 ..............&nbsp;&nbsp;DATE.......................</div>
            </div>
            <p
              className="s2"
              style={{
                paddingTop: '6pt',
                paddingLeft: '6pt',
              }}
            >
              PUPIL’S NAMES................................................................................................
              CLASS........ ENROLMENT.........</p>
            <p style={{ textIndent: '0pt', textAlign: 'left' }} />
            <div
              className="s2 flex justify-between"
              style={{
                paddingTop: '6pt',
                paddingLeft: '6pt',
                lineHeight: '145%',
              }}>
              <div>AGE..........................................................................</div>
              <div>SEX..........................................................................</div>
            </div>
            <p
              className="s2 mb-1"
              style={{
                paddingTop: '6pt',
                paddingLeft: '6pt',
                textIndent: '0pt',
                lineHeight: '145%',
                textAlign: 'left'
              }}
            >LEARNER IDENTIFICATION NUMBER (LIN)
              .......................................................................................................</p>
          </section>

          {/* TABLE */}
          <table
            style={{ borderCollapse: 'collapse' }}
            cellSpacing="0"
            className="w-full"
          >
            <tbody>
              <tr style={{ height: '28pt' }}>
                <td
                  style={{
                    width: '21pt',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20'
                  }}>
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{
                    width: '101pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.5pt',
                    borderTopColor: '#231F20',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#231F20',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20',
                    verticalAlign: 'middle'
                  }}
                  >
                  <p
                    className="s3"
                    style={{ textAlign: 'center' }}
                  >
                    LEARNING AREA
                  </p>
                </td>
                <td
                  style={{
                    width:'39pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.5pt',
                    borderTopColor: '#231F20',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#231F20',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20',
                    verticalAlign: 'middle'
                  }}
                  >
                  <p
                    className="s4"
                    style={{ textAlign: 'center' }}
                  >
                    HOLIDAY WORK SCORE %
                  </p>
                </td>
                <td
                  style={{ width:'39pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'double',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20',
                  verticalAlign: 'middle'
                }}
                >
                  <p
                    className="s4"
                    style={{ textAlign: 'center' }}
                  >
                    B.O.T SCORE %</p>
                </td>
                <td
                  style={{
                    width: '39pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.5pt',
                    borderTopColor: '#231F20',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#231F20',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20',
                    verticalAlign: 'middle'
                  }}
                >
                  <p
                    className="s5"
                    style={{
                      lineHeight: '12pt',
                      textAlign: 'center'
                    }}
                  >
                    MID TERM SCORES %
                  </p>
                </td>
                <td
                  style={{
                    width: '46pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.5pt',
                    borderTopColor: '#231F20',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#231F20',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20',
                    verticalAlign: 'middle'
                  }}
                >
                  <p
                    className="s7"
                    style={{
                      lineHeight: '12pt',
                      textAlign: 'center'
                    }}
                  >
                    END OF TERM SCORES %
                  </p>
                </td>
                <td
                  style={{
                    width: '180pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.5pt',
                    borderTopColor: '#231F20',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#231F20',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20',
                    verticalAlign: 'middle'
                  }}
                >
                  <p
                    className="s8"
                    style={{ textAlign: 'center' }}
                  >
                    ACHIEVEMENT
                  </p>
                </td>
                <td
                  style={{
                    width: '50pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.5pt',
                    borderTopColor: '#231F20',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#231F20',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20',
                    verticalAlign: 'middle'
                  }}
                >
                  <p
                    className="s5"
                    style={{ textAlign: 'center' }}
                  >
                    INTITIALS
                  </p>
                </td>
              </tr>
              <tr style={{ height: '29pt' }}>
                <td
                  style={{ width:'21pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1.5pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '5pt',
                      paddingRight: '1pt',
                      textIndent: '0pt',
                      textAlign: 'right'
                    }}
                  >1.</p>
                </td>
                <td
                  style={{ width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p
                    className="s10" style={{ paddingTop: '7pt', paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left' }}>MATHEMATICS</p>
                </td>
                <td
                  style={{ width:'39pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'46pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{
                    width: '180pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.5pt',
                    borderTopColor: '#231F20',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#231F20',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'50pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
              </tr>
              <tr style={{ height: '36pt' }}>
                <td
                  style={{
                    width: '21pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.5pt',
                    borderTopColor: '#231F20',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.5pt',
                    borderLeftColor: '#231F20',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20'
                  }}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '11pt',
                      paddingRight: '1pt',
                      textIndent: '0pt',
                      textAlign: 'right'
                    }}
                  >2.</p>
                </td>
                <td
                  style={{ width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p className="s10"
                    style={{ paddingTop: '3pt', paddingLeft: '5pt', paddingRight: '36pt', textIndent: '0pt', textAlign: 'left' }}>LITERACY 1
                    (READING)</p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'46pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'180pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'50pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
              </tr>
              <tr style={{ height: '36pt' }}>
                <td
                  style={{ width:'21pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1.5pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '9pt',
                      paddingRight: '1pt',
                      textIndent: '0pt',
                      textAlign: 'right'
                    }}
                  >
                    3.
                  </p>
                </td>
                <td
                  style={{ width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p className="s10" style={{ paddingTop: '6pt', paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left' }}>LITERACY II
                    (WRITING)</p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'46pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'180pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'50pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
              </tr>
              <tr style={{ height: '29pt' }}>
                <td
                  style={{ width:'21pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1.5pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '8pt',
                      paddingRight: '1pt',
                      textIndent: '0pt',
                      textAlign: 'right'
                    }}
                  >
                    4.
                  </p>
                </td>
                <td
                  style={{ width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p className="s10" style={{ paddingTop: '6pt', paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left' }}>ENGLISH</p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'46pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'180pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'50pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
              </tr>
              <tr style={{ height: '34pt' }}>
                <td
                  style={{ width:'21pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1.5pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '14pt',
                      paddingRight: '1pt',
                      textIndent: '0pt',
                      textAlign: 'right'
                    }}
                  >
                    5.
                  </p>
                </td>
                <td
                  style={{ width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p className="s10" style={{ paddingTop: '4pt', paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left' }}>LOCAL LANGUAGE
                    (LUGANDA)</p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'46pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'180pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'50pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
              </tr>
              <tr style={{ height: '34pt' }}>
                <td
                  style={{ width:'21pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1.5pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                  <p
                    className="s9"
                    style={{
                      paddingRight: '1pt',
                      textIndent: '0pt',
                      textAlign: 'right'
                    }}
                  >
                    6.
                  </p>
                </td>
                <td
                  style={{ width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p className="s10" style={{ paddingTop: '4pt', paddingLeft: '6pt', textIndent: '0pt', lineHeight: '14pt',textAlign: 'left' }}>
                    CPA (MUSIC/ ART/ CRAFTS)</p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'46pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'180pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'50pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
              </tr>
              <tr style={{ height: '25pt' }}>
                <td
                  rowSpan={2}
                  style={{
                    width: '21pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.5pt',
                    borderTopColor: '#231F20',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.5pt',
                    borderLeftColor: '#231F20',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20'
                  }}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                  <p
                    className="s9"
                    style={{
                      paddingLeft: '5pt',
                      textIndent: '0pt',
                      textAlign: 'left'
                    }}
                  >
                    7.
                  </p>
                </td>
                <td
                  rowSpan={2}
                  style={{
                    width: '101pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.5pt',
                    borderTopColor: '#231F20',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1pt',
                    borderLeftColor: '#231F20',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.5pt',
                    borderBottomColor: '#231F20',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.5pt',
                    borderRightColor: '#231F20'
                  }}
                >
                  <p className="s10"
                    style={{ paddingLeft: '6pt', paddingRight: '69pt', textIndent: '0pt', lineHeight: '22pt',textAlign: 'left' }}>IRE CRE</p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'46pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'180pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'50pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
              </tr>
              <tr style={{ height: '23pt' }}>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'46pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'180pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'50pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
              </tr>
              <tr style={{ height: '23pt' }}>
                <td
                  style={{ width:'21pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1.5pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '2pt',
                      paddingRight: '1pt',
                      textIndent: '0pt',
                      textAlign: 'right'
                    }}
                  >
                    8.
                  </p>
                </td>
                <td
                  style={{ width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p className="s10" style={{ paddingTop: '2pt', paddingLeft: '6pt', textIndent: '0pt', textAlign: 'left' }}>PE</p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'46pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'180pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'50pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
              </tr>
              <tr style={{ height: '26pt' }}>
                <td
                  style={{ width:'21pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p className="s9" style={{ paddingTop: '5pt', paddingLeft: '9pt', textIndent: '0pt', textAlign: 'left' }}>TOTAL</p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'39pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'46pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'180pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
                <td
                  style={{ width:'50pt', borderTopStyle: 'solid',borderTopWidth: '1.5pt',
                  borderTopColor: '#231F20',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1pt',
                  borderLeftColor: '#231F20',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.5pt',
                  borderBottomColor: '#231F20',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.5pt',
                  borderRightColor: '#231F20'}}
                >
                  <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                </td>
              </tr>
            </tbody>
          </table>

          {/* CONCLUSION */}
          <section className="w-full conclusion">
            <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
            <p style={{ paddingTop: '10pt', paddingLeft: '9pt', textIndent: '0pt', textAlign: 'left' }}>CLASS TEACHER’S COMMENT ON LIFE
              SKILLS AND VALUES (INDICATORS)......................................................................</p>
            <p style={{ paddingTop: '8pt', paddingLeft: '9pt', textIndent: '0pt', textAlign: 'left' }}>
              ............................................................................................................................
              SIGNATURE:.....................................................</p>
            <p style={{ paddingTop: '8pt', paddingLeft: '9pt', textIndent: '0pt', textAlign: 'left' }}>PUPIL’S
              CONDUCT.......................................................................................................................................................................
            </p>
            <p style={{ paddingTop: '8pt', paddingLeft: '9pt', textIndent: '0pt', textAlign: 'left' }}>GENERAL
              COMMENTS:...............................................................................................................................................................
            </p>
            <p style={{ paddingTop: '8pt', paddingLeft: '9pt', textIndent: '0pt', textAlign: 'left' }}>TEACHER’S
              NAME:.....................................................................................................
              SIGNATURE:...........................................</p>
            <p style={{ paddingTop: '8pt', paddingLeft: '9pt', textIndent: '0pt', textAlign: 'left' }}>HEADTEACHER’S
              COMMENT:.....................................................................................................................................................
            </p>
            <p style={{ paddingTop: '8pt', paddingLeft: '9pt', textIndent: '0pt', textAlign: 'left' }}>HEADTEACHER’S
              NAME:.............................................................................................SIGNATURE:..........................................
            </p>
            <p style={{ paddingTop: '8pt', paddingLeft: '9pt', textIndent: '0pt', textAlign: 'left' }}>BALANCE
              TERM............................................................................... NEXT TERM
              FEES............................................................</p>
            <p style={{ paddingTop: '8pt', paddingLeft: '9pt', textIndent: '0pt', lineHeight: '157%', textAlign: 'left' }}>
              REQUIREMENTS...........................................................................................................................................................................
            </p>
            <p style={{ paddingTop: '8pt', paddingLeft: '9pt', textIndent: '0pt', lineHeight: '157%', textAlign: 'left' }}>
              NEXT TERM BEGINS ON:..................................................................
              ENDS ON:........................................................................
            </p>
            <h3
              className="mt-3"
              style={{ textIndent: '0pt', lineHeight: '11pt', textAlign: 'center' }}
            >
              This report is not valid without the Headtacher’s stamp and signature
            </h3>
          </section>
        </div>
      </div>
    </Dialog>
  );
}

export default MyDialog;