import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  en: {
    turnBtn: 'Minimise all',
    titleNoInternet: 'Something went wrong',
    textNoInternet:
      'Unable to connect to the Internet. Please try again later.',
    emptySearchResult: 'No results were found for your search',
    tabbar: {
      currency: 'Currencies',
      goods: 'Commodities',
      academy: 'Academy',
      indexes: 'Indices',
      shares: 'Stocks',
    },
    cellItem: {
      titleOfBuy: 'Buy',
      titleOfSell: 'Sell',
      opencellItem: {
        diferenceTitle: 'Profitablity:',
        openTitle: 'Open:',
        minTitle: 'min.:',
        percentdifereceTitle: 'Profitablity %:',
        closeTitle: 'Close:',
        maxTitle: 'max.:',
      },
    },
    AnotherProblem: 'An unexpected error has occurred.',
  },
  he: {
    turnBtn: 'מזער את הכל',
    titleNoInternet: 'משהו השתבש',
    textNoInternet: 'אנא נסו מאוחר יותר. אין חיבור לאינטרנט',
    emptySearchResult: 'לא נמצאו תוצאות לחיפוש',
    tabbar: {
      currency: 'מטבעות',
      goods: 'סחורות',
      academy: 'אֲקָדֶמִיָה',
      indexes: 'מדדים',
      shares: 'מניות',
    },
    cellItem: {
      titleOfBuy: 'קניה',
      titleOfSell: 'מכירה',
      opencellItem: {
        diferenceTitle: 'הפרש:',
        openTitle: 'פתיחה:',
        minTitle: 'מינימום:',
        percentdifereceTitle: 'הפרש %:',
        closeTitle: 'סגירה:',
        maxTitle: 'מקסימום.:',
      },
    },
    AnotherProblem: '.אירעה שגיאה לא צפויה',
  },
});

export default strings;
