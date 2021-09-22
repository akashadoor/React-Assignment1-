
import React, { useState } from "react";
import './App.css';

import data from "./data.json";
import { nanoid } from 'nanoid';
import ReactDatePicker from "react-datepicker";
const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    title: '',
    description: '',
    assignedto: '',
    duration: '',
    completiondate: '',
    createddate: '',
    parenttask: ''

  });
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData =  {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      title: addFormData.title,
    description: addFormData.description,
    assignedto: addFormData.assignedto,
    duration: addFormData.duration,
    completiondate: addFormData.completiondate,
    createddate: addFormData.createddate,
    parenttask: addFormData.parenttask
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

  };


  return (
    <div className="app-container">
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Assigned to</th>
            <th>Duration</th>
            <th>Completion Date</th>
            <th>Created Date</th>
            <th>Parent task</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
             <tr>
             <td>{contact.title}</td>
             <td>{contact.description}</td>
             <td>{contact.assignedto}</td>
             <td>{contact.duration}</td>
             <td>{contact.completiondate}</td>
             <td>{contact.createddate}</td>
             <td>{contact.parenttask}</td>
            
           </tr>

          ))}
           

        </tbody>
            </table>
            

      
      <h2>ADD</h2>    
      <form onSubmit={handleAddFormSubmit}>
         <input type ="text" 
          name="title" 
          required="required"
           placeholder="Enter title"
           onChange={handleAddFormChange}
           /> 
              
          <input type ="text" 
          name="description" 
          required="required"
           placeholder="Enter description"
           onChange={handleAddFormChange}
           />


          <input type ="text" 
          name="assigned to" 
          required="required"
           placeholder="Assigned to "
           onChange={handleAddFormChange}
           />

          <input type ="number" 
          name="duration" 
          required="required"
           placeholder="Enter duration"
           onChange={handleAddFormChange}
           />

          <input type ="text" 
          name="completiondate" 
          required="required"
           placeholder="Completion Date"
           onChange={handleAddFormChange}
           />

          <input type ="text" 
          name="createddate" 
          required="required"
           placeholder="Created Date"
           onChange={handleAddFormChange}
           />


          <input type ="text" 
          name="parenttask" 
          required="required"
           placeholder="Parent Task"
           onChange={handleAddFormChange}
           />

        <button type="submit">ADD</button>
      </form>
      </div>
  );
};
export default App;