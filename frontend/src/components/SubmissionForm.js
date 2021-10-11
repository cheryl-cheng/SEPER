import React, { useState } from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Select from "@mui/material/Select";

import { useForm } from "react-hook-form";
import { submitArticleSuggestion } from "../api/Article";

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {
    const data = {
      title,
      authors,
      source,
      pubyear: pubYear,
      volume,
      numpages: numPages,
      doi,
      sepractice: practice,
    };
    console.log(data);
    submitArticleSuggestion(data);
    setSuccessMessage("Successfully submitted. Thank you for your submission.");
  };

  const [successMessage, setSuccessMessage] = useState("");

  // Form field values
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [source, setSource] = useState("");
  const [pubYear, setPubYear] = useState("");
  const [volume, setVolume] = useState("");
  const [numPages, setNumPages] = useState("");
  const [doi, setDoi] = useState("");
  const [practice, setPractice] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeAuthorHandler = (event) => {
    setAuthors(event.target.value);
  };
  const changeSourceHandler = (event) => {
    setSource(event.target.value);
  };
  const changePubYearHandler = (event) => {
    setPubYear(event.target.value);
  };
  const changeVolumeHandler = (event) => {
    setVolume(event.target.value);
  };
  const changeNumPagesHandler = (event) => {
    setNumPages(event.target.value);
  };
  const changeDoiHandler = (event) => {
    setDoi(event.target.value);
  };
  const changeSePracticeHandler = (event) => {
    setPractice(event.target.value);
  };

  const handleFile = (e) => {
    const content = e.target.result;
    const items = content.split("\r\n");

    items.forEach((item) => {
      const firstColonIndex = item.indexOf(":");
      const splitItem = [
        item.substring(0, firstColonIndex),
        item.substring(firstColonIndex + 1),
      ];

      const infoKey = splitItem[0];
      const infoValue = splitItem[1];

      switch (infoKey) {
        case "title":
          setTitle(infoValue);
          break;
        case "authors":
          setAuthors(infoValue);
          break;
        case "source":
          setSource(infoValue);
          break;
        case "pubyear":
          setPubYear(infoValue);
          break;
        case "volume":
          setVolume(infoValue);
          break;
        case "numpages":
          setNumPages(infoValue);
          break;
        case "doi":
          setDoi(infoValue);
          break;
        case "sepractice":
          setPractice(infoValue);
          break;
        default:
          break;
      }
    });
  };

  const fileUploaded = (file) => {
    const reader = new FileReader();
    reader.onloadend = handleFile;
    reader.readAsText(file[0]);
  };

  // This could be passed in from DB or prop - currently mock data
  const practices = ["TDD", "Mob Programming"];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <FormWrapper>
          <TextField
            required
            id="suggestion-article-title"
            label="Article Title"
            {...register("title")}
            value={title}
            onChange={changeTitleHandler}
          />
          <TextField
            required
            id="suggestion-authors"
            label="Author(s)"
            {...register("authors")}
            value={authors}
            onChange={changeAuthorHandler}
          />
          <TextField
            required
            id="suggestion-source"
            label="Source"
            {...register("source")}
            value={source}
            onChange={changeSourceHandler}
          />
          <TextField
            required
            type="number"
            id="suggestion-year"
            label="Publication year"
            {...register("pubyear")}
            value={pubYear}
            onChange={changePubYearHandler}
          />
          <TextField
            required
            id="suggestion-volume"
            label="Volume"
            {...register("volume")}
            value={volume}
            onChange={changeVolumeHandler}
          />
          <TextField
            required
            type="number"
            id="suggestion-pages"
            label="Number of pages"
            {...register("numpages")}
            value={numPages}
            onChange={changeNumPagesHandler}
          />
          <TextField
            required
            id="suggestion-doi"
            label="DOI"
            {...register("doi")}
            value={doi}
            onChange={changeDoiHandler}
          />
          <InputLabel id="practice-label">SE Practice *</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            label="SE Practice"
            {...register("sepractice")}
            inputProps={{ "aria-label": "Without label" }}
            value={practice}
            onChange={changeSePracticeHandler}
          >
            {practices.map((practice) => {
              return <MenuItem value={practice}>{practice}</MenuItem>;
            })}
          </Select>
          <SubmitButton type="submit">Submit Article Suggestion</SubmitButton>
          <p>{successMessage}</p>
        </FormWrapper>
        <UploadWrapper>
          <p>Upload a file containing article information</p>
          <input
            type="file"
            id="article-uploader"
            accept=".txt"
            multiple="false"
            onChange={(e) => fileUploaded(e.target.files)}
          />
          <p>
            Format: line separated key:value pairs in a .txt file. Click below
            for example...
          </p>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>File Example</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                title:Test-Driven Development of Automotive Software
                Functionality
                <br />
                authors:Yogesh. T., Vimala. P.
                <br />
                source:2020 Third International Conference on Smart Systems and
                Inventive Technology (ICSSIT) Smart Systems and Inventive
                Technology (ICSSIT)
                <br />
                pubyear:2020
                <br />
                volume:3
                <br />
                numpages:3
                <br />
                doi:10.1109/ICSSIT48917.2020.9214078
                <br />
                sepractice:TDD
              </p>
            </AccordionDetails>
          </Accordion>
        </UploadWrapper>
      </FormContainer>
    </form>
  );
};
export default SubmissionForm;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  margin-right: 24px;

  .MuiTextField-root {
    margin-bottom: 12px;
  }
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
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
