import Box from '@mui/material/Box';

const UserBackgroundImage = ({ size, src = '' }) => {
  return (
    <Box
      bgcolor="grey.300"
      sx={{
        height: size,
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
