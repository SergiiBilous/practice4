import { JSDOM } from "jsdom";
import { default as fetch, Response } from "node-fetch";

if (typeof global !== "undefined") {

    const { window } = new JSDOM();
    global.window = window;
    global.document = window.document;

    // Waiting for jsdom to support: https://github.com/tmpvar/jsdom/issues/1555
    global.window.Element.prototype.closest = function(selector) {
        let el = this;
        while (el) {
            if (el.matches(selector)) {
                return el;
            }
            el = el.parentElement;
        }
        return null;
    };

    window.fetch = fetch;
    window.Response = Response;
}

export default global