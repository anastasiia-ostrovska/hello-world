import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import { Styles } from '@shared/model';
import Box from '@mui/material/Box';

interface EditButtonProps extends IconButtonProps {
  tooltipTitle: string;
  onClick: () => void;
  isDisabled?: boolean;
  sx?: Styles;
}

const EditButton = ({
  tooltipTitle,
  onClick,
  isDisabled = false,
  sx = {},
}: EditButtonProps) => {
  return (
    <Tooltip title={tooltipTitle}>
      <Box sx={{ ...sx }}>
        <IconButton
          aria-label="Edit"
          disabled={isDisabled}
          size="small"
          onClick={onClick}
          sx={{ color: 'text.secondary' }}
        >
          <EditIcon />
        </IconButton>
      </Box>
    </Tooltip>
  );
};

export default EditButton;
