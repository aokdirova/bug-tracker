"use client";
import { TextArea, TextField, Button } from "@radix-ui/themes";
import { FC } from "react";

interface NewIssuePageProps {}

const NewIssuePage: FC<NewIssuePageProps> = ({}) => {
  return (
    <div className='max-w-xl space-y-5'>
      <TextField.Root>
        <TextField.Input placeholder='Title' />
      </TextField.Root>
      <TextArea placeholder='Description' />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
