import React from 'react';
import { Stack } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
  <ThreeDots color="gray" height={50} width={50} />

  </Stack>
);

export default Loader;
