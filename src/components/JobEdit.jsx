import classes from "./JobEdit.module.css";
import { useState } from "react";
import JobLayout from "./layout/JobLayout";
import { doc, deleteDoc, collection, updateDoc } from "@firebase/firestore";
import { db } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";

function JobEdit({ title, desc, pay, prof, id, user }) {
  const [enteredTitle, setEnteredTitle] = useState(title);
  const [enteredDesc, setEnteredDesc] = useState(desc);
  const [enteredProf, setEnteredProf] = useState(prof);
  const [enteredPay, setEnteredPay] = useState(pay);

  //funkce pro zmenu UseStatu
  function titleChange(event) {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
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

  const date = new Date();
  const currentDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const navigate = useNavigate();

  const collectionAccRef = collection(db, "accounts", user, "jobslist");
  const collectionJobRef = collection(db, "jobs");
  //update nabidky
  function handleEdit(e) {
    e.preventDefault();
    updateDoc(doc(collectionAccRef, id), {
      title: enteredTitle,
      prof: enteredProf,
      pay: enteredPay,
      desc: enteredDesc,
    });
    updateDoc(doc(collectionJobRef, id), {
      title: enteredTitle,
      prof: enteredProf,
      pay: enteredPay,
      desc: enteredDesc,
    });
    navigate("/", { replace: true });
  }
  //odstraneni nabidky
  function handleDelete(e) {
    e.preventDefault();

    deleteDoc(doc(collectionAccRef, id));
    deleteDoc(doc(collectionJobRef, id));
    navigate("/", { replace: true });
  }
  return (
    <li className={classes.item}>
      <JobLayout>
        <form>
          <label className={classes.label} htmlFor="title">
            Název:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={enteredTitle}
            onChange={titleChange}
          />
          <br />

          <label className={classes.label} htmlFor="prof">
            Profese:
          </label>
          <input
            className={classes.input}
            type="text"
            id="prof"
            name="prof"
            value={enteredProf}
            onChange={profChange}
          />
          <br />

          <label className={classes.label} htmlFor="desc">
            Informace:
          </label>
          <br></br>
          <textarea
            className={classes.textarea}
            id="desc"
            name="desc"
            value={enteredDesc}
            onChange={descChange}
          ></textarea>
          <br />

          <label className={classes.label} htmlFor="pay">
            Plat:
          </label>
          <input
            className={classes.input}
            type="number"
            id="pay"
            name="pay"
            value={enteredPay}
            onChange={payChange}
          />
          <br />

          <button className={classes.button} type="button" onClick={handleEdit}>
            Edit
          </button>
          <button
            className={classes.button}
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </form>
      </JobLayout>
    </li>
  );
}

export default JobEdit;
