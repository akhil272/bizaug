"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[\d\s-]{10,}$/, "Please enter a valid phone number"),
  business: z.string().optional(),
  helpOptions: z.array(z.string()).min(1, "Please select at least one option"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      business: "",
      helpOptions: [],
    },
  });
  async function onSubmit(data: FormValues) {
    try {
      setIsSubmitting(true);
      console.log("Form submission started:", data);
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success("Thank you! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Error! Unable to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="py-4 lg:py-10">
      <div className="lg:flex flex-col max-w-5xl mx-auto gap-4 text-secondary px-4">
        <h1 className="text-4xl font-bold py-4">
          We&apos;ve got the skills. Lets team up.
        </h1>
        <p className="pt-4">Tell us more about yourself and your business</p>
        <div className="flex flex-col gap-4 py-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+91-95622-02688" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="business"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Tell us a little about your business (Optional)
                    </FormLabel>
                    <FormControl>
                      <textarea
                        rows={4}
                        placeholder="E.g., A small tech startup"
                        className="flex w-full text-primary rounded-md border border-input bg-secondary px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="helpOptions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help?</FormLabel>
                    <div className="space-y-2 grid grid-cols-2">
                      {["Website Design", "UX Design", "Branding", "Other"].map(
                        (option) => (
                          <div
                            key={option}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              value={option}
                              checked={field.value.includes(option)}
                              onChange={(e) => {
                                const checked = e.target.checked;
                                const value = e.target.value;
                                field.onChange(
                                  checked
                                    ? [...field.value, value]
                                    : field.value.filter((v) => v !== value)
                                );
                              }}
                            />
                            <label>{option}</label>
                          </div>
                        )
                      )}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-yellow-500 text-primary text-lg hover:bg-yellow-500/80"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Let's Get Started!"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
