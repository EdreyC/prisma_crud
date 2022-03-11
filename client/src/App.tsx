import { useEffect, useState } from 'react'
import axios from "axios"
import "./styles/app.css"
import Post from './components/Post';

type Post = {
  content: string;
}


function App() {
  
  const url = "http://localhost:3001/posts"
  const [inputPost, setInputPost] = useState("");
  const [lenghtPost, setLenghtPost] = useState(300);
  const [post, setPost] = useState<Post[]>([])

  async function get() {
    await axios.get(url).then(response => {
      setPost(response.data)
      console.log(post)
    })
  }
  async function create() {
    await axios.post(url, {
      content: inputPost
    })
    get();
  }
  useEffect(() => {
    get();
  }, [])



  return (
    <div className="App">
      <div className='create-post'>
        <h1>Create your post here</h1>
        <textarea onChange={(e) => {
          setInputPost(e.target.value)
          setLenghtPost(e.target.value.length)
        }}
          value={inputPost}
          maxLength={300}

        />
        <span>{300-lenghtPost}</span>
        <button onClick={create}>Enviar</button>

      </div>

      <ul>
        {
          post.map(item => (
            <Post>{item.content}</Post>
          ))
        }
      </ul>

    </div>
  )
}

export default App
