import React from "react";
import { useFormik } from "formik";
import { spacing } from "@mui/system";
import { palette } from "@mui/system";
import * as Yup from "yup";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  Button,
  TextField,
  FormControlLabel,
} from "@mui/material";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: 0,
      message: "",
      agree: false,
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      program: Yup.number().integer().typeError("Please select a program."),
      message: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Typography align="center" padding={3}>
          <h1>Contact Us</h1>
        </Typography>
        <TextField
          sx={{ height: 100 }}
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <Typography variant="caption" color="red">
            {formik.errors.name}
          </Typography>
        )}
        <TextField
          sx={{ height: 100 }}
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <Typography variant="caption" color="red">
            {formik.errors.email}
          </Typography>
        )}
        <TextField
          sx={{ height: 100 }}
          label="phone"
          name="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && (
          <Typography variant="caption" color="red">
            {formik.errors.phone}
          </Typography>
        )}
        <FormControl sx={{ m: 1, minWidth: 210, height: 100 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Program of Study
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            label="Program of Stydy"
            name="program"
            value={formik.values.program}
            onChange={formik.handleChange}
          >
            <MenuItem sx={{ height: 50 }} value={0}>
              <em>Please select</em>
            </MenuItem>
            <MenuItem sx={{ height: 50 }} value={1}>
              Software Engineering
            </MenuItem>
            <MenuItem sx={{ height: 50 }} value={2}>
              Information System
            </MenuItem>
            <MenuItem sx={{ height: 50 }} value={3}>
              Information Assurance
            </MenuItem>
            <MenuItem sx={{ height: 50 }} value={4}>
              Internet of Things
            </MenuItem>
            <MenuItem sx={{ height: 50 }} value={5}>
              Artificial Intelligence
            </MenuItem>
            <MenuItem sx={{ height: 50 }} value={6}>
              Digital Art & Design
            </MenuItem>
          </Select>
          {formik.errors.program && (
            <Typography variant="caption" color="red">
              {formik.errors.program}
            </Typography>
          )}
        </FormControl>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          name="message"
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        {formik.errors.message && (
          <Typography variant="caption" color="red">
            {formik.errors.message}
          </Typography>
        )}
        <FormControlLabel
          sx={{ pt: 2 }}
          control={<Switch />}
          label="Agree to terms and conditions."
          name="agree"
          value={formik.values.agree}
          onClick={formik.handleChange}
        />
        {formik.errors.agree && (
          <Typography variant="caption" color="red">
            {formik.errors.agree}
          </Typography>
        )}
        <Button
          sx={{ pt: 2, bgcolor: "info.main", color: "white" }}
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
