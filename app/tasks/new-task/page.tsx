"use client";
import React from "react";
import { TextField, TextArea, Button } from "@radix-ui/themes";
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
      <TextArea placeholder="Description" />
      <Button>Add Task</Button>
    </div>
  );
};

export default newTaskpage;
