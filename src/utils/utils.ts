export const APP_NAME = 'Recipe Generator';

export function getCommonElements(arrays: any[]) {
    if (arrays.length === 1) {
        return arrays[0];
    }

    let commonElements = [];
    let firstArray = arrays[0];
    let hashTable: any = {};
    for (let i = 0; i < firstArray.length; i++) {
        hashTable[JSON.stringify(firstArray[i])] = true;
    }
    for (let key in hashTable) {
        let isCommon = true;
        for (let j = 1; j < arrays.length; j++) {
            let found = false;
            for (let k = 0; k < arrays[j].length; k++) {
                if (key === JSON.stringify(arrays[j][k])) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                isCommon = false;
                break;
            }
        }
        if (isCommon) {
            commonElements.push(JSON.parse(key));
        }
    }
    return commonElements;
}
