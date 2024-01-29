"use strict";

const friday = 6;

const numberDaysOfYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];

const numberDaysOfLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];

function checkFirstJanuary(age) {
    let numberOfDays = Math.floor((age * 365 + ((age + 3) / 4)));
    return numberOfDays % 7;
}

function chekDate(number, firstDay, year, arr) {
    let numberOfThirteenths = firstDay + 12;
    if (numberOfThirteenths % 7 == 0) {
        arr.push(`1/13/${year}`);
    }
    let month = 2;
    number.forEach(item => {
        numberOfThirteenths = item + numberOfThirteenths;
        if (numberOfThirteenths % 7 == 0) {
            arr.push(`${month}/13/${year}`);
        }
        month++;
    });
    return arr;
}

function fridayTheThirteenths(start, end) {
    let dates = [];
    if (end) {
        for (let i = start; i <= end; i++) {
            let firstJanuary = checkFirstJanuary(i);
            if (i % 4 == 0) {
                chekDate(numberDaysOfLeapYear, firstJanuary, i, dates);
            } else {
                chekDate(numberDaysOfYear, firstJanuary, i, dates);
            }
        }
        return dates.join(' ') ;
    } else {
        let firstJanuary = checkFirstJanuary(start);
        if (start % 4 == 0) {
            chekDate(numberDaysOfLeapYear, firstJanuary, start, dates);
        } else {
            chekDate(numberDaysOfYear, firstJanuary, start, dates);
        }
        return dates.join(' ') ;
    }
}