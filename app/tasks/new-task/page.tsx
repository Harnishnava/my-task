"use client";
import React from "react";
import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { CiSearch } from "react-icons/ci";

const newTaskpage = () => {
  return (
    <div className="space-y-3 max-w-xl">
      <TextField.Root>
        <TextField.Slot>
          <CiSearch height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Add Task</Button>
    </div>
  );
};

export default newTaskpage;
