import React, { Component } from 'react'
import PropTypes from 'prop-types'
import API from '../API';
import '../css/PostDetails.css'

export default class PostDetails extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  constructor(props) {
    super(props)

    this.state = {
      post: {},
      comments: [],
      postedBy: {},
    }
  }

  componentDidMount = async () => {
    try {
      const promise1 = this.getPostWithUser()
      const promise2 = this.getComments()
      await Promise.all([promise1, promise2])
    } catch (err) {
      console.error(err)
    }
  }

  getPostWithUser = async () => {
    try {
      const post = (await API.getPost(this.props.match.params.postId)).data  
      this.setState({ post })
      const postedBy = (await API.getUser(post.userId)).data
      this.setState({ postedBy })
    } catch (err) {
      throw err
    }
  }

  getComments = async () => {
    try {
      const commentsResponse = await API.getPostComments(this.props.match.params.postId)
      this.setState({ comments: commentsResponse.data })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { post, postedBy, comments } = this.state
    return (
      <div className="post-details container">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Posted by {postedBy.name}</p>

        <div className="comments">
          <h3>Comments</h3>
          <ul className="list">
            {comments.map(comment => (
              <li key={comment.id}>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
