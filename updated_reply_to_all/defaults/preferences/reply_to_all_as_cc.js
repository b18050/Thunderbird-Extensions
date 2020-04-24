
/*
// derived from https://developer.thunderbird.net/add-ons/updating/tb68/changes#message-composition-window
// modified by Chandan Prakash on 20-04-2020
// prefences syntax is changed from pref("extensions.reply-to-all-as-cc@clear-code.com.exceptSentFolder","bool") to
// { id: "extensions.reply-to-all-as-cc@clear-code.com.exceptSentFolder", type: "bool" }
*/

Preferences.addAll([
    { id: "extensions.reply-to-all-as-cc@clear-code.com.exceptSentFolder", type: true },
    { id: "extensions.reply-to-all-as-cc@clear-code.com.debug", type: false }
]);