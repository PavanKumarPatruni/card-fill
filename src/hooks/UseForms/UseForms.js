import { useEffect, useState } from 'react';

const useForms = initialState => {
  const [fields, setFields] = useState(initialState);
  const [isValid, setIsValid] = useState(true);

  const onChange = event => {
    let newfields = { ...fields };

    const { name, value: enteredValue } = event?.target;
    let isValid = true;
    let obj = newfields?.[name];
    let value = obj?.value;

    if (obj?.maxLength && obj?.maxLength < enteredValue?.length) {
      return;
    }

    if (enteredValue) {
      value = enteredValue;
    } else if (enteredValue === '') {
      isValid = false;
      value = enteredValue;
    } else {
      isValid = false;
    }

    obj = {
      ...fields?.[name],
      isValid,
      value,
    };

    newfields = {
      ...fields,
      [name]: obj,
    };

    setFields(newfields);
  };

  useEffect(() => {
    if (fields) {
      const valuesArray = Object.values(fields);
      const validList = valuesArray.filter(item => item.isValid);

      setIsValid(validList?.length === valuesArray?.length);
    }
  }, [fields]);

  return [fields, isValid, onChange];
};

export default useForms;
