import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react";


function App() {

  const [post, setPost] = React.useState([]);


 

  React.useEffect(() => {
    const interval = setInterval(() => {
      axios.get('http://localhost:8000/api/get/')
      .then((res) => {
          const response = res.data;
          setPost(response);
          
      })
      .catch(function (error) {
          console.log(error);
        
      });
       
    
      
    }, 5000);

    return () => clearInterval(interval);
    
  }, []);

  let tbody = [];
  post.map((data,index)=>{
    
    tbody.push(
      <tr>
        <td><img src={'http://127.0.0.1:8000/'+data.image} height="100" width="100"></img></td>
        <td>{data.date.slice(0,10).split("-").reverse().join("-")}</td>
        <td>{data.date.slice(11,16)}</td>
      </tr>
    )

  })


  return (
    <div className="App">
      <header className="App-header">
    <img src='http://127.0.0.1:8000/api/'></img>
        <table>
          <tr>
            <th>Image</th>
            <th>Date</th>
            <th>Time</th>
            </tr>
            <tbody>
                 {tbody}
            </tbody>
            </table>
            
      </header>
    </div>
  );
}

export default App;
