'use client'

// handle sibling and children page.js errors
// must be a client component
function Error(){
	return <main className="error">
		<h1>An error occurred!</h1>
		<p>Failed to fetch meal data. Please try again later.</p>
	</main>
}

export default Error;