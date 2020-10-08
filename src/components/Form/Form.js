import React, { useEffect, useState } from 'react';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import Hooks from '../../hooks';
import { Constants } from '../../utils';

import './Form.scss';

const Form = () => {
  const [fields, isValid, onChange] = Hooks.useForms({
    cardNumber: {
      value: '',
      isValid: false,
    },
    cardHolder: {
      value: '',
      isValid: false,
    },
    month: {
      value: '',
      isValid: false,
    },
    year: {
      value: '',
      isValid: false,
    },
    cvv: {
      value: '',
      isValid: false,
    },
  });

  return (
    <div className="flex flex-column white-background form-container p8">
      <Input
        label="Card Number"
        name="cardNumber"
        type="cardnumber"
        onChange={onChange}
        value={fields?.cardNumber?.value}
      />
      <Input
        label="Card Holder"
        name="cardHolder"
        onChange={onChange}
        value={fields?.cardHolder?.value}
      />
      <div className="flex flex-justify">
        <div className="flex flex-column p2 width-75">
          <label className="fs-12 primary mb1">Expiration Date</label>
          <div className="flex width-66">
            <Select
              label="Month"
              name="month"
              list={Constants.MONTHS}
              onChange={onChange}
              value={fields?.month?.value}
            />
            <Select
              className="ml4"
              label="Year"
              name="year"
              list={Constants.YEARS}
              onChange={onChange}
              value={fields?.year?.value}
            />
          </div>
        </div>
        <Input
          label="CVV"
          name="cvv"
          maxLength={3}
          type="number"
          className="width-33"
          onChange={onChange}
          value={fields?.cvv?.value}
        />
      </div>
      <Button className="m2 mt6" disabled={!isValid} value="Submit" />
    </div>
  );
};

export default Form;
