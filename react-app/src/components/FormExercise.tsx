import React from "react";

const FormExercise = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input className="form-control" type="text" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">
          Amount
        </label>
        <input className="form-control" type="number" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="description">
          Category
        </label>
        <div>
          <select className="form-select" name="options" id="options">
            <option value=""></option>
            <option value="groceries">Groceries</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
      <div className="pt-5">
        <select className="form-select" name="options" id="options">
          <option value="all">All cetegories</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
    </form>
  );
};
export default FormExercise;
