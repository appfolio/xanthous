import React from 'react';

const defaultContext: {
  reorderable: boolean;
  minimumRowsReached: boolean;
} = {
  reorderable: true,
  minimumRowsReached: false,
};

const HasManyFields2Context = React.createContext(defaultContext);

export default HasManyFields2Context;
