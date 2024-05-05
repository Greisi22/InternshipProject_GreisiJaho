import  { useState, ChangeEvent, FormEvent } from 'react';

const FormSubmissionPage = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    date: '',
    emailAddress: '',
    active: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('ADD USER', formData);
    // You can send the form data to your backend API here
    // Example: fetch('/api/submitForm', {
    //            method: 'POST',
    //            body: JSON.stringify(formData),
    //            headers: {
    //              'Content-Type': 'application/json'
    //            }
    //          })
    //          .then(response => response.json())
    //          .then(data => console.log(data))
    //          .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">ADD USER</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="restaurantName" className="block text-gray-700">Restaurant Name:</label>
          <input type="text" id="restaurantName" name="restaurantName" value={formData.restaurantName} onChange={handleChange} className="form-input mt-1 block w-full border-solid border-2 border-gray-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="form-input mt-1 block w-full border-solid border-2 border-gray-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="emailAddress" className="block text-gray-700">Email Address:</label>
          <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className="form-input mt-1 block w-full border-solid border-2 border-gray-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="active" className="block text-gray-700">Active:</label>
          <select id="active" name="active" value={formData.active} onChange={handleChange} className="form-select mt-1 block w-full border-solid border-2 border-gray-300">
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default FormSubmissionPage;
