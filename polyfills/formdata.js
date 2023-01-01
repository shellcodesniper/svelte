/** @typedef {FormData & { __local_polyfill_form: HTMLFormElement | undefined }} FormDataExtended */
(function () {

    if (!FormData.prototype.get) {
        var /* const */ originalConstructor = FormData.prototype.constructor;
        /**
         * 
         * @param {HTMLFormElement | undefined} form 
         */
        FormData.prototype.constructor = function (form) {
            originalConstructor(form);
            /** @type {FormDataExtended} */ (this).__local_polyfill_form = form;
        };

        FormData.prototype.get = function (name) {
            var /* const */ formExtended = /** @type {FormDataExtended} */ (this);
            var /* const */ form = formExtended.__local_polyfill_form;

            if (!form) {
                return null;
            }

            var /* const */ elements = form.elements;

            for (var i = 0; i < elements.length; ++i) {
                var /* const */ item = /** @type {HTMLInputElement} */ elements.item(i);
                if (item.name === name) {
                    return item.value;
                }
            }

            return null;
        };

        // TODO (if you want a more robust version):
        // * Read correctly the values of radio items.
        // * Define support for `set`, `append` and the rest of the "modern" properties in a similar fashion.
    }

})();

export {}
