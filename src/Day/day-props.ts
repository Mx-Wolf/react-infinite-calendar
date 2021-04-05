import { LiHTMLAttributes } from "react";
import CSS from "csstype";
import { DaySelectionLocaleProps } from "./day-selection-props";
export interface DayPropsTheme {
  selectionColor: string;
  todayColor: string;
  textColor: string;
}
type HandlersType = Pick<LiHTMLAttributes<HTMLLIElement>, "onAbort" | "onAbortCapture" | "onAnimationEnd"
  | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture"
  | "onAnimationStart" | "onAnimationStartCapture"
  | "onAuxClick" | "onAuxClickCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onBlur"
  | "onBlurCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough"
  | "onCanPlayThroughCapture" | "onChange" | "onChangeCapture"
  | "onClick" | "onClickCapture" | "onCompositionEnd" | "onCompositionEndCapture"
  | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate"
  | "onCompositionUpdateCapture" | "onContextMenu" | "onContextMenuCapture" | "onCopy" | "onCopyCapture"
  | "onCut" | "onCutCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture"
  | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture"
  | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture"
  | "onDrop" | "onDropCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture"
  | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onError" | "onErrorCapture"
  | "onFocus" | "onFocusCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture"
  | "onInput" | "onInputCapture" | "onInvalid" | "onInvalidCapture" | "onKeyDown" | "onKeyDownCapture"
  | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onLoad" | "onLoadCapture"
  | "onLoadStart" | "onLoadStartCapture" | "onLoadedData" | "onLoadedDataCapture"
  | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture"
  | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture"
  | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture"
  | "onPaste" | "onPasteCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture"
  | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerEnter" | "onPointerEnterCapture"
  | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerOut" | "onPointerOutCapture"
  | "onPointerOver" | "onPointerOverCapture" | "onPointerUp" | "onPointerUpCapture" | "onProgress" | "onProgressCapture"
  | "onRateChange" | "onRateChangeCapture" | "onReset" | "onResetCapture" | "onScroll" | "onScrollCapture"
  | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onSelect" | "onSelectCapture"
  | "onStalled" | "onStalledCapture" | "onSubmit" | "onSubmitCapture" | "onSuspend" | "onSuspendCapture"
  | "onTimeUpdate" | "onTimeUpdateCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture"
  | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onTransitionEnd" | "onTransitionEndCapture"
  | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onWheel" | "onWheelCapture">
export interface DayProps {
  className: string;
  currentYear: string;
  date: string;
  day: number;
  handlers: HandlersType;
  isDisabled: boolean;
  isHighlighted: boolean;
  isToday: boolean;
  isSelected: boolean;
  monthShort: string;
  theme: DayPropsTheme;
  year: string;
  onClick: (date: Date) => void;
  locale: DaySelectionLocaleProps;
  selectionStyle: CSS.Properties;
}