import githubAPI from '../apis/githubApi'
import { ADD_REPO, SET_MSG } from './types'

//use redux-thunk & axios to return function returning dispatch manually
export const addRepo = ({ user, repoName }) => async dispatch => {
  //const repo = await githubAPI.get('/repos/leelakin/Art_Portfolio')
  // const commits = await githubAPI.get('/repos/leelakin/Art_Portfolio/commits')
  // const pulls = await githubAPI.get('/repos/leelakin/Art_Portfolio/pulls')
  let errorMsg

  if (!user || !repoName) {
    errorMsg = "Please enter the GitHub user and repository name"
  } else {
    try { 
      const repo = await githubAPI.get(`/repos/${user}/${repoName}`)
      const commits = await githubAPI.get(`/repos/${user}/${repoName}/commits`)
      const pulls = await githubAPI.get(`/repos/${user}/${repoName}/pulls`)
      errorMsg = ""
      dispatch({
        type: ADD_REPO,
        payload: {
          url: repo.data.url,
          avatar: repo.data.owner.avatar_url,
          commits: commits.data.length,
          pulls: pulls.data.length
        }
      })
    } catch(e) {
      errorMsg = "Repository not found. Please make sure of correct spelling and capitalisation."
    }
  }

  
  dispatch({
    type: SET_MSG,
    payload: errorMsg
  })
}