import CSS from "csstype";
export interface DaySelectionLocaleTodayProps {
  short: string;
  long: string;
}
export interface DaySelectionLocaleProps {
  todayLabel: Partial<DaySelectionLocaleTodayProps>
}
export interface DaySelectionThemeTextColor {
  active: string;
}
export interface DaySelectionTheme {
  textColor: Partial<DaySelectionThemeTextColor>;
}
export interface DaySelectionProps {
  day: number;
  date: string;
  isToday: boolean;
  locale: DaySelectionLocaleProps;
  monthShort: string;
  theme: DaySelectionTheme,
  selectionStyle: CSS.Properties,
  color: string | undefined;
}