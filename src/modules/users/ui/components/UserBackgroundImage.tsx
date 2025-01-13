import Box from '@mui/material/Box';

interface UserBackgroundImageProps {
  size: number;
  src: string;
}

const UserBackgroundImage = ({ size, src }: UserBackgroundImageProps) => {
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
