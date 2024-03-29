let arrayLength;

const Heap = (array) => {
    arrayLength = array.length;

    for (let i = Math.floor(arrayLength / 2); i >= 0; i--) {
        heapify(array, i);
    }
}

const heapify = (array, i) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;

    if (left < arrayLength && array[left] > array[largest]) {
        largest = left;
    }

    if (right < arrayLength && array[right] > array[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(array, i, largest);
        heapify(array, largest);
    }
}

function swap(array, index, value) {
    var temp = array[index];

    array[index] = array[value];
    array[value] = temp;
}

function heapSort(array) {
    Heap(array);

    for (let i = array.length - 1; i > 0; i--) {
        swap(array, 0, i);
        arrayLength--;
        heapify(array, 0);
    }

    return array;
}

console.log(heapSort([2,3,4,5,3,3,22,33,43,323,443,332,332,3]));