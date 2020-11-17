/**
 * @fileoverview "IS JavaScript Evaluation Helpers"
*/

/**
 * @description Is True
 * @param {object} obj
 */
export function isTrue(obj) {
    return (
        (this.boolean(obj) && obj === true) ||
        (this.string(obj) && obj === "true") ||
        (this.number(obj) && obj === 1)
    );
}


/**
 * @description Is Boolean
 * @param {object} obj
 */
export function isBoolean(obj) {
    return typeof obj === "boolean";
}

/**
 * @description Is String
 * @param {object} obj
 */
export function isString(obj) {
    return typeof obj === "string";
}

/**
 * @description Is Number
 * @param {object} obj
 */
export function isNumber(obj) {
    return !isNaN(obj);
}

/**
 * @description Is Undefined
 * @param {object} obj
 */
export function isUndefined(obj) {
    return typeof obj === "undefined";
}

/**
 * @description Is Null
 * @param {object} obj
 */
export function isNull(obj) {
    return obj === null;
}

/**
 * @description Is Empty
 * @param {object} obj
 */
export function isEmpty(obj) {
    return (
        isUndefined(obj) ||
        isNull(obj) ||
        (isString(obj) && obj.trim().length > 0)
    );
}