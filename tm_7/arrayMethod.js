//forEach => untuk melooping isi array
let arr = [`banana`, `orange`, `apple`]
arr.forEach(item => {
    console.log(item)
})

// ForEach dua dimensi
let arr1 = [[`apple`, 1], [`orange`, 2]]
arr1.forEach(item => {
    item.forEach(item2 => {
        console.log(item2)
    })
})

//Map => untuk merubah data di dalam Array
let arr2 = [1, 2, 3, 4, 5]
let newarr2 = arr2.map(item => {
    return item * 2
})
console.log(newarr2)

let arr3 = [1, 2, 3, 4, 5].map(item => {
    return item * 2
})
console.log(arr3)

let arr4 = [1, 2, 3, 4, 5].map((item, index) => {
    if(index % 2 !== 0) { 
        return item * 2 // yang dikali 2 index ke ganjil aja
    } else {
        return item
    }
})
console.log(arr4)

let arr5 = [1, 2, 3, 4, 5]
let newarr5 = arr5.map((item, index) => {
    if(index % 2 !== 0) { 
        return item * 2 // yang dikali 2 index ke ganjil aja
    } else {
        return item
    }
})
console.log(arr5)
console.log(newarr5)

//[[2, 3], [2,3], [2,3]]
let a = [6, 7, 5]
let b = a.map(item => {
    return [2, 3]
})
console.log(b)

//Filter => menyaring data di dalam Array
let arr6 = [`car`, `fan`, `mouse`, `monitor`]
let newArr6= arr6.filter(item => {
    return item.includes(`a`)
})
console.log(newArr6)

