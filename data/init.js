'use strict';

(() => {
    const actions = fastnav.actions;
    const createAction = fastnav.createAction;

    let findAction = (key, where) => {
        return what => {
            let collection = actions.get(where);

            for(let elem of collection) {
                if(elem[key] === what) {
                    return elem;
                }
            }
            return null;
        };
    };
    actions.set('default', createAction('cmd_default', 'Open', 'description', 'normal', 'globe'));
    actions.set('tabs', new Set());
    actions.set('cache', []);
    actions.set('findByTabId',   findAction('tabId', 'tabs'));
    actions.set('findByCommand', findAction('command', 'cache'));

    let actionsCache = actions.get('cache');

    actionsCache.push(createAction('cmd_newtab',      `New Tab`, `Open a New Tab`, 'normal', 'plus'));
    actionsCache.push(createAction('cmd_new-window',  `New Window`, `Open a New Window`, 'normal', 'plus-square'));
    actionsCache.push(createAction('cmd_close-tab',   `Close Tab`, `Close Current Tab`, 'normal', 'times'));
    actionsCache.push(createAction('cmd_downloads',   `Downloads`, `Open Downloads Tab`, 'normal', 'download'));
    actionsCache.push(createAction('cmd_addons',      `Add-ons Manager`, `Open Add-ons Tab`, 'normal', 'puzzle-piece'));
    actionsCache.push(createAction('cmd_open-pref',   `Preferences`, `Open Preferences Tab`, 'normal', 'cog'));
    actionsCache.push(createAction('cmd_go-back',     `Go Back`, `Go to Back Location`, 'normal', 'arrow-left'));
    actionsCache.push(createAction('cmd_go-forward',  `Go Forward`, `Go to Forward Location`, 'normal', 'arrow-right'));
    actionsCache.push(createAction('cmd_show-about',  `About Fast Navigation`, `Show About Dialog`, 'normal', 'fighter-jet'));
    actionsCache.push(createAction('cmd_exit',        `Quit`, `Quit Firefox Application`, 'normal', 'times-circle'));
    actionsCache.push(createAction('cmd_ffsync',      `Firefox Sync Accounts`, `Open Firefox Sync Accounts`, 'normal', 'cloud'));
    actionsCache.push(createAction('cmd_custom-ui',   `Customize Firefox UI`, `Customize Firefox User Interface`, 'normal', 'bullseye'));
    actionsCache.push(createAction('cmd_home',        `Home`, `Go to Home`, 'normal', 'home'));
    actionsCache.push(createAction('cmd_permissions', `Permissions`, `Manage Firefox Permissions`, 'normal', 'lock'));
    actionsCache.push(createAction('cmd_plugins',     `About Plugins`, `Open Plugins Tab`, 'normal', 'plug'));
    actionsCache.push(createAction('cmd_ff-support',  `Troubleshooting Information`, `Open Troubleshooting Information Tab`, 'normal', 'ticket'));
})();
