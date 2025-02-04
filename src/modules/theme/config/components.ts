const components = {
  MuiPaper: {
    defaultProps: {
      elevation: 2,
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiCheckbox: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '2rem',
      },
    },
  },
};

export default components;
