import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnGoodClicked = () =>
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: this.good + this.neutral + this.bad,
    }));

  onBtnNeutralClicked = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  onBtnBadClicked = () =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));

  render() {
    const { good, neutral, bad, total } = this.state;
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
        <p>Total:{total} </p>
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
