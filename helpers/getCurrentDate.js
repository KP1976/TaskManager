const getCurrentDate = () => {
  const monthsNames = [
    'stycznia',
    'lutego',
    'marca',
    'kwietnia',
    'maja',
    'czerwca',
    'lipca',
    'sierpnia',
    'września',
    'października',
    'listopada',
    'grudnia',
  ];
  const monthsDesktop = [
    'styczeń',
    'luty',
    'marzec',
    'kwiecień',
    'maj',
    'czerwiec',
    'lipiec',
    'sierpień',
    'wrzesień',
    'październik',
    'listopad',
    'grudzień',
  ];
  const days = [
    'niedziela',
    'poniedziałek',
    'wtorek',
    'środa',
    'czwartek',
    'piątek',
    'sobota',
  ];
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const day = date.getDate();
  const dayOfWeek = days[date.getDay()];
  const month = monthsNames[date.getMonth()];
  const monthDesktop = monthsDesktop[date.getMonth()];
  const year = date.getFullYear();

  return {
    minutes,
    hours,
    day,
    dayOfWeek,
    month,
    monthDesktop,
    monthsNames,
    year,
  };
};

module.exports = {
  getCurrentDate,
};
