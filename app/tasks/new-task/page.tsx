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
import Spinner from "@/app/components/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTaskSchema } from "@/app/ValidationSchema";
import Errormessage from "@/app/components/Errormessage";
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
  const [isSubmmiting, setSubmmiting] = useState(false);

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
            setSubmmiting(true);
            await axios.post("/api/tasks", data);
            router.push("/tasks");
          } catch (error) {
            setSubmmiting(false);
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
        <Errormessage>{errors.title?.message}</Errormessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <Errormessage>{errors.description?.message}</Errormessage>

        <Button disabled={isSubmmiting}>
          Add Task {isSubmmiting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default newTaskpage;
