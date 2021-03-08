import './App.css';
import React from "react";
import { Comments } from './components/Comments'

import { testComments } from './resources/testComments.js'

const comments = testComments.comments

const App = () => {
  return <Comments comments={comments}></Comments>
}

export default App
