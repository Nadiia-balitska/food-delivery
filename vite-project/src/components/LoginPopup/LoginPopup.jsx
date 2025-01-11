import { assets } from "../../assets/frontend_assets/assets";
import "./LoginPopup.css";
import { useState } from "react";
export const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login_popup">
      <form className="login_popup_container">
        <div className="login_popup_title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login_popup_input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text " placeholder="Your Name" required />
          )}
          <input type="email " placeholder="Your Email" required />
          <input type="password " placeholder="Your Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login_popup_condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy. </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};
