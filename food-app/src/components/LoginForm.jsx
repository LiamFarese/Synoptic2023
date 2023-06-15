// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
		.required('Username is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function WithMaterialUI() {
	const formik = useFormik({
    initialValues: {
			username: '',
			password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

			fetch('http://localhost:8080/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: values.username,
					password: values.password,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					// Handle the response from the server
					console.log(data + "Login successful");
					alert("Login Successful")
				})
				.catch((error) => {
					// Handle any errors that occur during the request
					console.error(error + "Login failed");
					alert("Login Failed")
				});
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
					type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
					sx={{ paddingBottom: 2 }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
					sx={{ paddingBottom: 2 }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" >
          Submit
        </Button>
      </form>
    </div>
  )
}

ReactDOM.render(<WithMaterialUI />, document.getElementById('root'))