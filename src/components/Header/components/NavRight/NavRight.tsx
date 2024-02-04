import React from "react";
import styles from "./NavRight.module.scss";
import { Button } from "../../../ui";

type NavRightProps = {
  user: any;
  children: React.ReactNode;
};

function NavRight({ user, children }: NavRightProps) {
  return (
    <div className={styles.nav__right}>
      {user ? (
        <>
          {children}
          <Button>+&nbsp;DEPOSIT</Button>
          <div className={styles.user}>
            <img width={35} height={35} src="../img/user.svg" alt="user" />
            <img width={15} height={15} src="../img/down.svg" alt="down" />
          </div>
        </>
      ) : (
        <>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </>
      )}
    </div>
  );
}

export default NavRight;
