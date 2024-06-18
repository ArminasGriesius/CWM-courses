import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" }),
  amount: z.coerce.number().min(0.01, { message: "Nothing is free" }),
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

  const [itemList, setItemList] = useState([
    { id: 1, description: "Ice", amount: 4, category: "groceries" },
    { id: 2, description: "Icecream", amount: 8, category: "groceries" },
  ]);

  const submitHandle = (data: FormData) =>
    setItemList([...itemList, { ...data, id: itemList.length + 1 }]);

  return (
    <form onSubmit={handleSubmit(submitHandle)}>
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

          {itemList.map((item) => (
            <div key={item.id} className="row border">
              <div className="col border">{item.description}</div>
              <div className="col border">{item.amount}</div>
              <div className="col border">{item.category}</div>
              <div className="col border">
                <button className="btn btn-outline-danger">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};
export default FormExercise;
