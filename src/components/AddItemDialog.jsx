import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Controller from '../controller/Controller';
import { useForm } from 'react-hook-form';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const { control, handleSubmit, reset, formState: {errors}, } = useForm({
    defaultValues: {
        name: '',
        quote: '',
        image: '',
        sound: '',
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nieuw Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Voeg een nieuw item toe aan de soundboard
          </DialogContentText>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
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
                Validate: (value) => {
                  if (value.includes("http")) {
                    return true;
                  } else {
                    return "URL is not valid";
                  }
                }
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
                Validate: (value) => {
                  if (value.includes("http")) {
                    return true;
                  } else {
                    return "URL is not valid";
                  }
                }
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
          <Button onClick={handleClose}>Annuleer</Button>
          <Button onClick={handleClose}>Toevoegen</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}