"use client";
import React from "react";
import { TextField, Button } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";

interface TaskForm {
  title: string;
  description: string;
}

const newTaskpage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<TaskForm>();

  return (
    <form
      className="space-y-3 max-w-xl"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/tasks", data);
        router.push("/tasks");
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
  );
};

export default newTaskpage;
