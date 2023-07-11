import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClicked = type =>
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  // onBtnGoodClicked = () =>
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //     // total: this.good + this.neutral + this.bad,
  //   }));

  // onBtnNeutralClicked = () =>
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  // onBtnBadClicked = () =>
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));

  // countTotalFeedback = () => ({
  //   total: this.state.good + this.state.neutral + this.state.bad,
  // });

  // countPositiveFeedbackPercentage = () => ({});

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Please Leave feedback</h1>
        <button type="button" onClick={this.onBtnGoodClicked}>
          Good
        </button>
        <button type="button" onClick={this.onBtnNeutralClicked}>
          Neutral
        </button>
        <button type="button" onClick={this.onBtnBadClicked}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {good} </p>
        <p>Neutral: {neutral} </p>
        <p>Bad:{bad} </p>
        <p>Positive feedback: </p>
      </div>
    );
  }
}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
