import React from 'react'

export const Comments = (props) => {

  const { comments } = props

  return <>
    {
      (comments || []).map((comment, i) => (
        <div className='comment'>
          <div>{comment.text}</div>
          <><Comments comments={comment.childComments} /></>
        </div>
      ))
    }
  </>
}
