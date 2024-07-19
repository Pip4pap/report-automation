import React from 'react';
import '../styles/Report.css';
import logo from '../images/logo.png';

interface SubjectReportProps {
  subjectReportData: any;
}

const SubjectReport: React.FC<SubjectReportProps> = ({ subjectReportData }) => {
  const getGrade = (score: any) => {
    // Input validation (optional)
    if (score < 0 || score > 100) {
      return "Invalid Score";
    }
  
    switch (true) { // Switch statement with boolean conditions
      case (score >= 90):
        return 1;
      case (score >= 80):
        return 2;
      case (score >= 70):
        return 3;
      case (score >= 60):
        return 4;
      case (score >= 55):
        return 5;
      case (score >= 50):
        return 6;
      case (score >= 45):
        return 7;
      case (score >= 40):
        return 8;
      default:
        return 9;
    }
  }
  

  return (
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
                paddingRight: '60px',
                textIndent: '0px',
                textAlign: 'center'
              }}>TERMINAL REPORT</p>
          </div>
        </section>

        {/* FIRST INFORMATION */}
        <section className="mt-2 w-full">
          {/* Term, date, year */}
          <div
            className="s2 flex justify-between"
            style={{ paddingTop: '5.333px' }}>
            <div className="flex justify-start">
              <span>TERM&nbsp;</span>
              <div
                style={{
                  width: '280px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888',
                }}
                className="-mt-1 text-center text-black font-normal overflow-hidden"
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
                className="text-center text-black font-normal overflow-hidden"
              >2024</div>
              &nbsp;&nbsp;<span className='pr-2'>DATE</span>
              <div
                style={{
                  width: '90px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="text-center text-black font-normal overflow-hidden"
              >03-05-2024</div>
            </div>
          </div>
          {/* Pupil's name, class, enrollment */}
          <div
            className="s2 flex justify-between mt-1"
            style={{ paddingTop: '8px' }}
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
                className="-mt-1 text-center text-black font-normal overflow-hidden"
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
                className="-mt-1 text-center text-black font-normal overflow-hidden"
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
                className="-mt-1 text-center text-black font-normal overflow-hidden"
              >32</div>
            </div>
          </div>
          {/* Age, Sex */}
          <div
            className="s2 flex justify-between mt-1"
            style={{
              paddingTop: '8px',
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
                className="-mt-1 text-center text-black font-normal overflow-hidden"
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
                className="-mt-1 text-center text-black font-normal overflow-hidden"
              >Male</div>
            </div>
          </div>
          {/* Learner Identification Number */}
          <div
            className="s2 mb-1 mt-1"
            style={{
              paddingTop: '8px',
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
                className="-mt-1 text-center text-black font-normal overflow-hidden"
              ></div>
            </div>
          </div>
        </section>

        {/* TABLE */}
        <table className="w-full mt-2">
          {/* Titles */}
          <thead>
            <tr>
              <td
                rowSpan={2}
                style={{
                  width: '100px',
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
                  SUBJECT
                </p>
              </td>
              <td
                colSpan={2}
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
                  HOLIDAY <br /> WORK
                </p>
              </td>
              
              <td
                colSpan={2}
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
                  BEGINNING <br /> OF TERM <br /> EXAMS
                </p>
              </td>
              <td
                colSpan={2}
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
                  MID TERM EXAMS
                </p>
              </td>
              <td
                colSpan={2}
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
                  END OF <br /> TERM EXAMS
                </p>
              </td>
              <td
                style={{
                  width: '50px',
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
                  REMARKS
                </p>
              </td>              
            </tr>

            <tr>
              <td
                style={{
                  width: '60px',
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
                  className="s11"
                  style={{ textAlign: 'center' }}
                >
                  EXAM <br /> MARKS <br /> OUT OF 100
                </p>
              </td>
              <td
                style={{
                  width: '30px',
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
                  AGG
                </p>
              </td>

              <td
                style={{
                  width: '60px',
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
                  className="s11"
                  style={{ textAlign: 'center' }}
                >
                  EXAM MARKS OUT OF 100
                </p>
              </td>
              <td
                style={{
                  width: '30px',
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
                  AGG
                </p>
              </td>

              <td
                style={{
                  width: '60px',
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
                  className="s11"
                  style={{ textAlign: 'center' }}
                >
                  EXAM MARKS OUT OF 100
                </p>
              </td>
              <td
                style={{
                  width: '30px',
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
                  AGG
                </p>
              </td>

              <td
                style={{
                  width: '60px',
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
                  className="s11"
                  style={{ textAlign: 'center' }}
                >
                  EXAM MARKS OUT OF 100
                </p>
              </td>
              <td
                style={{
                  width: '30px',
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
                  AGG
                </p>
              </td>

              <td
                style={{
                  width: '60px',
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
              ></td>
            </tr>
          </thead>
          <tbody>
            {/* English */}
            <tr>
              <td
                style={{
                  width: '100px',
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
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingLeft: '6.667px',
                    textIndent: '0px',
                    textAlign: 'left'
                  }}
                >
                  ENGLISH
                </p>
              </td>
              <td
                style={{
                  width: '100px',
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
                71
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
                { getGrade(71) }
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
                { getGrade(63) }
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
                { getGrade(75) }
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
                81
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
                { getGrade(81) }
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
                F.Good
              </td>
            </tr>
            {/* Mathematics */}
            <tr>
              <td
                style={{
                  width: '100px',
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
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingLeft: '6.667px',
                    paddingRight: '30pt',
                    textIndent: '0px',
                    textAlign: 'left'
                  }}
                >
                  MATHEMATICS
                </p>
              </td>
              <td
                style={{
                  width: '100px',
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
                71
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
                { getGrade(71) }
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
                { getGrade(63) }
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
                { getGrade(75) }
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
                81
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
                { getGrade(81) }
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
                F.Good
              </td>
            </tr>
            {/* Science */}
            <tr>
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
                <p
                  className="s10"
                  style={{
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingLeft: '6.667px',
                    textIndent: '0px',
                    textAlign: 'left'
                  }}>
                  SCIENCE
                </p>
              </td>
              <td
                style={{
                  width: '100px',
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
                71
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
                { getGrade(71) }
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
                { getGrade(63) }
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
                { getGrade(75) }
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
                81
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
                { getGrade(81) }
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
                F.Good
              </td>
            </tr>
            {/* S.S.T */}
            <tr>
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
                <p
                  className="s10"
                  style={{
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingLeft: '6.667px',
                    textIndent: '0px',
                    textAlign: 'left'
                  }}>
                  S.S.T
                </p>
              </td>
              <td
                style={{
                  width: '100px',
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
                71
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
                { getGrade(71) }
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
                { getGrade(63) }
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
                { getGrade(75) }
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
                81
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
                { getGrade(81) }
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
                F.Good
              </td>
            </tr>
            {/* Music */}
            <tr>
              <td
                style={{
                  width: '100px',
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
                  className="s10"
                  style={{
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingLeft: '6pt',
                    textIndent: '0px',
                    lineHeight: '14pt',
                    textAlign: 'left'
                  }}>
                  MUSIC
                </p>
              </td>
              <td
                style={{
                  width: '100px',
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
                71
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
                { getGrade(71) }
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
                { getGrade(63) }
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
                { getGrade(75) }
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
                81
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
                { getGrade(81) }
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
                F.Good
              </td>
            </tr>
            {/* Writing */}
            <tr>
              <td
                style={{
                  width: '100px',
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
                  className="s10"
                  style={{
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingLeft: '6pt',
                    paddingRight: '69pt',
                    textIndent: '0px',
                    lineHeight: '22pt',
                    textAlign: 'left'
                  }}
                >
                  WRITING
                </p>
              </td>
              <td
                style={{
                  width: '100px',
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
                71
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
                { getGrade(71) }
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
                { getGrade(63) }
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
                { getGrade(75) }
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
                81
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
                { getGrade(81) }
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
                F.Good
              </td>
            </tr>
            {/* Total in 4 */}
            <tr>
              <td
                style={{
                  width:'100px',
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
                  className="s10"
                  style={{
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingLeft: '6pt',
                    textIndent: '0px',
                    textAlign: 'left'
                  }}>TOTAL IN 4</p>
              </td>
              <td
                style={{
                  width: '100px',
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
                71
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
                { getGrade(71) }
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
                { getGrade(63) }
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
                { getGrade(75) }
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
                81
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
                { getGrade(81) }
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
                F.Good
              </td>
            </tr>

            {/* DIVISION */}
            <tr>
              <td
                style={{
                  width:'100px',
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
                  className="s10"
                  style={{
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    paddingLeft: '6pt',
                    textIndent: '0px',
                    textAlign: 'left'
                  }}
                >DIVISION</p>
              </td>
              <td
                style={{
                  width: '100px',
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
                71
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
                { getGrade(71) }
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
                { getGrade(63) }
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
                { getGrade(75) }
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
                81
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
                { getGrade(81) }
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
                F.Good
              </td>
            </tr>

            {/* TOTAL */}
            <tr>
              <td
                style={{
                  width: '100px',
                  height: '40px',
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
              </td>
              <td
                style={{
                  width: '100px',
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
                71
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
                { getGrade(71) }
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
                { getGrade(63) }
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
                { getGrade(75) }
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
                81
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
                { getGrade(81) }
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
                F.Good
              </td>
            </tr>
          </tbody>
        </table>

        {/* CONCLUSION */}
        <section className="w-full conclusion pt-3">
          {/* Class teacher's comment */}
          <div
            style={{ textIndent: '0px', textAlign: 'left', lineHeight: '26px' }}
            className="py-3 overflow-hidden"
          >
            <span>CLASS TEACHER’S REMARKS</span>
            <span
              style={{
                borderBottomStyle: 'dotted',
                borderBottomWidth: '2.667px',
                borderBottomColor: '#AC4888'
              }}
              className="-mt-1 pl-4 text-black text-medium"
            >
              <span>He has a lot of potential and can achieve much if he concentrates in class</span>
              <span
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888',
                  paddingLeft: '800px'
                }}
                className="-mt-1 text-center text-black"
              >
              </span>
            </span>
          </div>

          {/* Teacher's name and signature */}
          <div
            className="flex justify-between py-3"
            style={{ lineHeight: '100%' }}
          >
            <div className="flex">
              <span>CLASS TEACHER’S NAME&nbsp;</span>
              <div
                style={{
                  width: '370px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-black overflow-hidden text-medium"
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
              textIndent: '0px',
              lineHeight: '100%',
              textAlign: 'left'
            }}
            className="py-3"
          >
            <div className="flex justify-between">
              <span>HEADTEACHER’S REMARKS&nbsp;</span>
              <span
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 pl-3 text-black overflow-hidden grow text-medium"
              >
                A fair performance and good manners. He will get there.
              </span>
            </div>
          </div>

          {/* Headteacher's name and signature */}
          <div
            className="flex justify-between py-3"
            style={{ lineHeight: '100%' }}>
            <div className="flex">
              <span>HEADTEACHER’S NAME&nbsp;</span>
              <div
                style={{
                  width: '370px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-black overflow-hidden text-medium"
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
            className="flex justify-between py-3"
            style={{ lineHeight: '100%' }}>
            <div className="flex">
              <span>FEES BALANCE&nbsp;</span>
              <div
                style={{
                  width: '200px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-black overflow-hidden text-medium"
              >
                UGX 0
              </div>
            </div>
            <div className="flex grow">
              <span>NEXT TERM FEES:&nbsp;</span>
              <span>DAY:&nbsp;</span>
              <div
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-black overflow-hidden grow text-medium"
              >
                UGX 550,000
              </div>
              <span>BOARDER:&nbsp;</span>
              <div
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-black overflow-hidden grow text-medium"
              >
                UGX 550,000
              </div>
            </div>
          </div>
          {/* Requirements */}
          <div
            style={{
              textIndent: '0px',
              lineHeight: '100%',
              textAlign: 'left'
            }}
            className="py-3"
          >
            <div className="flex justify-between">
              <span>REQUIREMENTS&nbsp;</span>
              <span
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 pl-3 text-black overflow-hidden grow text-medium"
              >
                1 rim of paper, 1 scrubbing brush, 1 broom (outside)
              </span>
            </div>
          </div>
          {/* Next term dates */}
          <div
            className="flex justify-between py-3"
            style={{ lineHeight: '100%' }}>
            <div className="flex">
              <span>NEXT TERM BEGINS ON&nbsp;</span>
              <div
                style={{
                  width: '320px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-black overflow-hidden text-medium"
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
                className="-mt-1 text-center text-black overflow-hidden grow text-medium"
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
  );
}

export default SubjectReport;