import { parse } from "date-fns";
import { FC } from "react";
import { DayProps } from "./day-props";
import classNames from "classnames";
import styles from "Day.scss";
import { DaySelection } from "./day-selection";

interface ComputeColorProps {
  isSelected: boolean;
  selectionColor: string | ((date: string) => string);
  date: string;
  isToday: boolean;
  todayColor: string;
}
const computeColor = ({ isSelected, selectionColor, date, isToday, todayColor }: ComputeColorProps) => {
  let color;

  if (isSelected) {
    color = typeof selectionColor === 'function'
      ? selectionColor(date)
      : selectionColor;
  } else if (isToday) {
    color = todayColor;
  }
  return color;
};

export const Day: FC<DayProps> = (p) => {
  const {
    className,
    currentYear,
    date,
    day,
    onClick,
    handlers,
    isDisabled,
    isHighlighted,
    isToday,
    isSelected,
    monthShort,
    theme,
    year,
    locale,
    selectionStyle,
  } = p;
  const { selectionColor, todayColor } = theme;
  const handleClick = () => {
    if (!isDisabled && typeof onClick === 'function') {
      onClick(parse(date, "yyyy-MM-dd", new Date()));
    }
  };
  const color = computeColor({ date, isSelected, isToday, selectionColor, todayColor });

  return (
    <li
      style={color ? { color } : undefined}
      className={classNames(styles.root, {
        [styles.today]: isToday,
        [styles.highlighted]: isHighlighted,
        [styles.selected]: isSelected,
        [styles.disabled]: isDisabled,
        [styles.enabled]: !isDisabled,
      }, className)}
      onClick={handleClick}
      data-date={date}
      {...handlers}
    >
      {day === 1 && <span className={styles.month}>{monthShort}</span>}
      {isToday ? <span>{day}</span> : day}
      {day === 1 &&
        currentYear !== year &&
        <span className={styles.year}>{year}</span>}
      {isSelected && <DaySelection {...{ color, date, day, isToday, locale, monthShort, selectionStyle, theme }} />}
    </li>
  );
};