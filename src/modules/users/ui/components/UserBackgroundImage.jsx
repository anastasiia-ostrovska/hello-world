import Box from '@mui/material/Box';

const UserBackgroundImage = ({ height, src = '' }) => {
  return (
    <Box
      bgcolor="grey.500"
      sx={{
        height,
        width: '100%',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
      }}
    />
  );
};

export default UserBackgroundImage;
