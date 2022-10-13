import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Controller, useForm} from "react-hook-form";
import {ItemData} from "../model/Item";

const REQUIRED_FIELD_MESSAGE = "This field is required";
const MIN_LENGHT_MESSAGE = (length: number) =>
    `Please enter minimum ${length} characters.`;

    interface AddItemDialogProps {
      isOpen: boolean;
      onClose: () => void;
      onSubmit: (data: ItemData) => void;
    }

export default function AdditemDialog({
  isOpen,
  onClose,
  onSubmit,
}: AddItemDialogProps) {
  const [open, setOpen] = React.useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      quote: "",
      image: "",
      sound: "",
    },
  });

  const _onSubmit = (data: ItemData) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Nieuw Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Voeg een nieuw item toe aan de soundboard
          </DialogContentText>
          <form onSubmit={handleSubmit(_onSubmit)}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: true,
                minLength: { value: 3, message: "Min length is 3" },
              }}
              render={({ field }) => (
                <TextField
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  {...field}
                  label="Name"
                />
              )}
            />

            <Controller
              name="quote"
              control={control}
              rules={{
                required: true,
                minLength: { value: 3, message: "Min length is 3" },
              }}
              render={({ field }) => (
                <TextField
                  error={!!errors.quote}
                  helperText={errors.quote?.message}
                  {...field}
                  label="quote"
                />
              )}
            />

            <Controller
              name="image"
              control={control}
              rules={{
                required: true,
                minLength: { value: 3, message: "Min length is 3" },
              }}
              render={({ field }) => (
                <TextField
                  error={!!errors.image}
                  helperText={errors.image?.message}
                  {...field}
                  label="Image URL"
                />
              )}
            />

            <Controller
              name="sound"
              control={control}
              rules={{
                required: true,
                minLength: { value: 3, message: "Min length is 3" },
              }}
              render={({ field }) => (
                <TextField
                  error={!!errors.sound}
                  helperText={errors.sound?.message}
                  {...field}
                  label="Sound URL"
                />
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button type="reset" variant="outlined" onClick={() => reset()}>
            Clear
          </Button>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}