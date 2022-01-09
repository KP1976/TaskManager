const getCurrentDate = () => {
  const months = [
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
  const day = date.getDate();
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const monthDesktop = monthsDesktop[date.getMonth()];
  const year = date.getFullYear();

  return { day, dayOfWeek, month, monthDesktop, year };
};

module.exports = {
  getCurrentDate,
};
