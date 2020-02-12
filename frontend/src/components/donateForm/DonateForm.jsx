import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useGlobalState } from "../../state/State";
import controller from "../../controllers";

const DonateForm = props => {
  const { history } = props;
  const [{ user }, dispatch] = useGlobalState();
  const [formValues, setFormValues] = useState({
    type: "",
    description: "",
    value: ""
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const offerData = { ...formValues };
      offerData.donor = user;
      await controller.offers.createOffer(offerData);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="type">Type of Food</label>
        <input
          type="text"
          className="form-control"
          id="type"
          value={formValues.type}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={formValues.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="value">Value</label>
        <input
          type="text"
          className="form-control"
          id="value"
          value={formValues.value}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default DonateForm;
