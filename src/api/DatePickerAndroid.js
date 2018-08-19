import DatePickerModule from '../NativeModules/DatePickerAndroid';

/**
 * Convert a Date to a timestamp.
 */
function _toMillis(dateVal) {
  // Is it a Date object?
  if (typeof dateVal === 'object' && typeof dateVal.getMonth === 'function') {
    return dateVal.getTime();
  }
  return null;
}

/**
 * Opens the standard Android date picker dialog.
 *
 * ### Example
 *
 * ```
 * try {
 *   const {action, year, month, day} = await DatePickerAndroid.open({
 *     // Use `new Date()` for current date.
 *     // May 25 2020. Month 0 is January.
 *     date: new Date(2020, 4, 25)
 *   });
 *   if (action !== DatePickerAndroid.dismissedAction) {
 *     // Selected year, month (0-11), day
 *   }
 * } catch ({code, message}) {
 *   console.warn('Cannot open date picker', message);
 * }
 * ```
 */
class DatePickerAndroid {
  /**
   * Opens the standard Android date picker dialog.
   *
   * The available keys for the `options` object are:
   *   * `date` (`Date` object or timestamp in milliseconds) - date to show by default
   *   * `minDate` (`Date` or timestamp in milliseconds) - minimum date that can be selected
   *   * `maxDate` (`Date` object or timestamp in milliseconds) - minimum date that can be selected
   *
   * Returns a Promise which will be invoked an object containing `action`, `year`, `month` (0-11),
   * `day` if the user picked a date. If the user dismissed the dialog, the Promise will
   * still be resolved with action being `DatePickerAndroid.dismissedAction` and all the other keys
   * being undefined. **Always** check whether the `action` before reading the values.
   *
   * Note the native date picker dialog has some UI glitches on Android 4 and lower
   * when using the `minDate` and `maxDate` options.
   */
  static open(options) {
    const optionsMs = options;
    if (optionsMs) {
      optionsMs.date = _toMillis(options.date);
      optionsMs.minDate = _toMillis(options.minDate);
      optionsMs.maxDate = _toMillis(options.maxDate);
    }
    return DatePickerModule.open(optionsMs);
  }

  /**
   * A date has been selected.
   */
  static get dateSetAction() {
    return 'dateSetAction';
  }
  /**
   * The dialog has been dismissed.
   */
  static get dismissedAction() {
    return 'dismissedAction';
  }
}

module.exports = DatePickerAndroid;
