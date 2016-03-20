interface Window {
    nativeHost: ReactDesktopTest.Platform.INativeHost;
}
declare module ReactDesktopTest.Platform {
    export interface INativeHost {
        showAbout();
        toggleFormBorder();
        quit();
        ready();
    }
}
