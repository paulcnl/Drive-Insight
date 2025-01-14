import "./Log.css";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

function Log() {
  return (
    <div className="log-container">
      <SignIn />
      <div className="separateur">
        <hr />
        <p>ou</p>
        <hr />
      </div>
      <SignUp />
    </div>
  );
}

export default Log;
