import React,{useState} from 'react';
import { Button, Checkbox} from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
export default function Create() {
  const [FirstName,setFirstName] = useState('');
  const [LastName,setLastName] = useState('');
  const [Checkbox,setCheckbox] = useState(false);
  const postData = () =>{
    console.log(FirstName);
    console.log(LastName);
    console.log(Checkbox);
  }
  return(
    <div>
  <Form className='create-form'>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>setCheckbox(e.target.value)} />
    </Form.Field>
    <Button onClick={postData} type='submit' >Submit</Button>
  </Form>
  </div>
  )
}


