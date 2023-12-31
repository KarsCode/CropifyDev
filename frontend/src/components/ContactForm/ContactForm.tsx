"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useToast } from "../ui/use-toast"


const formSchema = z.object({
  email: z.string().email( {
    message: "Enter Valid Email @",
  }),
  text:z.string().min(10,{
    message:"Must be greater than 10 characters."
  })
  .max(200,{
    message:"Must be lesser than 200 characters."
  })
})

export function ProfileForm() {
  // ...
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          text:"",
        },
      })
      const { toast } = useToast()

      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {

        const currentTime = new Date();
        const options = { weekday: 'long' as const, year: 'numeric' as const, month: 'long' as const, day: 'numeric' as const, hour: 'numeric' as const, minute: 'numeric' as const, second: 'numeric' as const };
        const formattedTime = currentTime.toLocaleDateString('en-US',options);
        
        toast({
            title: "Your submission was succesfully recorded at: ",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-crophover p-4">
                {formattedTime}
              </pre>
            ),  
          })
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="placeholder@hotmail.com" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text Area</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What's on your mind ?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Must be lesser than 200 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
