/*
 * View model for OctoPrint-GCodeEditor
 *
 * Author: Parker Kuivila
 * License: AGPLv3
 */
$(function() {
    function GcodeeditorViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        GcodeeditorViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_gcodeeditor, #tab_plugin_gcodeeditor, ...
        [ /* ... */ ]
    ]);
});
