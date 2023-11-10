"use client";
import { TextField, Button } from "@radix-ui/themes";
import { FC } from "react";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface NewIssuePageProps {}
interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage: FC<NewIssuePageProps> = ({}) => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <form
      className='max-w-xl space-y-5'
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}>
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register("title")} />
      </TextField.Root>
      <Controller
        name='description'
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder='Description' {...field} />
        )}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
