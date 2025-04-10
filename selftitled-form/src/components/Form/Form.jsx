import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, TextField, Button, Typography, MenuItem, Select, FormControl, FormGroup, FormControlLabel, InputLabel, Alert, Checkbox } from '@mui/material';

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        setValue, 
        formState: { errors },
      } = useForm();
    
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
      
      const onSubmit = async (data) => {
        const formattedData = {
          firstName: data.firstName,
          lastName: data.lastName,
          emailId: data.emailId,
          emailUpdates: data.emailUpdates || false, 
          businessName: data.businessName,
          city: data.city,
          state: data.state,
          zipcode: data.zipcode,
          role: data.role,
          lookingFor: data.lookingFor,
          comments: data.comments
        };
    
        try {
          const response = await fetch('http://localhost:4000/api/users/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formattedData),
          });
    
          const result = await response.json();
    
          if (!response.ok) {
            throw new Error(result.message || 'Sign-up failed');
          }
    
          setSuccessMessage('Signup successful!');
          setErrorMessage('');
          reset();
          
        } catch (error) {
          setErrorMessage(error.message);
        }
      };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card sx={{ maxWidth: 700, p: 3, textAlign: 'center', border: '2px solid green' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <CardContent>
          {successMessage && <Alert severity="success">{successMessage}</Alert>}
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className='form-name'>
            <TextField    
              label="First Name"
              {...register('firstName', { required: 'First name is required' })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              margin="dense"
              sx={{width: 325}}
            />
            <TextField  
              label="Last Name"
              {...register('lastName', { required: 'Last name is required' })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              margin="dense"
              sx={{width: 325}}
            />
            </div>
            <div className='form-email'>
            <TextField
              fullWidth
              label="Email"
              type="email"
              {...register('emailId', { required: 'Email is required' })}
              error={!!errors.emailId}
              helperText={errors.emailId?.message}
              margin="dense"
            />
            <div className='checkbox'>
            <FormGroup>
              <FormControlLabel 
              control={
                <Checkbox {...register('emailUpdates')} 
                color="success"/>
                } 
                label="* I would like email updates"
                />
            </FormGroup>
            </div>
            </div>
            <TextField
              fullWidth
              label="Business/Artist Name"
              {...register('businessName', { required: 'Business/Artist name is required' })}
              error={!!errors.businessName}
              helperText={errors.businessName?.message}
              margin="dense"
            />
            <div className='form-location'>
            <TextField
              label="City"
              {...register('city', { required: 'City is required' })}
              error={!!errors.city}
              helperText={errors.city?.message}
              margin="dense"
              sx={{width: 325}}
            />
            <FormControl 
              margin="dense"
              sx={{width: 325}}  
            >
              <InputLabel>State</InputLabel>
              <Select
                defaultValue=""
                {...register('state', { required: 'Please select a state' })}
                onChange={(e) => setValue('state', e.target.value)}
                error={!!errors.state}
              >
                <MenuItem value="Alabama">Alabama</MenuItem>
                <MenuItem value="Alaska">Alaska</MenuItem>
                <MenuItem value="Arizona">Arizona</MenuItem>
                <MenuItem value="Arkansas">Arkansas</MenuItem>
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="Colorado">Colorado</MenuItem>
                <MenuItem value="Connecticut">Connecticut</MenuItem>
                <MenuItem value="Delaware">Delaware</MenuItem>
                <MenuItem value="Florida">Florida</MenuItem>
                <MenuItem value="Georgia">Georgia</MenuItem>
                <MenuItem value="Hawaii">Hawaii</MenuItem>
                <MenuItem value="Idaho">Idaho</MenuItem>
                <MenuItem value="Illinois">Illinois</MenuItem>
                <MenuItem value="Indiana">Indiana</MenuItem>
                <MenuItem value="Iowa">Iowa</MenuItem>
                <MenuItem value="Kansas">Kansas</MenuItem>
                <MenuItem value="Kentucky">Kentucky</MenuItem>
                <MenuItem value="Louisiana">Louisiana</MenuItem>
                <MenuItem value="Maine">Maine</MenuItem>
                <MenuItem value="Maryland">Maryland</MenuItem>
                <MenuItem value="Massachusetts">Massachusetts</MenuItem>
                <MenuItem value="Michigan">Michigan</MenuItem>
                <MenuItem value="Minnesota">Minnesota</MenuItem>
                <MenuItem value="Mississippi">Mississippi</MenuItem>
                <MenuItem value="Missouri">Missouri</MenuItem>
                <MenuItem value="Montana">Montana</MenuItem>
                <MenuItem value="Nebraska">Nebraska</MenuItem>
                <MenuItem value="Nevada">Nevada</MenuItem>
                <MenuItem value="New Hampshire">New Hampshire</MenuItem>
                <MenuItem value="New Jersey">New Jersey</MenuItem>
                <MenuItem value="New Mexico">New Mexico</MenuItem>
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="North Carolina">North Carolina</MenuItem>
                <MenuItem value="North Dakota">North Dakota</MenuItem>
                <MenuItem value="Ohio">Ohio</MenuItem>
                <MenuItem value="Oklahoma">Oklahoma</MenuItem>
                <MenuItem value="Oregon">Oregon</MenuItem>
                <MenuItem value="Pennsylvania">Pennsylvania</MenuItem>
                <MenuItem value="Rhode Island">Rhode Island</MenuItem>
                <MenuItem value="South Carolina">South Carolina</MenuItem>
                <MenuItem value="South Dakota">South Dakota</MenuItem>
                <MenuItem value="Tennessee">Tennessee</MenuItem>
                <MenuItem value="Texas">Texas</MenuItem>
                <MenuItem value="Utah">Utah</MenuItem>
                <MenuItem value="Vermont">Vermont</MenuItem>
                <MenuItem value="Virginia">Virginia</MenuItem>
                <MenuItem value="Washington">Washington</MenuItem>
                <MenuItem value="West Virginia">West Virginia</MenuItem>
                <MenuItem value="Wisconsin">Wisconsin</MenuItem>
                <MenuItem value="Wyoming">Wyoming</MenuItem>
                <MenuItem value="DC">Washington, DC</MenuItem>
              </Select>
              {errors.state && <Typography color="error">{errors.state.message}</Typography>}
            </FormControl>
            <TextField
              label="Zip Code"
              {...register('zipcode', { required: 'Zip Code is required' })}
              error={!!errors.zipcode}
              helperText={errors.zipcode?.message}
              margin="dense"
            />
            </div>
            <div className='form-role'>
            <FormControl margin="dense">
              <InputLabel>Role</InputLabel>
              <Select
                defaultValue=""
                {...register('role', { required: 'Role is required' })}
                onChange={(e) => setValue('role', e.target.value)}
                error={!!errors.role}
                sx={{width: 325}}
              >
                <MenuItem value="venue">Venue</MenuItem>
                <MenuItem value="artist">Artist</MenuItem>
                <MenuItem value="promoter">Promoter</MenuItem>
              </Select>
              {errors.role && <Typography color="error">{errors.role.message}</Typography>}
            </FormControl>
            <FormControl margin="dense">
              <InputLabel>Looking For</InputLabel>
              <Select
                defaultValue=""
                {...register('lookingFor', { required: 'Role is required' })}
                onChange={(e) => setValue('lookingFor', e.target.value)}
                error={!!errors.lookingFor}
                sx={{width: 325}}
              >
                <MenuItem value="venues">Venues</MenuItem>
                <MenuItem value="artists">Artists</MenuItem>
                <MenuItem value="promoters">Promoters</MenuItem>
              </Select>
              {errors.role && <Typography color="error">{errors.role.message}</Typography>}
            </FormControl>
            </div>
            <div className='form-textbox'>
            <TextField
              {...register('comments')}
              id="outlined-multiline-static"
              label="Comments"
              multiline
              rows={6}
              fullWidth
              margin="dense"
            />
            </div>
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: 'green' }}>
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Form
