import { FC } from "react";
import { DaySelectionProps } from "./day-selection-props";
import styles from "Day.scss";

export const DaySelection: FC<DaySelectionProps> = (p) => {
  const {
    date,
    day,
    isToday,
    locale: { todayLabel },
    monthShort,
    color,
    selectionStyle,
    theme: { textColor },
  } = p;
  return (
    <div
      className={styles.selection}
      data-date={date}
      style={{
        backgroundColor: color,
        color: textColor.active,
        ...selectionStyle,
      }}
    >
      <span className={styles.month}>
        {isToday ? todayLabel.short || todayLabel.long : monthShort}
      </span>
      <span className={styles.day}>{day}</span>
    </div>
  );
};