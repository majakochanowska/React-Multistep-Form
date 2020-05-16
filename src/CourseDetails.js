import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';

import MaterialTable from 'material-table';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class CourseDetails extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.addCourse !== nextProps.addCourse || this.props.level !== nextProps.level ) {
      return true;
    } else {
      return false;
    }
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { 
      coursesOptions,
      levelOptions,
      addCourse, 
      addLevel,
      level,
    } = this.props;

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#003487',
        },
        secondary: {
          main: '#003487',
        },
      },
      overrides: {
        MuiPaper: {
          elevation2: {
            boxShadow: 'none',
          },
        },
        MuiInput: {
          underline: {
            '&:before': {
              borderBottom: 'none'
            },
            '&:after': {
              borderBottom: 'none'
            },
            '&:hover': {
              '&:not(.Mui-disabled)': {
                '&:before' : {
                  borderBottom: 'none'
                }
              }
            }
          }
        },
        MuiTableRow: {
          root: {
            '&:nth-child(even)': {
              backgroundColor: '#ebebeb'
            }
          }
        },
        MuiTypography: {
          h6: {
            fontSize: '1rem',
            color: '#011b64'
          }
        },
        MuiToolbar: {
          root: {
            borderBottom: '1px solid grey',
            backgroundColor: '#fafafa'
          },
          gutters: {
            paddingLeft: '3px'
          }
        }
      },
    });

    const columns = [
      {
        title: 'course',
        field: 'course',
      },
      {
        title: 'category',
        field: 'category'
      }
    ];

    return (
      <div className='form'>
        <form>

          <Stepper
            steps={[{ label: 'Personal details' }, { label: 'Course details' }, { label: 'Summary' }]}
            activeStep={1}
            styleConfig={{
              activeBgColor: '#2b7cff',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#fff',
              completedTextColor: '#2b7cff',
              size: '3em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

          <div className='select'>
            <select
              name='select'
              onChange={addLevel}
              className='select__item'
              value={level}
            >
              <option value='null'>Choose course level</option>
              {levelOptions}
            </select>
          </div>

          <div className='table'>

            <MuiThemeProvider theme={theme}>
              <MaterialTable
                title='Choose courses'
                columns={columns}
                data={coursesOptions}
                onSelectionChange={addCourse}
                options={{
                  search: true,
                  selection: true,
                  paging: false,
                  toolbar: true,
                  showTextRowsSelected: false,
                  searchFieldStyle: {
                    position: 'absolute',
                    top: '-20px',
                    right: '-7px',
                    width: '200px',
                    backgroundColor: '#fff',
                    border: '1px solid grey',
                    padding: '3px 5px',
                    borderRadius: '3px',
                  },
                  headerStyle: {
                    display: 'none',
                  },
                }}
              />
            </MuiThemeProvider>

          </div>

          <div className='buttons'>
            <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </div>

        </form>
      </div>
    )
  }
}

export default CourseDetails;