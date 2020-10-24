import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import { object, mixed, number } from 'yup';

export default function Home () {
  return (
    <Card>
      <CardContent>
       <Formik
         validationSchema={object({
           money: mixed().when('millionaire', {
            is: true,
            then: number().required().min(1_000_000, 'Because you said you are a millionaire you need to have 1 million.'),
            otherwise: number().required()   
           })  
         })}
         initialValues={{
            firstName: "",
            lastName: "",
            millionaire: false,
            money: 0,
            description: "",

       }} onSubmit={() => {}}>
        <Form autoComplete="off">
          <div>
            <Field name='firstName' component={TextField} label="First Name" />
            <Field name='lastName' component={TextField} label="Last Name" />
            <Field name='millionaire' type="checkbox" component={CheckboxWithLabel} Label={{ label: "I am a millionaire"  }} />
          </div> 

          <div>
            <Field name='money' type="number" component={TextField} label="All the money I have" />
          </div>

          <div>          
           <Field name='description' component={TextField} label="Description" />              
          </div> 
        </Form>  
       </Formik>    
      </CardContent> 
    </Card>  
  )  
}


export function FormikStepper({children, ...props} : FormikConfig<FormikValues>) {

}