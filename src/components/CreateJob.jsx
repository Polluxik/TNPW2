import { useRef, useState } from "react";
import JobLayout from "./layout/JobLayout";
import classes from "./CreateJob.module.css";
import { onAuthStateChanged } from "firebase/auth";

import { auth, db } from "./firebase/firebase";
import { collection, doc, setDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

function CreateJob({ onAddJob }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredPay, setEnteredPay] = useState("");
  const [enteredProf, setEnteredProf] = useState("");

  const [logUser, setLogUser] = useState([]);

  const date = new Date();
  const currentDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const navigate = useNavigate();

  //kontroluje kdo je prihlaseny
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogUser(user);
    }
  });

  //vytvori novou nabidku v db
  const createJob = async (e) => {
    e.preventDefault();

    const randomId = doc(collection(db, "_")).id;

    setDoc(doc(db, "accounts", logUser.email, "jobslist", randomId), {
      title: enteredTitle,
      prof: enteredProf,
      pay: enteredPay,
      desc: enteredDesc,
    });

    setDoc(doc(db, "jobs", randomId), {
      title: enteredTitle,
      prof: enteredProf,
      pay: enteredPay,
      desc: enteredDesc,
      mail: logUser.email,
    });
    navigate("/", { replace: true });
  };

  //funkce ktere nastavi UseState
  function titleChange(event) {
    setEnteredTitle(event.target.value);
    //console.log(enteredTitle);
  }
  function descChange(event) {
    setEnteredDesc(event.target.value);
  }
  function payChange(event) {
    setEnteredPay(event.target.value);
  }
  function profChange(event) {
    setEnteredProf(event.target.value);
  }

  function submitFunc(event) {
    event.preventDefault();

    const jobData = {
      title: enteredTitle,
      desc: enteredDesc,
      date: currentDate,
      pay: enteredPay,
      prof: enteredProf,
    };

    //console.log(jobData);
    onAddJob(jobData);
  }

  return (
    <JobLayout>
      <form className={classes.form} onSubmit={submitFunc}>
        <div>
          <label htmlFor="title">Název</label>
          <br></br>
          <input
            type="text"
            required
            id="title"
            onChange={titleChange}
            className="input"
          ></input>
        </div>
        <div>
          <label htmlFor="prof">Profese</label>
          <br></br>
          <input
            type="text"
            required
            id="prof"
            onChange={profChange}
            className="input"
          ></input>
        </div>
        <div>
          <label htmlFor="desc">Informace</label>
          <br></br>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            cols="20"
            onChange={descChange}
            className="textarea"
          ></textarea>
        </div>
        <div className="num">
          <label htmlFor="pay">Plat</label>
          <br></br>
          <input
            type="number"
            required
            id="pay"
            onChange={payChange}
            className="input"
          ></input>
        </div>
        <div>
          <button onClick={createJob} className="button">
            Vytvoř nabídku
          </button>
        </div>
      </form>
    </JobLayout>
  );
}

export default CreateJob;
