// Your code here
// Your code here

function createEmployeeRecord(array) {
    
    return {
        firstName : array[0],
        familyName : array[1],
        title : array[2],
        payPerHour: array[3],
        timeInEvents : [],
        timeOutEvents : [],
} 
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord)
}

// could include this into timeIn and timeOut event but that would just be repetitive
function dsObject(type, dateStamp) {
    return {
        type: type,
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0, 10)
    }
}

function createTimeInEvent(employeeRecordObj, dateStamp) {
    employeeRecordObj.timeInEvents.push(dsObject("TimeIn", dateStamp))
    return employeeRecordObj
}

function createTimeOutEvent(employeeRecordObj, dateStamp) {
    employeeRecordObj.timeOutEvents.push(dsObject("TimeOut", dateStamp))
    return employeeRecordObj

}

function hoursWorkedOnDate(employeeRecordObj, dateOfHours) {
    
    let timeIn = employeeRecordObj.timeInEvents.find(element => element.date === dateOfHours)
    let timeOut = employeeRecordObj.timeOutEvents.find((element => element.date === dateOfHours))
   
        let hours = ((timeOut.hour - timeIn.hour)/100);
        return hours
    }

function wagesEarnedOnDate(employeeRecordObj, date) {
    return hoursWorkedOnDate(employeeRecordObj, date) * employeeRecordObj.payPerHour
}

function allWagesFor(employeeRecordObj) {
let allWages = employeeRecordObj.timeInEvents.map(day => wagesEarnedOnDate(employeeRecordObj, day.date))
return allWages.reduce((accumulator, currentValue) => accumulator + currentValue)

}

function calculatePayroll (array) {
 let payRoll = array.map(emplyee => allWagesFor(emplyee))
 return payRoll.reduce((accumulator, currentValue) => accumulator + currentValue)
}