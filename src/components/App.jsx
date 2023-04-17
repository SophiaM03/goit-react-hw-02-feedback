import React, { Component } from 'react';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistics';
import Notification from '../components/Notification/Notification';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good * 100) / total) || 0;
  }

  render() {
    const percentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          changeFeedback={this.changeFeedback}
        />
        {total ? (
          <Statistic
            state={this.state}
            countPositiveFeedbackPercentage={percentage}
            countTotalFeedback={total}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
