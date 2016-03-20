// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../ReactDesktopTest/platform.d.ts" />
/// <reference path='../ReactDesktopTest/typings/browser.d.ts'/>
import Platform = ReactDesktopTest.Platform;

class ConsoleNativeHost implements Platform.INativeHost {
    showAbout() {
        alert("ReactDesktopTest.AppConsole - ServiceStack + ReactJS");
    }

    toggleFormBorder() {}

    quit() {
        $.post('/nativehost/quit').then(response => {
            window.close();
        });
    }
	
	ready() {}
}

window.nativeHost = new ConsoleNativeHost();