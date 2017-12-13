import React from 'react';

const hi = '';

const AddRootCategory = () => (
  <div className="adding-input adding-input_short">
    <form className="input-group" onSubmit={() => {}}>
      <input
        name="add-category"
        type="text"
        value={hi}
        onChange={() => {}}
        className="form-control"
        placeholder="Enter category title"
        aria-label="add-category"
      />
      <span className="input-group-btn">
        <input type="submit" value="Add" className="btn btn-secondary" />
      </span>
    </form>
  </div>
);

export default AddRootCategory;
