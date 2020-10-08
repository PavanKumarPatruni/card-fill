const MONTHS = [
  {
    id: '1',
    value: 'Jan',
  },
  {
    id: '2',
    value: 'Feb',
  },
  {
    id: '3',
    value: 'Mar',
  },
  {
    id: '4',
    value: 'Apr',
  },
  {
    id: '5',
    value: 'May',
  },
  {
    id: '6',
    value: 'Jun',
  },
  {
    id: '7',
    value: 'Jul',
  },
  {
    id: '8',
    value: 'Aug',
  },
  {
    id: '9',
    value: 'Sep',
  },
  {
    id: '10',
    value: 'Oct',
  },
  {
    id: '11',
    value: 'Nov',
  },
  {
    id: '12',
    value: 'Dec',
  },
];

const YEARS = Array(50)
  .fill()
  .map((v, i) => {
    const val = `${new Date().getFullYear() + i}`;
    return {
      id: val,
      value: val,
    };
  });

export default {
  MONTHS,
  YEARS,
};
