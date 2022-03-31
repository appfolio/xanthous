import classnames from 'classnames';
import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select-plus';
import Close from '../Button/Close';
import SelectArrow from './SelectArrow';
import SelectMultiValue from './SelectMultiValue';
import Option from './SelectOption.js';

const getSelectArrow = (isOpen, arrowRenderer) => (
  <SelectArrow isOpen={isOpen} render={arrowRenderer} />
);

const getCloseButton = () => <Close tabIndex={-1} style={{ fontSize: '.5rem' }} />;

const Select = ({
  arrowRenderer,
  className,
  inputProps,
  multi,
  name,
  value: valueProp,
  valueComponent,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(valueProp || props.defaultValue);

  useEffect(() => setValue(valueProp), [valueProp]);

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  let SelectElement = ReactSelect;
  if (props.loadOptions && props.creatable) {
    SelectElement = ReactSelect.AsyncCreatable;
  } else if (props.loadOptions) {
    SelectElement = ReactSelect.Async;
  } else if (props.creatable) {
    SelectElement = ReactSelect.Creatable;
  }
  const classNames = classnames(className, { 'select-async': props.loadOptions });
  const valueComponentRenderer = valueComponent || (multi ? SelectMultiValue : undefined);

  return (
    <SelectElement
      arrowRenderer={({ isOpen }) => getSelectArrow(isOpen, arrowRenderer)}
      clearRenderer={getCloseButton}
      optionComponent={Option}
      inputProps={{ name, ...inputProps }}
      multi={multi}
      onChange={handleChange}
      value={valueProp || value}
      valueComponent={valueComponentRenderer}
      className={classNames}
      name={name}
      {...props}
    />
  );
};

Select.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  loadOptions: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.any,
  ...ReactSelect.propTypes,
};

Select.defaultProps = {
  onChange: noop,
};

Select.displayName = 'Select';

export default Select;