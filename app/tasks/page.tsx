import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const tasksTracker = () => {
  return (
    <div>
      <Button>
        <Link href="/tasks/new-task">New page</Link>
      </Button>
    </div>
  );
};

export default tasksTracker;
