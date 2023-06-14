// Render Prop
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  title: yup.string('Enter Item Name').required('Title is required'),
  body: yup.string('Enter Item Description').required('Body is required'),
  user_id: yup.string('UserId').required('User ID is required'),
});

export default function WithMaterialUI() {
  const formik = useFormik({
		initialValues: {
			title: '',
			body: '',
			user_id: '',
		},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

			fetch('http://localhost:8080/listing/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: values.title,
					body: values.body,
					user_id: values.user_id,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					// Handle the response from the server
					console.log(data);
				})
				.catch((error) => {
					// Handle any errors that occur during the request
					console.error(error);
				});
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

			<TextField
				fullWidth
				id="title"
				name="title"
				label="Title"
				value={formik.values.title}
				onChange={formik.handleChange}
				error={formik.touched.title && Boolean(formik.errors.title)}
				helperText={formik.touched.title && formik.errors.title}
			/>

			<TextField
				fullWidth
				id="body"
				name="body"
				label="Body"
				type="text"
				value={formik.values.body}
				onChange={formik.handleChange}
				error={formik.touched.body && Boolean(formik.errors.body)}
				helperText={formik.touched.body && formik.errors.body}
			/>

			<TextField
				fullWidth
				id="user_id"
				name="user_id"
				label="User ID"
				type="number"
				value={formik.values.user_id}
				onChange={formik.handleChange}
				error={formik.touched.user_id && Boolean(formik.errors.user_id)}
				helperText={formik.touched.user_id && formik.errors.user_id}
			/>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
	)
}

ReactDOM.render(<WithMaterialUI />, document.getElementById('root'))
