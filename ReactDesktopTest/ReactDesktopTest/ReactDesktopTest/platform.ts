// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path='platform.d.ts'/>

class WebNativeHost implements ReactDesktopTest.Platform.INativeHost {
    showAbout() {
        alert("ReactDesktopTest - ServiceStack + ReactJS");
    }

    toggleFormBorder() {}

    quit() {
        window.close();
    }
	
    ready() {}
}

window.nativeHost = window.nativeHost || new WebNativeHost();
