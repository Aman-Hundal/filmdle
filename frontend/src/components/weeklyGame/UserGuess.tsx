import "../styles/UserGuess.css";
import {useState} from 'react';

const UserGuess = (props: any) => {
  const [guess, setGuess] = useState("");
  return (
    <form onSubmit={event => setGuess(event.toString())} autoComplete="off">
      <div className="user-input">
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        {/* <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input>
        <input type="text"  maxLength={1} className="input-boxes"></input> */}
      </div>
    </form>
  )
};

export default UserGuess;