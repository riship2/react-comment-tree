import React from 'react'

export const Comments = (props) => {

  const { comments } = props

  return <>
    {
      (comments || []).map((comment, i) => (
        <>
          <div>{comment.text}</div>
          <><Comments comments={comment.childComments} /></>
        </>
      ))
    }
  </>
}
