import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  let friend = ["al - Masud", "Joni"];
  let myName = "Abdullah al - Masud"
  let arry = {
    name: "Masud",
    id: "Rana"
  }
  let arry2 = {
    name: "Abdullah",
    id: "al"
  }
  var styles = {
    padding: "10px",
    backgroundColor: "green",
    borderRadius: "5px"
  }
  let friends = ["Masud", "Abdullah", "Roni", "Joni", "Kamal"]
  let arruObj = [
    { name: "Abdullah", Id: 12, Role: "Job Creator" },
    { name: "Masud", Id: 32, Role: "Besenesman" },
    { name: "Abdullah", Id: 12, Role: "Freelencer" },
    { name: "Roni", Id: 12, Role: "Freelencer" }
  ]
  let allName = arruObj.map(names => names.name);
  console.log(allName);

  let allNamee = ["Abdullah", "Masud", "Marruf", "Joni", "Roni", "Haydar", "jammal", "kahalek", "Abdur-Jabbar", "Abdullah al Masud"];
  console.log(allName);
  return (

    <div className="App">
      <header className="App-header">

        <UseStates></UseStates>

        <States></States>
        <ul>
          {
            allNamee.map(params => <li>{params}</li>)
          }
          <br />
          {
            arruObj.map(datas => <li>{datas.name}</li>)
          }

          <br />
          <li>{allNamee[0]}</li>
          <li>{allNamee[1]}</li>
          <li>{allNamee[2]}</li>
          <li>{allNamee[3]}</li>
        </ul>
        <MestaringObject allName={allName} persone={arruObj} friendsName={friends[1]} product="Windows" price="$12,000" Desciption="It’s Cyber Monday savings time. Big time. Get over 25% off Creative Cloud All Apps for teams."></MestaringObject>

        <MestaringObject allName={allName} persone={arruObj} friendsName={friends[3]} product="Photoshop" price="$2,000" Desciption="It’s Cyber Monday savings time. Big time. Get over 25% off Creative Cloud All Apps for teams."></MestaringObject>

        <Compo lastName={friend[0]} FirstName="Abdullah" WhatsherRole="He is a jr. Web Developer" thanks="Thank you" ></Compo>
        <br />
        <Compo lastName="Nayem" FirstName="Shaikat" WhatsherRole="He is a good teacher" thanks="Thank you" toAll="all of you"></Compo>
        <br />
        <Compo lastName="Mahamud" FirstName="Zakaria" WhatsherRole="He is a profetional Capabaj" thanks="Thank you"></Compo>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit your first React <code>src/App.js</code> and save to reload.
        </p>




        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My first React paragraph</p>
        <h1 style={styles}>Abdullah al- Masud</h1>
        <h2 className='color'>{(3 + 2 - 5) + 10 / 2 * 2}</h2>
        <h3>{myName}</h3>
        <h4 style={{ padding: "10px", backgroundColor: "green", borderRadius: "5px" }}>{arry.name + " " + arry.id} </h4>
        <h4 style={{ backgroundColor: "#009e79", color: "#fff", padding: "10px", borderRadius: "5px" }}>{arry2.name} {arry2.id} - Masud</h4>
      </header>
    </div>
  );
}

function Compo(props) {
  let style = {
    backgroundColor: "#009e79", color: "#fff", padding: "10px", borderRadius: "5px",
    boxShadow: "4px 4px 10px #51c2ae"
  }
  let style2 = {
    backgroundColor: "#ff5722", color: "#fff", padding: "10px", borderRadius: "5px",
    boxShadow: "rgb(211 66 66) 4px 4px 10px"
  }
  let style3 = {
    backgroundColor: "#ff2295", color: "#fff", padding: "10px", borderRadius: "5px",
    boxShadow: "rgb(231 40 148) 4px 4px 10px"
  }
  return (
    <div style={{ backgroundColor: "#b7aa15", padding: "10px", borderRadius: "10px", boxShadow: "rgb(99 220 57) 4px 4px 10px" }}>
      <h1 style={style}>{props.FirstName + " " + props.lastName}</h1>
      <h4 style={style2}>{props.WhatsherRole}</h4>
      <h4 style={style3}>{props.thanks} {props.toAll}</h4>
    </div>

  )
}

function MestaringObject(props) {
  let css = {
    backgroundColor: "green",
    padding: "5px",
    borderRadius: "10px"
  }
  let { product, price, Desciption, friendsName } = props;
  return (
    <div style={{ backgroundColor: "red", borderRadius: "10px", padding: "10px", marginBottom: "20px" }}>
      <h1 style={css}>{props.allName}</h1>
      <h1 style={css}>{product}</h1>
      <h1 style={css}>{price}</h1>
      <h1 style={css}>{Desciption}</h1>
      <h1 style={css}>{friendsName}</h1>
      {/* <h1 style={css}>{props.persone}</h1> */}
    </div>
  )

}

function UseStates() {
  const [count, setCount] = useState(10);
  let handelHere = () => {
    // console.log("Clckd");
    let newCounts = count + 1;
    setCount(newCounts);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handelHere}>Plus!</button>
      <button onClick={() => setCount(count - 1)}>Minus!</button>
    </div>
  )
}

function States() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(1000);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  })
  return (
    // <h1>users: {users.length}</h1>
    <div>
      <ul>
        {
          users.map(data => <li>{data.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
