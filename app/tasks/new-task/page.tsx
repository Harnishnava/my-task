"use client";
import React, { useState } from "react";
import { TextField, Button, Callout } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import error from "next/error";
import Error from "next/error";

interface TaskForm {
  title: string;
  description: string;
}

const newTaskpage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<TaskForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/tasks", data);
            router.push("/tasks");
          } catch (error) {
            setError("An unexpected error accured.");
          }
        })}
      >
        <TextField.Root>
          <TextField.Slot>
            <CiSearch height="16" width="16" />
          </TextField.Slot>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Button>Add Task</Button>
      </form>
    </div>
  );
};

export default newTaskpage;
