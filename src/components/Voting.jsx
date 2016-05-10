import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import Winner from './Winner'
import Vote from './Vote'

// Voting is the "dumb" pure functional component.
export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    // ref is used as a selector in unit tests
    return <div>
      {this.props.winner
        ? <Winner ref='winner' winner={this.props.winner} />
        : <Vote {...this.props} />}
    </div>
  }
})

function mapStateToProps (state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}

connect(mapStateToProps)(Voting)

// VotingContainer is the "smart" connected Voting component. It wraps the
// "dumb" Voting component with react-redux logic that keeps it in sync with the
// Redux Store.
export const VotingContainer = connect(mapStateToProps)(Voting)
