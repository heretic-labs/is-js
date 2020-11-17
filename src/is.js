/**
 * @fileoverview "IS JavaScript Evaluation Helpers"
*/
class Is {
    constructor() { }

    /**
     * @description Is True
     * @param {object} obj
     */
    True = function (obj) {
        return (
            (this.Boolean(obj) && obj === true) ||
            (this.String(obj) && Array('true', '1').includes(obj)) ||
            (this.Number(obj) && obj === 1)
        );
    }


    /**
     * @description Is Boolean
     * @param {object} obj
     */
    Boolean = function (obj) {
        return typeof obj === "boolean";
    }

    /**
     * @description Is String
     * @param {object} obj
     */
    String = function (obj) {
        return typeof obj === "string";
    }

    /**
     * @description Is Number
     * @param {object} obj
     */
    Number = function (obj) {
        return !isNaN(obj);
    }

    /**
     * @description Is Undefined
     * @param {object} obj
     */
    Undefined = function (obj) {
        return typeof obj === "undefined";
    }

    /**
     * @description Is Null
     * @param {object} obj
     */
    Null = function (obj) {
        return obj === null;
    }

    /**
     * @description Is Empty
     * @param {object} obj
     */
    Empty = function (obj) {
        return (
            Undefined(obj) ||
            Null(obj) ||
            (String(obj) && obj.trim().length > 0)
        );
    }
}

module.exports = Is;