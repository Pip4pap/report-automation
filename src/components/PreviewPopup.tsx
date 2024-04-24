import React from 'react';
import Dialog from '@mui/material/Dialog';
import './styles/Report.css';

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
    >
      <div id="report-display-outer-wrap">
        <div id="report-display-inner-wrap" className="flex flex-col items-center justify-center">
          {/* HEADER */}
          <section id="report-header" className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                width="94"
                height="112"
                alt="LAMPS badge"
                src="data:image/png;base64,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" /
              >
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
              TERM&nbsp;..................................................
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
              CLASS........ENROLMENT.........</p>
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
              ......................................................................................................</p>
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
              style={{ paddingLeft: '69pt', textIndent: '0pt', lineHeight: '11pt', textAlign: 'left' }}
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