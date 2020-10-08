import Validations from './validations';

const isValidNumber = value => {
  return value === '' || Validations.ONLY_NUMBER_REGEX.test(value);
};

export default {
  isValidNumber,
};
