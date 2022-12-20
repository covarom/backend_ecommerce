export function coverTimeStamp(time:any) {
    var dateTimeStamp = time;
    var dateObject = new Date(dateTimeStamp);
    var utcYearFromTS = dateObject.getUTCFullYear();
    var utcMonthFromTS = dateObject.getUTCMonth() + 1;
    var utcDateFromTS = dateObject.getUTCDate();
    return utcDateFromTS + "-"+ utcMonthFromTS +"-"+ utcYearFromTS+ " 00:00:00";

}