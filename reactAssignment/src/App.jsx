import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TeamMember from './TeamMember';
import styles from './Button.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { useFetch } from './useFetch';

function App() {
  const [count, setCount] = useState(0)
  const [likes,setLikes]=useState(0);
  const [email,setEmail]=useState('');
  const [isDay,setIsDay]=useState(true);
  const [items]=useState(['Bread', 'Milk', 'Eggs']);
  const [posts,setPosts]=useState([]);
  const {data,loading}=useFetch('https://jsonplaceholder.typicode.com/users');

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response=>response.json())
  //   .then(data=>setPosts(data));
  // },[]);

  useEffect(()=>{
    const fetchData=async()=>{
      const data=await fetch('https://jsonplaceholder.typicode.com/posts');
      const response=await data.json();
      setPosts(response);
    }
    fetchData();
  },[]);

  if(loading){
            return <p>Loading...</p>
          }

  return (
    <div className="App">
      <div> 
        <h1>Project Showcase</h1>
        <p>Your gateway to amazing design projects.</p>
      </div>

      <div>
        <p>Total Likes: {likes}</p>
        <button onClick={()=>setLikes(likes+1)}>Like</button>
      </div>

      <div>
        <label >Enter your email:
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <p>Subscribed email:{email} </p>
      </div>

      <div>
        <button onClick={()=>setIsDay(!isDay)}>Switch to {isDay ? 'Night' : 'Day'} Mode</button>
        <p>Current mode: {isDay?'Day':'Night'} </p>
      </div>

      <div>
        <TeamMember name="Samantha"></TeamMember>
        <TeamMember name="Raj" />
        <TeamMember name="Liu" />
      </div>

      <div>
        <ul>
          {items.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1 style={{color:'red',textAlign:'center'}}>Join Our Newsletter</h1>
        <button className={styles.ctaButton}>Subscribe</button>
      </div>

      <div>
        <ul>
          {posts.map((post)=>(
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <Router>
          <nav>
            <Link to="/">Home</Link><br></br>
            <Link to="/about">About</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
        </Router>
      </div>

      <div>
          <ul>
            {data.map((user)=>(
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
      </div>

    </div>
    
  )
}

export default App
