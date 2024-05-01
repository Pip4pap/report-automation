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
            <div style={{ paddingLeft: '66.667px' }}>
              <h1 style={{ paddingTop: '2.667px', textIndent: '0px', lineHeight: '42.667px', textAlign: 'left' }}>LWAGULA MEMORIAL</h1>
              <h2 style={{ textIndent: '0px', lineHeight: '38.667px', textAlign: 'left' }}>PRIMARY SCHOOL (LAMPS)</h2>
              <h4 style={{ paddingTop: '2.667px', textIndent: '0px', textAlign: 'left' }}>Box 12522, Kampala. Tel : 0755-406702, 0772-406702</h4>
              <p
                className="s1"
                style={{
                  paddingTop: '6.667px',
                  textIndent: '0px',
                  textAlign: 'left'
                }}>REPORT CARD FOR P1-P3 (THEMATIC CURRICULUM)</p>
            </div>
          </section>

          {/* FIRST INFORMATION */}
          <section className="mt-2 w-full">
            <div
              className="s2 flex justify-between"
              style={{
                paddingTop: '5.333px',
                paddingLeft: '8px',
              }}>
              <div className="flex justify-start">
                <span>TERM&nbsp;</span>
                <div
                  style={{
                    width: '280px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >II</div>
              </div>
              <div className="flex">
                <span className='pr-2'>YEAR</span>
                <div
                  style={{
                    width: '60px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="text-center text-black overflow-hidden"
                >2024</div>
                &nbsp;&nbsp;<span className='pr-2'>DATE</span>
                <div
                  style={{
                    width: '90px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="text-center text-black overflow-hidden"
                >May 3rd</div>
              </div>
            </div>
            <div
              className="s2 flex justify-between"
              style={{
                paddingTop: '8px',
                paddingLeft: '8px',
              }}
            >
              <div className="flex">
                <span>PUPIL’S NAMES&nbsp;</span>
                <div
                  style={{
                    width: '370px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >Mwebesa Martin</div>
              </div>
              <div className="flex">
                <span className='px-2'>CLASS&nbsp;</span>
                <div
                  style={{
                    width: '40px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >P.4</div>
              </div>
              <div className="flex">
                <span className='px-2'>ENROLMENT&nbsp;</span>
                <div
                  style={{
                    width: '40px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >Day</div>
              </div>
            </div>
            <div
              className="s2 flex justify-between"
              style={{
                paddingTop: '8px',
                paddingLeft: '8px',
                lineHeight: '145%',
              }}>
              <div className="flex">
                <span>AGE&nbsp;</span>
                <div
                  style={{
                    width: '320px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >11 years</div>
              </div>
              <div className="flex">
                <span>SEX&nbsp;</span>
                <div
                  style={{
                    width: '320px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >Male</div>
              </div>
            </div>
            <div
              className="s2 mb-1"
              style={{
                paddingTop: '8px',
                paddingLeft: '8px',
                textIndent: '0px',
                lineHeight: '145%',
                textAlign: 'left'
              }}
            >
              <div className="flex justify-between">
                <span>LEARNER IDENTIFICATION NUMBER (LIN)&nbsp;</span>
                <div
                  style={{
                    width: '455px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >U 003256 / 012</div>
              </div>
            </div>
          </section>

          {/* TABLE */}
          <table className="w-full">
            {/* Titles */}
            <thead>
              <tr>
                <td
                  style={{
                    width: '28px',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}>
                </td>
                <td
                  style={{
                    width: '148px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888',
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
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888',
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
                  style={{
                    width: '52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888',
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
                    width: '52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888',
                    verticalAlign: 'middle'
                  }}
                >
                  <p
                    className="s5"
                    style={{
                      lineHeight: '16px',
                      textAlign: 'center'
                    }}
                  >
                    MID TERM SCORES %
                  </p>
                </td>
                <td
                  style={{
                    width: '61.333px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888',
                    verticalAlign: 'middle'
                  }}
                >
                  <p
                    className="s7"
                    style={{
                      lineHeight: '16px',
                      textAlign: 'center'
                    }}
                  >
                    END OF TERM SCORES %
                  </p>
                </td>
                <td
                  style={{
                    width: '240px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888',
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
                    width: '66.667px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'double',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888',
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
            </thead>
            <tbody>
              {/* Mathematics */}
              <tr>
                <td
                  style={{
                    width: '28px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '6.667px',
                      paddingRight: '1.333px',
                      textIndent: '0px',
                      textAlign: 'right'
                    }}
                  >1.</p>
                </td>
                <td
                  style={{
                    width: '134.667px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                >
                  <p
                    className="s10"
                    style={{
                      paddingTop: '9.333px',
                      paddingLeft: '6.667px',
                      textIndent: '0px',
                      textAlign: 'left'
                    }}
                  >
                    MATHEMATICS
                  </p>
                </td>
                <td
                  style={{
                    width: '52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  69
                </td>
                <td
                  style={{
                    width: '52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  63
                </td>
                <td
                  style={{
                    width: '52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  78
                </td>
                <td
                  style={{
                    width: '61.333px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  75
                </td>
                <td
                  style={{
                    width: '240px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  Not bad
                </td>
                <td
                  style={{
                    width: '66.667px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  K.D
                </td>
              </tr>
              {/* Literacy I (Reading) */}
              <tr>
                <td
                  style={{
                    width: '28px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '11pt',
                      paddingRight: '1.333px',
                      textIndent: '0px',
                      textAlign: 'right'
                    }}
                  >2.</p>
                </td>
                <td
                  style={{ width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                  borderTopColor: '#AC4888',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '1.333px',
                  borderLeftColor: '#AC4888',
                  borderBottomStyle: 'solid',
                  borderBottomWidth: '1.333px',
                  borderBottomColor: '#AC4888',
                  borderRightStyle: 'solid',
                  borderRightWidth: '1.333px',
                  borderRightColor: '#AC4888'}}
                >
                  <p
                    className="s10"
                    style={{
                      paddingTop: '3pt',
                      paddingLeft: '6.667px',
                      paddingRight: '30pt',
                      textIndent: '0px',
                      textAlign: 'left'
                    }}
                  >
                    LITERACY I (READING)
                  </p>
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  50
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  51
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  52
                </td>
                <td
                  style={{
                    width:'61.333px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  53
                </td>
                <td
                  style={{
                    width:'240px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  More effort needed
                </td>
                <td
                  style={{
                    width:'66.667px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  S.D
                </td>
              </tr>
              {/* Literacy II (Reading) */}
              <tr>
                <td
                  style={{
                    width:'28px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '12px',
                      paddingRight: '1.333px',
                      textIndent: '0px',
                      textAlign: 'right'
                    }}
                  >
                    3.
                  </p>
                </td>
                <td
                  style={{
                    width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  <p className="s10" style={{ paddingTop: '6pt', paddingLeft: '6.667px', textIndent: '0px', textAlign: 'left' }}>LITERACY II
                    (WRITING)</p>
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  46
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  47
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  48
                </td>
                <td
                  style={{
                    width:'61.333px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  49
                </td>
                <td
                  style={{
                    width:'240px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  Need improvement
                </td>
                <td
                  style={{
                    width:'66.667px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  K.A
                </td>
              </tr>
              {/* English */}
              <tr>
                <td
                  style={{
                    width:'28px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '8pt',
                      paddingRight: '1.333px',
                      textIndent: '0px',
                      textAlign: 'right'
                    }}
                  >
                    4.
                  </p>
                </td>
                <td
                  style={{
                    width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  <p className="s10" style={{ paddingTop: '6pt', paddingLeft: '6.667px', textIndent: '0px', textAlign: 'left' }}>ENGLISH</p>
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  60
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  61
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  62
                </td>
                <td
                  style={{
                    width:'61.333px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  64
                </td>
                <td
                  style={{
                    width:'240px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  Fair
                </td>
                <td
                  style={{
                    width:'66.667px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  M.H
                </td>
              </tr>
              {/* Local Language (Luganda) */}
              <tr>
                <td
                  style={{
                    width:'28px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '14pt',
                      paddingRight: '1.333px',
                      textIndent: '0px',
                      textAlign: 'right'
                    }}
                  >
                    5.
                  </p>
                </td>
                <td
                  style={{
                    width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  <p className="s10" style={{ paddingTop: '4pt', paddingLeft: '6.667px', textIndent: '0px', textAlign: 'left' }}>LOCAL LANGUAGE
                    (LUGANDA)</p>
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  84
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  86
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  89
                </td>
                <td
                  style={{
                    width:'61.333px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  91
                </td>
                <td
                  style={{
                    width:'240px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  Excellent
                </td>
                <td
                  style={{
                    width:'66.667px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  N.E
                </td>
              </tr>
              {/* CPA (Music/Art/Crafts) */}
              <tr>
                <td
                  style={{
                    width:'28px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                >
                  <p
                    className="s9"
                    style={{
                      paddingRight: '1.333px',
                      textIndent: '0px',
                      textAlign: 'right'
                    }}
                  >
                    6.
                  </p>
                </td>
                <td
                  style={{
                    width:'101pt', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  <p className="s10" style={{ paddingTop: '4pt', paddingLeft: '6pt', textIndent: '0px', lineHeight: '14pt',textAlign: 'left' }}>
                    CPA (MUSIC/ ART/ CRAFTS)</p>
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  70
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  71
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  77
                </td>
                <td
                  style={{
                    width:'61.333px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  79
                </td>
                <td
                  style={{
                    width:'240px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  Good
                </td>
                <td
                  style={{
                    width:'66.667px', borderTopStyle: 'solid',borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  M.H
                </td>
              </tr>
              {/* IRE */}
              <tr>
                <td
                  rowSpan={2}
                  style={{
                    width: '28px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                >
                  <p
                    className="s9"
                    style={{
                      paddingLeft: '6.667px',
                      textIndent: '0px',
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
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  <p className="s10"
                    style={{ paddingLeft: '6pt', paddingRight: '69pt', textIndent: '0px', lineHeight: '22pt',textAlign: 'left' }}>IRE CRE</p>
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center"
                >
                  55
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center"
                >
                  66
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center"
                >
                  68
                </td>
                <td
                  style={{
                    width:'61.333px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center"
                >
                  72
                </td>
                <td
                  style={{
                    width:'240px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center"
                >
                  Fair
                </td>
                <td
                  style={{
                    width:'66.667px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center"
                >
                  M.A
                </td>
              </tr>
              {/* CRE */}
              <tr>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  -
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  -
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  -
                </td>
                <td
                  style={{
                    width:'61.333px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  -
                </td>
                <td
                  style={{
                    width:'240px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  -
                </td>
                <td
                  style={{
                    width:'66.667px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  -
                </td>
              </tr>
              {/* PE */}
              <tr>
                <td
                  style={{
                    width:'28px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '2pt',
                      paddingRight: '1.333px',
                      textIndent: '0px',
                      textAlign: 'right'
                    }}
                  >
                    8.
                  </p>
                </td>
                <td
                  style={{
                    width:'101pt',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  <p className="s10" style={{ paddingTop: '2pt', paddingLeft: '6pt', textIndent: '0px', textAlign: 'left' }}>PE</p>
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  80
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  81
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  82
                </td>
                <td
                  style={{
                    width:'61.333px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  86
                </td>
                <td
                  style={{
                    width:'240px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  Very active
                </td>
                <td
                  style={{
                    width:'66.667px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  O.L
                </td>
              </tr>
              {/* TOTAL */}
              <tr>
                <td
                  style={{
                    width:'28px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'}}
                  >
                  </td>
                  <td
                    style={{
                      width: '101pt',
                      borderTopStyle: 'solid',
                      borderTopWidth: '1.333px',
                      borderTopColor: '#AC4888',
                      borderLeftStyle: 'solid',
                      borderLeftWidth: '1.333px',
                      borderLeftColor: '#AC4888',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '1.333px',
                      borderBottomColor: '#AC4888',
                      borderRightStyle: 'solid',
                      borderRightWidth: '1.333px',
                      borderRightColor: '#AC4888'
                    }}
                  >
                  <p
                    className="s9"
                    style={{
                      paddingTop: '6.667px',
                      paddingLeft: '12px',
                      textIndent: '0px',
                      textAlign: 'left'
                    }}
                  >
                    TOTAL
                  </p>
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  64
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  66
                </td>
                <td
                  style={{
                    width:'52px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  70
                </td>
                <td
                  style={{
                    width:'61.333px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  71
                </td>
                <td
                  style={{
                    width:'240px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle text-sm"
                >
                  Needs to put in more effort
                </td>
                <td
                  style={{
                    width:'66.667px',
                    borderTopStyle: 'solid',
                    borderTopWidth: '1.333px',
                    borderTopColor: '#AC4888',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1.333px',
                    borderLeftColor: '#AC4888',
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '1.333px',
                    borderBottomColor: '#AC4888',
                    borderRightStyle: 'solid',
                    borderRightWidth: '1.333px',
                    borderRightColor: '#AC4888'
                  }}
                  className="text-black text-center align-middle"
                >
                  {/* Put value here */}
                </td>
              </tr>
            </tbody>
          </table>

          {/* CONCLUSION */}
          <section className="w-full conclusion">
            {/* Class teacher's comment */}
            <div
              style={{ paddingTop: '13.333px', paddingLeft: '12px', textIndent: '0px', textAlign: 'left', lineHeight: '26px' }}
            >
              <span>CLASS TEACHER’S COMMENT ON LIFE SKILLS AND VALUES (INDICATORS)</span>
              <span
                style={{
                  width: '750px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 pl-2 text-black"
              >
                <span>He is trying his best and he needs to be encouraged to work harder. He has a lot of potential</span>
                <span style={{ 'float': 'right' }}>
                  <span
                    className="pr-3"
                    style={{
                      borderBottomStyle: 'none',
                      borderBottomWidth: '0px',
                      color: '#AC4888'
                    }}
                  >
                    SIGNATURE
                  </span>
                  <span
                    style={{
                      width: '280px',
                      borderBottomStyle: 'dotted',
                      borderBottomWidth: '2.667px',
                      borderBottomColor: '#AC4888',
                      paddingLeft: '200px'
                    }}
                    className="-mt-1 text-center text-black overflow-hidden"
                  >
                    {/* Insert class teacher signature here */}
                  </span>
                </span>
              </span>
            </div>
            {/* Pupil's conduct */}
            <div
              style={{
                paddingTop: '8px',
                paddingLeft: '12px',
                textIndent: '0px',
                lineHeight: '100%',
                textAlign: 'left'
              }}
            >
              <div className="flex justify-between">
                <span>PUPIL’S CONDUCT&nbsp;</span>
                <span
                  style={{
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 pl-3 text-black overflow-hidden grow"
                >
                  He is generally well behaved and keeps good manners.
                </span>
              </div>
            </div>
            {/* General comments */}
            <div
              style={{
                paddingTop: '8px',
                paddingLeft: '12px',
                textIndent: '0px',
                lineHeight: '100%',
                textAlign: 'left'
              }}
            >
              <div className="flex justify-between">
                <span>GENERAL COMMENTS&nbsp;</span>
                <span
                  style={{
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 pl-3 text-black overflow-hidden grow"
                >
                  He is generally well behaved and keeps good manners.
                </span>
              </div>
            </div>
            {/* Teacher's name and signature */}
            <div
              className="flex justify-between"
              style={{
                paddingTop: '8px',
                paddingLeft: '12px',
                lineHeight: '100%',
              }}>
              <div className="flex">
                <span>TEACHER’S NAME&nbsp;</span>
                <div
                  style={{
                    width: '370px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >
                  Kapyo Diphus
                </div>
              </div>
              <div className="flex grow">
                <span>SIGNATURE&nbsp;</span>
                <div
                  style={{
                    width: '100%',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >
                  {/* Insert teacher's signature here */}
                </div>
              </div>
            </div>
            {/* Headteacher's comment */}
            <div
              style={{
                paddingTop: '8px',
                paddingLeft: '12px',
                textIndent: '0px',
                lineHeight: '100%',
                textAlign: 'left'
              }}
            >
              <div className="flex justify-between">
                <span>HEADTEACHER’S COMMENT&nbsp;</span>
                <span
                  style={{
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 pl-3 text-black overflow-hidden grow"
                >
                  A fair performance and good manners. He will get there.
                </span>
              </div>
            </div>
            {/* Headteacher's name and signature */}
            <div
              className="flex justify-between"
              style={{
                paddingTop: '8px',
                paddingLeft: '12px',
                lineHeight: '100%',
              }}>
              <div className="flex">
                <span>HEADTEACHER’S NAME&nbsp;</span>
                <div
                  style={{
                    width: '370px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >
                  Mangeni Harriet
                </div>
              </div>
              <div className="flex grow">
                <span>SIGNATURE&nbsp;</span>
                <div
                  style={{
                    width: '100%',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >
                  {/* Insert teacher's signature here */}
                </div>
              </div>
            </div>
            {/* Fees details */}
            <div
              className="flex justify-between"
              style={{
                paddingTop: '8px',
                paddingLeft: '12px',
                lineHeight: '100%',
              }}>
              <div className="flex">
                <span>BALANCE TERM&nbsp;</span>
                <div
                  style={{
                    width: '320px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >
                  UGX 0
                </div>
              </div>
              <div className="flex grow">
                <span>NEXT TERM FEES&nbsp;</span>
                <div
                  style={{
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden grow"
                >
                  UGX 550,000
                </div>
              </div>
            </div>
            {/* Requirements */}
            <div
              style={{
                paddingTop: '8px',
                paddingLeft: '12px',
                textIndent: '0px',
                lineHeight: '100%',
                textAlign: 'left'
              }}
            >
              <div className="flex justify-between">
                <span>REQUIREMENTS&nbsp;</span>
                <span
                  style={{
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 pl-3 text-black overflow-hidden grow"
                >
                  1 rim of paper, 1 scrubbing brush, 1 broom (outside)
                </span>
              </div>
            </div>
            {/* Next term dates */}
            <div
              className="flex justify-between"
              style={{
                paddingTop: '8px',
                paddingLeft: '12px',
                lineHeight: '100%',
              }}>
              <div className="flex">
                <span>NEXT TERM BEGINS ON&nbsp;</span>
                <div
                  style={{
                    width: '320px',
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden"
                >
                  May 28th, 2024
                </div>
              </div>
              <div className="flex grow">
                <span>ENDS ON&nbsp;</span>
                <div
                  style={{
                    borderBottomStyle: 'dotted',
                    borderBottomWidth: '2.667px',
                    borderBottomColor: '#AC4888'
                  }}
                  className="-mt-1 text-center text-black overflow-hidden grow"
                >
                  August 16th, 2024
                </div>
              </div>
            </div>
            <h3
              className="mt-3"
              style={{ textIndent: '0px', lineHeight: '14.667px', textAlign: 'center' }}
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