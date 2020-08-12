import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state.quiz,
    ...state.mode,
    ...state.pager

});

const mapDispatchToProps = dispatch => ({
    onAnswer: payload => dispatch({ type: 'QUIZ_ANSWER', payload })
});

class Questions extends Component {
    onAnswer() {

    }

    render() {
        let questions = (this.props.quiz.questions);

        return (
            <div id="quiz">
                <h2>{this.state.quiz.name}</h2>
                {questions.map(q =>
                    <div key={q.id}>
                        <div className="badge badge-info">Question {this.props.pager.index + 1} of {this.props.pager.count}.</div>
                        <h3 className="font-weight-normal">{this.props.pager.index + 1}. <span>{q.name}</span></h3>
                        <div className="row text-left options">
                            {
                                q.options.map(option =>
                                    <div key={option.id} className="col-6">
                                        <div className="option">
                                            <label className="font-weight-normal" htmlFor={option.id}>
                                                <input id={option.id} checked={option.selected} type="checkbox" onChange={() => this.onAnswer(q, option)} />
                                                {option.name}
                                            </label>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);