import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" />
      <p>
        <input {...register("authors")} placeholder="Author(s)" />
      </p>
      <p>
        <input {...register("source")} placeholder="Journal Name" />
      </p>
      <p>
        <input
          type="number"
          {...register("pubyear")}
          placeholder="Publication Year"
        />
      </p>
      <p>
        <input {...register("volume")} placeholder="Volume" />
      </p>
      <p>
        <input
          type="number"
          {...register("pubyear")}
          placeholder="Number of pages"
        />
      </p>
      <p>
        <input {...register("doi")} placeholder="DOI" />
      </p>

      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programmin</option>
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
};
export default SubmissionForm;
