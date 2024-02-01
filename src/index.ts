type Dates = {
  startDate: string;
  endDate: string;
};


const extractDates = (customer: any): Dates[] | string[] => {
  if (!customer.ListOfPeriods || customer.ListOfPeriods === 'NULL' ) {
    return [];
  }

  const periodStrings = customer.ListOfPeriods.trim().split('|');
  
  const dateRanges: Dates[] = [];
  const errors: string[] = [];
  

  for (const periodString of periodStrings) {
    const [startDate, endDate] = periodString.split('-').map(date => date.trim());
    
    const isValidDate = (date: string) => date.length === 10;

    if (!isValidDate(startDate) || !isValidDate(endDate)) {
      errors.push('string length is invalid');
    }else{

      dateRanges.push({ startDate, endDate });}
  }

  return errors.length > 0 ? errors : dateRanges;
};

export default extractDates;
