import React, { FC } from 'react';
import Box from '@mui/material/Box';

const Error: FC = () => {
  return (
    <Box className='flex max-w-md items-center gap-3 rounded-lg border-l-4 border-red-600 bg-white py-4 px-6 shadow-lg'>
      <Box>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7 text-red-600'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
            clipRule='evenodd'
          />
        </svg>
      </Box>
      <Box>
        <h3 className='font-semibold'>Error</h3>
        <p className='text-gray-500'>
          Ha ocurrido un error al registrar la cuenta
        </p>
      </Box>
    </Box>
  );
};

export default Error;
