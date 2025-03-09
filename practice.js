// interview coding practice - do not help.

const reverseString = (str) => {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

const findMissingNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1
        }
    }
}

let Data = [{
    id: 1,
    name: 'John',
    age: 25,
    address: 'USA'
}, {
    id: 2,
    name: 'Smith',
    age: 30,
    address: 'UK'
}, {
    id: 3,
    name: 'David',
    age: 35,
    address: 'AUS'
}]

const findData = (id) => {
    id -= 1
    return Data.hasOwnProperty(id) ? Data[id] : 'Data not found'
}
console.log(findData(1)) // can view data by id


const createData = (data) => {
    Data.push(data)
    return "Data created successfully with ID: " + data.id
}
console.log(createData({
    id: 4,
    task_title: 'task4',
    status: 'pending',
    address: 'NZ'
}))

const updateData = (id, data) => {
    try {
        Data.splice(id - 1, 1, data)
        return "Data updated successfully with ID: " + id;
    } catch {
        console.error('Error updating data')
    }
}

console.log(updateData(1, {
    id: 1,
    task_title: 'task1',
    status: 'Completed',
    address: 'NJ'
}))

const deleteData = (id) => {
    id -= 1
    Data.splice(id, 1)
}

console.log(deleteData(2))

console.log(Data)