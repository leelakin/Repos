import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addRepo } from '../actions'
import './repo_form.css'

class RepoForm extends Component {
  state = {
    user: '',
    repoName: ''
  }

  render() {
    return (
      <div className="repo-form">
        <p>Enter GitHub repository to analyze</p>
        <div className="field">
          <label htmlFor="user_name">Username</label>
          <input id="user_name" value={this.state.user} onChange={(e) => this.setState({user: e.target.value})} />
        </div>
        <div className="field">
          <label htmlFor="repo_name">Repo Name</label>
          <input id="repo_name" value={this.state.repoName}  onChange={(e) => this.setState({repoName: e.target.value})}/>
        </div>

        <div className="field message">
          {this.props.msg}
        </div>

        <button onClick={() => this.props.addRepo(this.state)}>Analyze</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {msg: state.errorMsg}
}

export default connect(mapStateToProps, { addRepo })(RepoForm)