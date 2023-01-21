import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { Container } from "react-bootstrap"
import { NewNote } from "./NewNote"
import { Routes, Route, Navigate } from "react-router-dom"

function App() {
	const [count, setCount] = useState(0)

	return (
		<Container className="my-4">
			<Routes>
				<Route path="/" element={<h1>This is home</h1>} />
				<Route path="/new" element={<NewNote />} />
				<Route path="/*" element={<Navigate to="/" />} />
				<Route path="/:id">
					<Route index element={<h2>show id</h2>} />
					<Route path="edit" element={<h2>edit</h2>} />
				</Route>
			</Routes>
		</Container>
	)
}

export default App
