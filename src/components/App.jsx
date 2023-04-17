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

  changeFeedback = e => {
    const {
      target: { name },
    } = e;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
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
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          changeFeedback={this.changeFeedback}
        />
        {this.countTotalFeedback() ? (
          <Statistic
            state={this.state}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            countTotalFeedback={this.countTotalFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
