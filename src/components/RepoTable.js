import React, { Component } from 'react'
import { connect } from 'react-redux'

import './repo_table.css'

class RepoTable extends Component {

  getRepoData() {

    return this.props.repos.map((repo, index) => {
      console.log('repo pulls', repo.pulls)
      return (
        <div className="row" key={repo.url + index}>
          <div className="cell data">{repo.url}</div>
          <div className="cell data">{repo.commits}</div>
          <div className="cell data">{repo.pulls}</div>
        </div>
      )})
  }

  render() {
    console.log('this.props.repos', this.props.repos)
    return this.props.repos.length > 0 ?
      <div className="repo-table">
        <div className="table">
          <div className="headers">
            <div className="cell">URL</div>
            <div className="cell">Commits</div>
            <div className="cell">Pulls</div>
          </div>
          <div className="table-content">
            {this.props.repos ? this.getRepoData() : null}
          </div>
        </div>
      </div>
    :
      null
  }
}

const mapStateToProps = (state) => {
  return {repos: state.allRepos}
}

export default connect(mapStateToProps)(RepoTable)