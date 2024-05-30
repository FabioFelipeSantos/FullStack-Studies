const _ = {
    clamp(number, lowerLimit, upperLimit) {
        return Math.min(Math.max(number, lowerLimit), upperLimit);
    },

    inRange(number, start, end = undefined) {
        if (!end) {
            end = start;
            start = 0;
        } else {
            if (start > end) {
                const temp = start;
                start = end;
                end = temp;
            }
        }

        return (start <= number && number < end) ? true : false;
    },

    words(string) {
        return string.split(" ");
    },

    pad(string, length) {
        const stringLength = string.length;

        if (stringLength >= length) {
            return string;
        }

        const extraNecessarySpace = length - stringLength;

        let rightExtraSpaces = stringLength + Math.floor(extraNecessarySpace / 2)
        rightExtraSpaces += (extraNecessarySpace % 2 !== 0) ? 1 : 0;

        return string.padEnd(rightExtraSpaces, " ").padStart(length, " ");
    },

    has(object, key) {
        const keys = Object.keys(object);

        for (const existingKey of keys) {
            if (existingKey === key) {
                return true;
            }
        }

        return false;
    },

    invert(object) {
        let invertedObject = {};

        for (const [key, value] of Object.entries(object)) {
            invertedObject[value] = key;
        }

        return invertedObject;
    },

    findKey(object, func) {
        for (const key in object) {
            if (func(object[key])) {
                return key;
            }
        }

        return undefined;
    },

    drop(array, n = 1) {
        return array.slice(n);
    },

    dropWhile(array, func) {
        for (let i = 0; i < array.length; i++) {
            if (!func(array[i], i, array)) {
                return array.slice(i);
            }
        }
        return null;
    },

    chunk(array, size = 1) {
        if (size >= array.length) {
            return array;
        }

        let chunkedArray = [];
        let numberElementsAdded = 0;

        for (let k = 1; k <= Math.ceil(array.length / size); k++) {
            const tempArray = [];

            for (let i = (k - 1) * size; i < k * size; i++) {
                if (i === array.length) {
                    break;
                }
                tempArray.push(array[i]);
            }

            chunkedArray.push(tempArray);
            numberElementsAdded += tempArray.length;
        }

        return chunkedArray;
    }
};

// Do not write or modify code below this line.
module.exports = _;