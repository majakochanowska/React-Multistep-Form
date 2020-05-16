import React, { Component } from 'react';

import PersonalDetails from './PersonalDetails';
import CourseDetails from './CourseDetails';
import Summary from './Summary';

class Form extends Component {
  state = {
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    courses: [],
    level: '',
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    })
  }

  addLevel = e => {
    const levelChosen = e.target.value;
    this.setState({
      level: levelChosen
    });
  };

  addCourse = data => {
    const id = data.map(v => v.id);
    this.setState({
      courses: id
    })
  };

  submitData = e => {
    e.preventDefault();
    alert('Data sent');
  }

  render() {

    const {
      step,
      firstname,
      lastname,
      email,
      phone,
      courses,
      level,
    } = this.state;

    //Sample data
    const coursesData = [
      {
        id: 1,
        courseName: 'HTML',
        category: 'Front-end'
      },
      {
        id: 2,
        courseName: 'CSS',
        category: 'Front-end'
      },
      {
        id: 3,
        courseName: 'JavaScript',
        category: 'Front-end'
      },
      {
        id: 4,
        courseName: 'React',
        category: 'Front-end'
      },
      {
        id: 5,
        courseName: 'Angular',
        category: 'Front-end'
      },
      {
        id: 6,
        courseName: 'Vue',
        category: 'Front-end'
      },
      {
        id: 7,
        courseName: 'Java',
        category: 'Back-end'
      },
      {
        id: 8,
        courseName: 'Python',
        category: 'Back-end'
      },
      {
        id: 9,
        courseName: 'PHP',
        category: 'Back-end'
      },
      {
        id: 10,
        courseName: 'Express',
        category: 'Back-end'
      }       
    ];

    const levelsData = ['Beginner', 'Intermediate', 'Advanced'];

    const coursesOptions = coursesData.map(el => ({
      course: el.courseName,
      id: el.id,
      category: el.category
    }));

    const coursesChosen = coursesData.filter(el => courses.includes(el.id));
    const coursesChosenSummary = coursesChosen.map(el => (
      <p key={el.id}>
        {el.courseName} - {el.category} 
      </p>
    ));

    const chosenLevel = level;
    
    const levelOptions = levelsData.map((el, index) => (
      <option key={index} value={el}>
        {el}
      </option>
    ));

    
    switch(step) {
      case 1: 
        return (
          <PersonalDetails 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            firstname={firstname}
            lastname={lastname}
            email={email}
            phone={phone}
          />
        )
      case 2:
        return (
          <CourseDetails 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addCourse={this.addCourse}
            coursesOptions={coursesOptions}
            addLevel={this.addLevel}
            levelOptions={levelOptions}
            level={level}
          />
        )
      case 3:
        return (
          <Summary 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            firstname={firstname}
            lastname={lastname}
            email={email}
            phone={phone}
            coursesChosenSummary={coursesChosenSummary}
            chosenLevel={chosenLevel}
            submitData={this.submitData}
          />
        )
    }
  }
}

export default Form;
