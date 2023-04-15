import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section"
import Notification from "./Notification/Notification"
export class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  buttonClick = ({target:{name}}) => {
    this.setState({[name]:this.state[name]+1})
    
  };
  countTotalFeedback = () => {
     
   
    const initialValue = 0;
    const sumWithInitial = Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    return (sumWithInitial)
  }
  countPositiveFeedbackPercentage = () => {
   
    const positiveFeedback = this.countTotalFeedback();
    
    return isNaN(this.state.good/positiveFeedback * 100) ? 0 : (this.state.good/positiveFeedback * 100).toFixed(0);
  }
 
      render () {
        
       
      return (
        <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
      
      <FeedbackOptions options = {this.buttonClick} />
      </Section>
      
      <Section title="Statistics">
      {this.countTotalFeedback() === 0 ?
      <Notification message="There is no feedback"></Notification>
:
      <Statistics good = {this.state.good} neutral = {this.state.neutral} bad = {this.state.bad} total = {this.countTotalFeedback} positiveFeedback = {this.countPositiveFeedbackPercentage} ></Statistics>}
      </Section>
      
      </div>
      
      
   
  
    )}}
