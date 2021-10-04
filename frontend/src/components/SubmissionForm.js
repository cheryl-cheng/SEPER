import React, { useState } from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { useForm } from "react-hook-form";
import { submitArticleSuggestion } from "../api/Article";

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    submitArticleSuggestion(data);
    setSuccessMessage("Successfully submitted. Thank you for your submission.");
  };

  const [practice, setPractice] = useState("SE Practice");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePracticeChange = (event) => {
    setPractice(event.target.value);
  };

  // This could be passed in from DB or prop - currently mock data
  const practices = ["TDD", "Mob Programming"];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <TextField
          required
          id="suggestion-article-title"
          label="Article Title"
          {...register("title")}
        />
        <TextField
          required
          id="suggestion-authors"
          label="Author(s)"
          {...register("authors")}
        />
        <TextField
          required
          id="suggestion-journal"
          label="Journal Name"
          {...register("source")}
        />
        <TextField
          required
          type="number"
          id="suggestion-year"
          label="Publication year"
          {...register("pubyear")}
        />
        <TextField
          id="suggestion-volume"
          label="Volume"
          {...register("volume")}
        />
        <TextField
          id="suggestion-pages"
          label="Pages"
          {...register("numpages")}
        />
        <TextField id="suggestion-doi" label="DOI" {...register("doi")} />
        <InputLabel id="practice-label">SE Practice *</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          value={practice}
          label="SE Practice"
          {...register("sepractice")}
          inputProps={{ "aria-label": "Without label" }}
          onChange={handlePracticeChange}
        >
          {practices.map((practice) => {
            return <MenuItem value={practice}>{practice}</MenuItem>;
          })}
        </Select>
        <SubmitButton type="submit">Submit Article Suggestion</SubmitButton>
        <p>{successMessage}</p>
      </FormWrapper>
    </form>
  );
};
export default SubmissionForm;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  .MuiTextField-root {
    margin-bottom: 12px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 16px;
  min-height: 32px;
  background-color: green;
  border: none;
  color: white;
  border-radius: 6px;
  transition: background-color ease-in-out 0.3s;

  :hover {
    cursor: pointer;
    background-color: lightgreen;
  }
`;
