import React, { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
function SignUp() {

  const [userInput, setUserInput] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("usersData")) ?? [];

    localStorage.setItem("usersData", JSON.stringify([...data, userInput]));

    setUserInput({
      name: "",
      phone: "",
      email: "",
      password: "",
    });
  }

  return (
    <section>
      <div className={style.container}>
        <div className={style.box}>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.passwordDiv}>
              <p className={style.password}>First Name</p>
              <input
                value={userInput.name}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, name: e.target.value }))
                }
                className={style.passwordInp}
                type="text"
                placeholder="dadaxon"
              />
            </div>
            <div className={style.passwordDiv}>
              <p className={style.password}>Phone number</p>
              <input
                value={userInput.phone}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, phone: e.target.value }))
                }
                className={style.passwordInp}
                type="number"
                placeholder="+998993932929"
              />
            </div>
            <div className={style.passwordDiv}>
              <p className={style.password}>Email</p>
              <input
                value={userInput.email}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, email: e.target.value }))
                }
                className={style.passwordInp}
                type="email"
                placeholder="username@gmail.com"
              />
            </div>
            <div className={style.passwordDiv}>
              <p className={style.password}>Password</p>
              <input
                value={userInput.password}
                onChange={(e) =>
                  setUserInput((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                className={style.passwordInp}
                type="password"
                placeholder="Password"
              />
            </div>
            <button  className={style.submitBtn} type="submit">
              Submit
            </button>
          </form>

          <Link to={"/"} className={style.a}>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
