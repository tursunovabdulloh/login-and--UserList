
import React, { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [userInput, setUserInput] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function validateInput() {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userInput.name.trim()) {
      errors.name = "Ism kerak";
    }
    if (!userInput.surname.trim()) {
      errors.username = "Foydalanuvchi nomi kerak";
    }
    const age = parseInt(userInput.age, 10);
    if (isNaN(age) || age < 0 || age > 120) {
      errors.age = "Yosh noto'g'ri, 0 va 120 orasida bo'lishi kerak";
    }
    if (!emailPattern.test(userInput.email)) {
      errors.email = "Email formati noto'g'ri";
    }
    if (userInput.password.length < 6) {
      errors.password = "Parol kamida 6 ta belgidan iborat bo'lishi kerak";
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateInput();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = JSON.parse(localStorage.getItem("usersData")) ?? [];
    localStorage.setItem("usersData", JSON.stringify([...data, userInput]));

    setUserInput({
      name: "",
      surname: "",
      age: "",
      email: "",
      password: "",
    });
    setErrors({});
  }

  return (
    <section>
      <div className={style.container}>
        <div className={style.box}>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.passwordDiv}>
              <p className={style.password}>Name</p>
              <input
                value={userInput.name}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, name: e.target.value }))
                }
                className={style.passwordInp}
                type="text"
                placeholder="Ikrom"
              />
              {errors.name && <p className={style.error}>{errors.name}</p>}
            </div>
            <div className={style.passwordDiv}>
              <p className={style.password}>Surname</p>
              <input
                value={userInput.surname}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, surname: e.target.value }))
                }
                className={style.passwordInp}
                type="text"
                placeholder="tursunov"
              />
              {errors.username && <p className={style.error}>{errors.username}</p>}
            </div>
            <div className={style.passwordDiv}>
              <p className={style.password}>Age</p>
              <input
                value={userInput.age}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, age: e.target.value }))
                }
                className={style.passwordInp}
                type="number"
                placeholder="25"
              />
              {errors.age && <p className={style.error}>{errors.age}</p>}
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
              {errors.email && <p className={style.error}>{errors.email}</p>}
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
              {errors.password && (
                <p className={style.error}>{errors.password}</p>
              )}
            </div>
            <button className={style.submitBtn} type="submit">
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
