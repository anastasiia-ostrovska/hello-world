import { ModeSwitcher } from '@/modules/ModeSwitcher';
import Stack from '@mui/material/Stack';

const Components = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      useFlexGap
      sx={{ flexWrap: 'wrap', p: 2 }}
    >
      <ModeSwitcher />
    </Stack>
  );
};

export default Components;
