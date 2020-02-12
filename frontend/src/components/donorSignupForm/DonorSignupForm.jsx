import React, { useState } from "react";
import controller from "../../controllers";
import { useGlobalState } from "../../state/State";
import { types } from "../../state/reducers";

const DonorSignupForm = props => {
  const { history } = props;
  const [{ user }, dispatch] = useGlobalState();

  const [formValues, setFormValues] = useState({
    name: "",
    city: "",
    zip: "",
    street: ""
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const donorInfo = {
        name: formValues.name,
        address: {
          city: formValues.city,
          street: formValues.street,
          zip: formValues.zip
        }
      };
      const newDonor = await controller.donors.createDonor(donorInfo);
      dispatch({ type: types.UPDATE_USER, payload: newDonor });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={formValues.name}
          onChange={handleChange}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="form-control"
          value={formValues.city}
          onChange={handleChange}
          id="city"
        />
      </div>
      <div className="form-group">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          className="form-control"
          value={formValues.street}
          onChange={handleChange}
          id="street"
        />
      </div>
      <div className="form-group">
        <label htmlFor="zip">Zip</label>
        <input
          type="text"
          className="form-control"
          value={formValues.zip}
          onChange={handleChange}
          id="zip"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default DonorSignupForm;
