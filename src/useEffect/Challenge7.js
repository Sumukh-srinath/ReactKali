import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Challenge7() {
    // const arr = [4, 3, 5, 6, 2, 9, 1]
    const [response, setResponse] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function responseFunction() {
            try {
                setIsLoading(true)
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
                setResponse(res.data)
            }
            catch (e) {
                alert("Its an error")
            }
            finally {
                setIsLoading(false)
            }

        }
        responseFunction()
    }, [])


    return (
        <div>
            <h4>
                Challenge 2: Fetch Data with Loading State
                Task:
                Create a React component that:

                Fetches data from a public API (e.g., https://jsonplaceholder.typicode.com/posts/1) when the component mounts.
                Displays a "Loading..." message while the data is being fetched.
                Once the data is fetched, displays the title and body of the post.
                Requirements:

                Use useState to manage the data and loading state.
                Use useEffect to fetch the data when the component mounts.
                Include error handling in case the fetch request fails.

            </h4>
            {isLoading ? <h1>Loading.....</h1> :
                <ul>
                    <li>userId:  {response.userId}</li>
                    <li>title:  {response.title}</li>
                    <li>body:  {response.body}</li>
                </ul>
            }

            {/* {response} */}

        </div>
    )
}

export default Challenge7