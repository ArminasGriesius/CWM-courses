import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01, { message: "Nothing is free" }),
  category: z.string({ invalid_type_error: "Amount is required" }),
});

type FormData = z.infer<typeof schema>;

const FormExercise = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          className="form-control"
          type="text"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          className="form-control"
          type="number"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">
          Category
        </label>
        <div>
          <select
            {...register("category")}
            className="form-select"
            name="options"
            id="options"
          >
            <option value=""></option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
      <div className="pt-5">
        <select className="form-select" name="options" id="options1">
          <option value="all">All cetegories</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <div className="container mt-5">
        <div className="row border">
          <div className="col border">
            <strong>Description</strong>
          </div>
          <div className="col border">
            <strong>Amount</strong>
          </div>
          <div className="col border">
            <strong>Category</strong>
          </div>
          <div className="col border"></div>
          <div className="w-100 border"></div>
          <div className="col border">Milk</div>
          <div className="col border">5</div>
          <div className="col border">Groceries</div>
          <div className="col border">
            <button className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default FormExercise;
