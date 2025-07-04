function calculateTripDays(startDate, endDate){
    const start=new Date(startDate);
    const end=new Date(endDate);

    const diffInMs=end-start;
    const diffInDays=diffInMs/(1000*60*60*24);

    const roundedDays=Math.round(diffInDays);

    return roundedDays;
}
console.log(`Your trip is ${calculateTripDays('2025-07-01','2025-07-10')} days long.`);