import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button type="button" onClick={() => this.onBtnClicked('good')}>
        Good
      </button>
      <button type="button" onClick={() => this.onBtnClicked('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => this.onBtnClicked('bad')}>
        Bad
      </button>
    </div>
  );
};
