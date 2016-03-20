var ConsoleNativeHost = (function () {
    function ConsoleNativeHost() {
    }
    ConsoleNativeHost.prototype.showAbout = function () {
        alert("ReactDesktopTest.AppConsole - ServiceStack + ReactJS");
    };
    ConsoleNativeHost.prototype.toggleFormBorder = function () {
    };
    ConsoleNativeHost.prototype.quit = function () {
        $.post('/nativehost/quit').then(function (response) {
            window.close();
        });
    };
    return ConsoleNativeHost;
}());
window.nativeHost = new ConsoleNativeHost();