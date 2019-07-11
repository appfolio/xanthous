import { formats } from './AddressFormats';

const states = formats.CA.states.map(({ name: label, code: value }) => {
  return {
    label,
    value
  };
});

export default states;