import React from "react";
import { useActions, useTypedSelector } from "../../hooks";

import styles from "./Header.module.scss";
import Login from "../Login";
import SignUp from "../SignUp";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { DocumentData, doc, onSnapshot } from "firebase/firestore";
import { auth, updateUserData, usersRef } from "../../firebase";
import { Dropdown, NavLeft, NavRight } from "./components";

function Header() {
  const user = useTypedSelector((state) => state.getUserDataReducer.data);
  const authUid = useTypedSelector((state) => state.authUidReducer.value);
  const { changeAuthUid, changeUserData } = useActions();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        changeAuthUid(undefined);
        return;
      }

      const uid = user.uid;
      changeAuthUid(uid);
    });
  }, []);

  React.useEffect(() => {
    if (authUid) {
      const unsub = onSnapshot(doc(usersRef, authUid), (doc) => {
        changeUserData(doc.data());
        console.log("Current data: ", doc.data());
      });
      return unsub;
    } else {
      changeUserData(undefined);
    }
  }, [authUid]);

  const signOutFromAccount = () => {
    signOut(auth)
      .then(() => {
        changeUserData(undefined);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeActiveValue = (index: number) => {
    if (user?.activeValue === index || !authUid) {
      return;
    }

    updateUserData(authUid, { activeValue: index });
  };

  const [popupLogin, setPopupLogin] = React.useState(false);
  const [popupSignUp, setPopupSignUp] = React.useState(false);

  return (
    <div>
      <Login popupLogin={popupLogin} setPopupLogin={setPopupLogin} />
      <SignUp popupSignUp={popupSignUp} setPopupSignUp={setPopupSignUp} />

      <header className={styles.header}>
        <div className={styles.nav}>
          <img width={69} height={30} src="../img/logo.svg" alt="logo" />
          <NavLeft />
          <NavRight user={user}>
            <Dropdown user={user} changeActiveValue={changeActiveValue} />
          </NavRight>
        </div>
      </header>
    </div>
  );
}

export default Header;
