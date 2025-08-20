import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import parse from 'html-react-parser'
import DocumentServices from '../../Services/docs'
import Button from '../../assets/button/Button'
import './Post.css'

const Post = ({ title, content, writer }) => {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (id) {
      DocumentServices.get(id).then((res) => {
        if (res) setPost(res)
      })
    }
  }, [id])

  if (!post) return <p>Loading...</p>

  return (
    <>
    <div id="post_post">
      <div id="Post_title">{post.title || title}</div>
      <div id="Post_content">{parse(post.content || content || '')}</div>
      <div id="Post_writer">Written by {post.writer || writer}</div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/Allpost">
          <Button
            type="button"
            width="10vw"
            work="Back to Posts"
            bgcolor="ff6200"
          />
        </Link>
      </div>
    </div>
  )
}

export default Post
