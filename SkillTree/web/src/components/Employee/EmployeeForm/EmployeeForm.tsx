import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const EmployeeForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.employee?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="first_Name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>
        
          <TextField
            name="first_Name"
            defaultValue={props.employee?.first_Name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="first_Name" className="rw-field-error" />

        <Label
          name="last_Name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>
        
          <TextField
            name="last_Name"
            defaultValue={props.employee?.last_Name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="last_Name" className="rw-field-error" />

        <Label
          name="field"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field
        </Label>
        
          <TextField
            name="field"
            defaultValue={props.employee?.field}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="field" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EmployeeForm
