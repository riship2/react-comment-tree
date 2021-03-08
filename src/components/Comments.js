import React from 'react'

export const Comments = (props) => {

  const { comments } = props

  return <>
    {
      (comments || []).map((comment, i) => (
        <div className='comment-container'>
          {/* todo - make border clickable next (for collapsible) */}
          {/* <a href='#'> */}
            <div className='comment-link'/>
          {/* </a> */}
          <div className='comment-content'>
            <div>{comment.text}</div>
            <><Comments comments={comment.childComments} /></>
          </div>
        </div>
      ))
    }
  </>
}
