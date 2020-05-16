import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import './App.css';

class Summary extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { 
      firstname, 
      lastname,  
      email, 
      phone,  
      coursesChosenSummary,
      chosenLevel,
      submitData,
    } = this.props;

    return (
      <div className='form'>
        <div>
          <Stepper
            steps={[{ label: 'Personal details' }, { label: 'Course details' }, { label: 'Summary' }]}
            activeStep={2}
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

          <div className='summary'>
            <h2 className='summary__heading'>Confirm your personal details</h2>
            <div>
              <div>
                <p><span className='summary__item-title'>First and last name:</span> { firstname } { lastname }</p>
              </div>
              <div>
                <p><span className='summary__item-title'>Email:</span> { email }</p>
              </div>
              <div>
                <p><span className='summary__item-title'>Phone:</span> { phone }</p>
              </div>
            </div>
          </div>

          <div className='summary'>
            <h2 className='summary__heading'>Confirm your course details</h2>
            <div>
              <div>
                <p><span className='summary__item-title'>Level:</span> { chosenLevel }</p>
              </div>
              <div>
                <div><span className='summary__item-title'>Courses:</span> { coursesChosenSummary }</div>
              </div>
            </div>
          </div>

          <div className='buttons'>
            <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' type='submit' onClick={submitData}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Summary;