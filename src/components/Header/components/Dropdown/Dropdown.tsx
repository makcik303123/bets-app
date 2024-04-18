import React from "react";
import styles from "./Dropdown.module.scss";

const arrayValues = [
  { value: "USD", multiplayer: 1.1 },
  { value: "RUB", multiplayer: 100 },
  { value: "EUR", multiplayer: 1 },
];

type DropdownProps = {
  user: any;
  changeActiveValue: (i: number) => void;
};

function Dropdown({ user, changeActiveValue }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !e.composedPath().includes(selectRef.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const classNameArrow = isOpen ? styles.active : "";
  const { balance, activeValue }: any = user;

  return (
    <div className={styles.balance__container}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={styles.balance__wrapper}
        ref={selectRef}
      >
        <div className={styles.balance}>
          <div className={styles.balance__main}>
            <div className={styles.main__currency}>
              {arrayValues[activeValue].value}
            </div>
            <div className={styles.main__amount}>
              {Math.round(
                arrayValues[activeValue].multiplayer * balance * 100
              ) / 100}
            </div>
          </div>
          <div className={styles.balance__bonus}>Bonus: 0.00</div>
        </div>
        {isOpen && (
          <div className={styles.balance__select__wrapper}>
            <div className={styles.balance__select}>
              {arrayValues.map((value, i) => (
                <div
                  onClick={() => changeActiveValue(i)}
                  className={styles.select__row}
                >
                  <div className={styles.row__value}>{value.value}</div>
                  <div className={styles.row__result}>
                    {Math.round(value.multiplayer * balance * 100) / 100}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <img
          width={15}
          height={15}
          src="../img/down.svg"
          alt="arrowDown"
          className={classNameArrow}
        />
      </div>
    </div>
  );
}

export default Dropdown;
