"use client";
import React, { useState } from "react";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import error from "next/error";
import Error from "next/error";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTaskSchema } from "@/app/ValidationSchema";
import { z } from "zod";

type TaskForm = z.infer<typeof createTaskSchema>;

const newTaskpage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskForm>({
    resolver: zodResolver(createTaskSchema),
  });
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
        {errors.title && (
          <Text color="red" as="p">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && (
          <Text color="red" as="p">
            {errors.description.message}
          </Text>
        )}

        <Button>Add Task</Button>
      </form>
    </div>
  );
};

export default newTaskpage;
