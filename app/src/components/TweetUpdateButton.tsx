import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { TweetState } from 'reducers/entitiesReducer';
import { TextFormDialogParams, TextFormDialog } from './TextFormDialog';

type IProps = {
  tweet: TweetState,
  update: (updated: TweetState) => void,
};

export const TweetUpdateButton: React.FC<IProps> = (props: IProps) => {
  const { tweet, update } = props;
  const [open, setOpen] = React.useState(false);

  const params: TextFormDialogParams = {
    title: 'Edit Tweet',
    label: 'Tweet',
    buttonName: 'Update',
    defaultValue: tweet.content,
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const _props = {
    open,
    setOpen,
    handleClick: (updatedContent: string) => {
      const updatedTweet: TweetState = {
        id: tweet.id,
        content: updatedContent
      };

      update(updatedTweet);
    },
    params,
  }

  return (
    <div>
      <IconButton aria-label="edit" color="primary" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <TextFormDialog {..._props} />
    </div>
  );
};
