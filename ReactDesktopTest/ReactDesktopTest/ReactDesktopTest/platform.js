/* web */
document.documentElement.className += ' web';
window.nativeHost = {
    quit: function() {
        window.close();
    },
    showAbout: function() {
        alert('ReactDesktopTest - ServiceStack + ReactJS');
    },
    ready: function() {
        //
    },
    platform: 'web'
};
