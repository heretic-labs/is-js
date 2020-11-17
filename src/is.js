/**
 * @fileoverview "IS JavaScript Evaluation Helpers"
 */
let is = {
    /**
     * @description Is True
     * @param {object} obj
     */
    true: function (obj) {
        return (
            (this.boolean(obj) && obj === true) ||
            (this.string(obj) && obj === "true") ||
            (this.number(obj) && obj === 1)
        );
    },
    /**
     * @description Is Boolean
     * @param {object} obj
     */
    boolean: function (obj) {
        return typeof obj === "boolean";
    },
    /**
     * @description Is String
     * @param {object} obj
     */
    string: function (obj) {
        return typeof obj === "string";
    },
    /**
     * @description Is Number
     * @param {object} obj
     */
    number: function (obj) {
        return !isNaN(obj);
    },
    /**
     * @description Is Undefined
     * @param {object} obj
     */
    undefined: function (obj) {
        return typeof obj === "undefined";
    },
    /**
     * @description Is Null
     * @param {object} obj
     */
    null: function (obj) {
        return obj === null;
    },
    /**
     * @description Is Empty
     * @param {object} obj
     */
    empty: function (obj) {
        return (
            this.undefined(obj) ||
            this.null(obj) ||
            (this.string(obj) && obj.trim().length > 0)
        );
    },
};
