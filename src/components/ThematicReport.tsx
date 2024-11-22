import React from 'react';
import '../styles/Report.css';
import logo from '../images/logo.png';

interface ThematicReportProps {
  thematicReportData: any;
}

const ThematicReport: React.FC<ThematicReportProps> = ({ thematicReportData }) => {
  const currentYear = new Date().getFullYear();
  const blankComment = "This is a blank comment full of gibbi information just to stretch out the section and put an underline. More";

  const formatDate = (dateString: string): string => {
    // Split the date string into day, month, and year
    const [day, month, year] = dateString.split("-");
  
    // Convert month to ordinal (e.g., 5 -> 5th)
    const ordinal = getOrdinalSuffix(parseInt(day));
  
    // Format the output string
    return `${day}${ordinal} ${getMonthName(parseInt(month))}, ${year}`;
  }
  
  const getOrdinalSuffix = (day: number): string => {
    const suffixes = ["st", "nd", "rd", "th"];
    const remainder = day % 10;
  
    if (remainder === 1 && day !== 11) {
      return suffixes[0];
    } else if (remainder === 2 && day !== 12) {
      return suffixes[1];
    } else if (remainder === 3 && day !== 13) {
      return suffixes[2];
    } else {
      return suffixes[3];
    }
  }

  const formatToUgandanShillings = (amount: number) => {
    return new Intl.NumberFormat('en-UG', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  const getCommentColor = (score: any): string => {
    if (score === null || score === undefined || score === "-" || score < 0 || score > 100) {
      return "";
    }
    switch (true) {
      case (score >= 90):
        return "text-red-700";
      case (score >= 85):
        return "text-red-500";
      case (score >= 75):
        return "text-green-700";
      case (score >= 70):
        return "text-green-500";
      case (score >= 65):
        return "text-blue-700";
      case (score >= 55):
        return "text-blue-500";
      case (score >= 45):
        return "text-orange-700";
      case (score >= 40):
        return "text-orange-500";
      default:
        return "text-black";
    }
  }

  const getComment = (score: any): string => {
    if (score === null || score === undefined || score === "-" || score < 0 || score > 100) {
      return "";
    }
    switch (true) {
      case (score >= 90):
        return "Excellent";
      case (score >= 85):
        return "Very good";
      case (score >= 75):
        return "Good effort";
      case (score >= 70):
        return "Good";
      case (score >= 65):
        return "Fairly good";
      case (score >= 55):
        return "Fair";
      case (score >= 45):
        return "Quite fair";
      case (score >= 40):
        return "More effort";
      default:
        return "Work harder";
    }
  }

  const sumUpColumn = (column: string): number => {
    let marksArray = [
      thematicReportData[`Math_${column}`],
      thematicReportData[`Literacy_I_${column}`],
      thematicReportData[`Literacy_II_${column}`],
      thematicReportData[`English_${column}`],
      thematicReportData[`Local_Language_${column}`],
      thematicReportData[`CPA_${column}`],
      thematicReportData[`Religious_${column}`],
      thematicReportData[`PE_${column}`]
    ];
    return marksArray.reduce((acc, value) => {
      if (typeof value === 'number') {
        return acc + value;
      }
      return acc;
    }, 0);
  }
  
  const getMonthName = (month: number): string => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    return monthNames[month - 1];
  }

  const getLocalLanguageCommentColor = (score: any): string => {
    if (score === null || score === undefined || score === "-" || score < 0 || score > 100) {
      return "";
    }
    switch (true) {
      case (score >= 80):
        return "text-red-700";
      case (score >= 65):
        return "text-green-700";
      case (score >= 50):
        return "text-blue-700";
      case (score >= 70):
        return "text-green-500";
      default:
        return "text-black";
    }
  }

  const getLocalLanguageComment = (score: any): string => {
    if (score === null || score === undefined || score === "-" || score < 0 || score > 100) {
      return "";
    }
    switch (true) {
      case (score >= 80):
        return "Mulungi nnyo";
      case (score >= 65):
        return "Mulungi";
      case (score >= 50):
        return "Afuba";
      default:
        return "Asseemu amaanyi";
    }
  };

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
                textIndent: '0px',
                textAlign: 'left'
              }}>REPORT CARD FOR P1-P3 (THEMATIC CURRICULUM)</p>
          </div>
        </section>

        {/* FIRST INFORMATION */}
        <section className="mt-2 w-full">
          {/* Term, date, year */}
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
                  borderBottomColor: '#AC4888',
                }}
                className="-mt-1 text-center text-black font-normal overflow-hidden"
              >{ thematicReportData.Term }</div>
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
              >{ currentYear }</div>
              &nbsp;&nbsp;<span className='pr-2'>DATE</span>
              <div
                style={{
                  width: '170px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="text-center text-orange-600 font-bold overflow-hidden"
              >{ formatDate(thematicReportData.Date) }</div>
            </div>
          </div>
          {/* Pupil's name, class, enrollment */}
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
                className="-mt-1 text-center text-blue-500 font-bold overflow-hidden"
              >{ thematicReportData.Name }</div>
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
              >{ thematicReportData.Class }</div>
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
              >{ thematicReportData.Enrolment }</div>
            </div>
          </div>
          {/* Age, Sex */}
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
                className="-mt-1 text-center text-red-600 font-normal overflow-hidden"
              >{ thematicReportData.Age }</div>
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
              >{ thematicReportData.Sex }</div>
            </div>
          </div>
          {/* Learner Identification Number */}
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
                className="-mt-1 text-center text-green-700 font-normal overflow-hidden"
              >{ thematicReportData.LIN }</div>
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
                  COMMENT
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
                className="text-black text-center align-middle text-sm"
              >
                { thematicReportData.Math_Achievement }
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
                { thematicReportData.Math_HW }
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
                { thematicReportData.Math_BOT }
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
                { thematicReportData.Math_MOT }
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
                { thematicReportData.Math_EOT }
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
                className={`text-center font-bold align-middle text-sm ${getCommentColor(thematicReportData.Math_EOT)}`}
              >
                { getComment(thematicReportData.Math_EOT) }
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
                className="text-black text-center align-middle text-sm"
              >
                { thematicReportData.Literacy_I_Achievement }
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
                { thematicReportData.Literacy_I_HW }
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
                { thematicReportData.Literacy_I_BOT }
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
                { thematicReportData.Literacy_I_MOT }
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
                { thematicReportData.Literacy_I_EOT }
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
                className={`text-center font-bold align-middle text-sm ${getCommentColor(thematicReportData.Literacy_I_EOT)}`}
              >
                { getComment(thematicReportData.Literacy_I_EOT) }
              </td>
            </tr>
            {/* Literacy II (Writing) */}
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
                className="text-black text-center align-middle text-sm"
              >
                { thematicReportData.Literacy_II_Achievement }
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
                { thematicReportData.Literacy_II_HW }
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
                { thematicReportData.Literacy_II_BOT }
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
                { thematicReportData.Literacy_II_MOT }
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
                { thematicReportData.Literacy_II_EOT }
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
                className={`text-center font-bold align-middle text-sm ${getCommentColor(thematicReportData.Literacy_II_EOT)}`}
              >
                { getComment(thematicReportData.Literacy_II_EOT) }
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
                className="text-black text-center align-middle text-sm"
              >
                { thematicReportData.English_Achievement }
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
                { thematicReportData.English_HW }
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
                { thematicReportData.English_BOT }
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
                { thematicReportData.English_MOT }
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
                { thematicReportData.English_EOT }
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
                className={`text-center font-bold align-middle text-sm ${getCommentColor(thematicReportData.English_EOT)}`}
              >
                { getComment(thematicReportData.English_EOT) }
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
                className="text-black text-center align-middle text-sm"
              >
                { thematicReportData.Local_Language_Achievement }
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
                { thematicReportData.Local_Language_HW }
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
                { thematicReportData.Local_Language_BOT }
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
                { thematicReportData.Local_Language_MOT }
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
                { thematicReportData.Local_Language_EOT }
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
                className={`font-bold text-center align-middle text-sm ${getLocalLanguageCommentColor(thematicReportData.Local_Language_EOT)}`}
              >
                { getLocalLanguageComment(thematicReportData.Local_Language_EOT) }
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
                className="text-black text-center align-middle text-sm"
              >
                { thematicReportData.CPA_Achievement }
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
                { thematicReportData.CPA_HW }
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
                { thematicReportData.CPA_BOT }
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
                { thematicReportData.CPA_MOT }
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
                { thematicReportData.CPA_EOT }
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
                className={`text-center font-bold align-middle text-sm ${getCommentColor(thematicReportData.CPA_EOT)}`}
              >
                { getComment(thematicReportData.CPA_EOT) }
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
                className="text-black text-center text-sm align-middle"
              >
                { thematicReportData.Religious_Subject==='IRE' ? thematicReportData.Religious_Achievement : '-' }
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
                { thematicReportData.Religious_Subject==='IRE' ? thematicReportData.Religious_HW : '-' }
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
                { thematicReportData.Religious_Subject==='IRE' ? thematicReportData.Religious_BOT : '-' }
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
                { thematicReportData.Religious_Subject==='IRE' ? thematicReportData.Religious_MOT : '-' }
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
                { thematicReportData.Religious_Subject==='IRE' ? thematicReportData.Religious_EOT : '-' }
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
                className={`text-center text-sm ${getCommentColor(thematicReportData.Religious_Subject==='IRE' ? thematicReportData.Religious_EOT : '-')}`}
              >
                {thematicReportData.Religious_Subject === 'IRE' ?
                  getComment(thematicReportData.Religious_Subject==='IRE' ? thematicReportData.Religious_EOT : '-')
                  : '-'}
              </td>
            </tr>
            {/* CRE */}
            <tr>
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
                { thematicReportData.Religious_Subject==='CRE' ? thematicReportData.Religious_Achievement : '-' }
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
                { thematicReportData.Religious_Subject==='CRE' ? thematicReportData.Religious_HW : '-' }
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
                { thematicReportData.Religious_Subject==='CRE' ? thematicReportData.Religious_BOT : '-' }
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
                { thematicReportData.Religious_Subject==='CRE' ? thematicReportData.Religious_MOT : '-' }
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
                { thematicReportData.Religious_Subject==='CRE' ? thematicReportData.Religious_EOT : '-' }
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
                className={`text-center font-bold align-middle text-sm ${getCommentColor(thematicReportData.Religious_Subject==='CRE' ? thematicReportData.Religious_EOT : '-')}`}
              >
                {thematicReportData.Religious_Subject === 'CRE' ?
                  getComment(thematicReportData.Religious_Subject==='CRE' ? thematicReportData.Religious_EOT : '-')
                  : '-'}
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
                { thematicReportData.PE_Achicevement }
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
                { thematicReportData.PE_HW }
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
                { thematicReportData.PE_BOT }
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
                { thematicReportData.PE_MOT }
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
                { thematicReportData.PE_EOT }
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
                className={`text-center align-middle font-bold align-middle text-sm ${getCommentColor(thematicReportData.PE_EOT)}`}
              >
                { getComment(thematicReportData.PE_EOT) }
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
                { thematicReportData.Total_Achievement }
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
                className="text-red-600 text-center align-middle"
              >
                { sumUpColumn('HW') }
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
                className="text-red-600 text-center align-middle"
              >
                { sumUpColumn('BOT') }
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
                className="text-red-600 text-center align-middle"
              >
                { sumUpColumn('MOT') }
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
                className="text-red-600 text-center align-middle"
              >
                { sumUpColumn('EOT') }
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
                className="text-black text-center align-middle text-sm"
              >
                { thematicReportData.Total_Comment }
              </td>
            </tr>
          </tbody>
        </table>

        {/* CONCLUSION */}
        <section className="w-full conclusion">
          {/* Class teacher's comment */}
          <div
            style={{ paddingTop: '13.333px', paddingLeft: '12px', textIndent: '0px', textAlign: 'left', lineHeight: '26px' }}
            className="py-2"
          >
            <span className="font-bold">CLASS TEACHER’S COMMENT ON LIFE SKILLS AND VALUES (INDICATORS)</span>
            <span
              style={{
                width: '750px',
                borderBottomStyle: 'dotted',
                borderBottomWidth: '2.667px',
                borderBottomColor: '#AC4888'
              }}
              className="-mt-1 pl-2 text-black"
            >
              <span className={`text-base ${thematicReportData.Class_Teacher_Comment ? 'text-black' : 'text-transparent'}`}>
                {thematicReportData.Class_Teacher_Comment ? thematicReportData.Class_Teacher_Comment : blankComment}
              </span>
              <span style={{ 'float': 'right' }}>
                <span
                  className="pr-3 font-bold"
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
                  { thematicReportData.Class_Teacher_Signature }
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
            className="py-2"
          >
            <div className="flex justify-between">
              <span className="font-bold">PUPIL’S CONDUCT&nbsp;</span>
              <span
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 pl-3 text-black overflow-hidden grow"
              >
                { thematicReportData.Pupil_Conduct }
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
            className="py-2"
          >
            <div className="flex justify-between">
              <span className="font-bold">GENERAL COMMENTS&nbsp;</span>
              <span
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 pl-3 text-black overflow-hidden grow"
              >
                { thematicReportData.General_Conduct }
              </span>
            </div>
          </div>
          {/* Teacher's name and signature */}
          <div
            className="flex justify-between py-2"
            style={{
              paddingTop: '8px',
              paddingLeft: '12px',
              lineHeight: '100%',
            }}
          >
            <div className="flex">
              <span className="font-bold">TEACHER’S NAME&nbsp;</span>
              <div
                style={{
                  width: '370px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-black overflow-hidden"
              >
                { thematicReportData.Class_Teacher_Name }
              </div>
            </div>
            <div className="flex grow">
              <span className="font-bold">SIGNATURE&nbsp;</span>
              <div
                style={{
                  width: '100%',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-black overflow-hidden"
              >
                { thematicReportData.Class_Teacher_Signature }
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
            className="py-2"
          >
            <div className="flex justify-between">
              <span className="font-bold">HEADTEACHER’S COMMENT&nbsp;</span>
              <span
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 pl-3 text-black overflow-hidden grow"
              >
                { thematicReportData.Head_Teacher_Comment }
              </span>
            </div>
          </div>
          {/* Headteacher's name and signature */}
          <div
            className="flex justify-between py-2"
            style={{
              paddingTop: '8px',
              paddingLeft: '12px',
              lineHeight: '100%',
            }}>
            <div className="flex">
              <span className="font-bold">HEADTEACHER’S NAME&nbsp;</span>
              <div
                style={{
                  width: '370px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-black overflow-hidden"
              >
                { thematicReportData.Head_Teacher_Name }
              </div>
            </div>
            <div className="flex grow">
              <span className="font-bold">SIGNATURE&nbsp;</span>
              <div
                style={{
                  width: '100%',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-black overflow-hidden"
              >
                { thematicReportData.Head_Teacher_Signature }
              </div>
            </div>
          </div>
          {/* Fees details */}
          <div
            className="flex justify-between py-2"
            style={{
              paddingTop: '8px',
              paddingLeft: '12px',
              lineHeight: '100%',
            }}>
            <div className="flex">
              <span className="font-bold">BALANCE TERM&nbsp;</span>
              <div
                style={{
                  width: '320px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className={`-mt-1 text-center font-bold overflow-hidden ${thematicReportData.Balance_Term === 0 ? 'text-black' : 'text-red-600'}`}
              >
                UGX { formatToUgandanShillings(thematicReportData.Balance_Term) }
              </div>
            </div>
            <div className="flex grow">
              <span className="font-bold">NEXT TERM FEES&nbsp;</span>
              <div
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center font-bold text-blue-500 overflow-hidden grow"
              >
                UGX { formatToUgandanShillings(thematicReportData.Next_Term_Fees) }
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
            className="py-2"
          >
            <div className="flex justify-between">
              <span className="font-bold">REQUIREMENTS&nbsp;</span>
              <span
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 pl-3 text-black overflow-hidden grow"
              >
                { thematicReportData.Requirements }
              </span>
            </div>
          </div>
          {/* Next term dates */}
          <div
            className="flex justify-between py-2"
            style={{
              paddingTop: '8px',
              paddingLeft: '12px',
              lineHeight: '100%',
            }}>
            <div className="flex">
              <span className="font-bold">NEXT TERM BEGINS ON&nbsp;</span>
              <div
                style={{
                  width: '320px',
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-orange-600 font-bold overflow-hidden"
              >
                { formatDate(thematicReportData.Next_Term_Begins) }
              </div>
            </div>
            <div className="flex grow">
              <span className="font-bold">ENDS ON&nbsp;</span>
              <div
                style={{
                  borderBottomStyle: 'dotted',
                  borderBottomWidth: '2.667px',
                  borderBottomColor: '#AC4888'
                }}
                className="-mt-1 text-center text-orange-600 font-bold overflow-hidden grow"
              >
                { formatDate(thematicReportData.Next_Term_Ends) }
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

export default ThematicReport;