import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

type IProps = {
  destroy: () => void,
};

export const TweetDeleteButton: React.FC<IProps> = (props: IProps) => {
  const { destroy } = props;

  return (
    <div>
      <IconButton aria-label="delete" color="secondary" onClick={destroy}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
