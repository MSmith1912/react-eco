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
                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);