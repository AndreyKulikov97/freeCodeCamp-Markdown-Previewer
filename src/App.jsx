import { useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'
import markdownDefault from './markdofnDefauld'


function App() {
  const [text, setText] = useState(markdownDefault)

	return (
		<>
			<h1 className='title'>Markdown Previewer</h1>
			<div className='container'>
				<textarea
					id='editor'
					value={text}
					onChange={e => setText(e.target.value)}
				></textarea>
				<div id='preview'>
					<ReactMarkdown>{text}</ReactMarkdown>
				</div>
			</div>
		</>
	)
}

export default App
