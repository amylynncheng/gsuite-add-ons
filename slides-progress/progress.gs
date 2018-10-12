/**
 * @OnlyCurrentDoc Adds progress bars to a presentation.
 */
var BAR_ID = 'PROGRESS_BAR_ID';
var BAR_HEIGHT = 10; // px
var presentation = SlidesApp.getActivePresentation();

/**
 * Runs when the add-on is installed.
 * @param {object} e The event parameter for a simple onInstall trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode. (In practice, onInstall triggers always
 *     run in AuthMode.FULL, but onOpen triggers may be AuthMode.LIMITED or
 *     AuthMode.NONE.)
 */
function onInstall(e) {
  onOpen();
}

/**
 * Trigger for opening a presentation.
 * @param {object} e The onOpen event.
 */
function onOpen(e) {
  SlidesApp.getUi().createAddonMenu()
      .addItem('Show progress bar', 'createBars')
      .addItem('Hide progress bar', 'deleteBars')
      .addToUi();
}
