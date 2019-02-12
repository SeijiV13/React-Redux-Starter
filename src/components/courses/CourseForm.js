import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {

    return  (
      <div className="row">
      <div className="col-sm-4">
      </div>
      <div className="col-sm-4">
        <form>
            <TextInput
              name="title"
              label="Title"
              value={course.title}
              onChange={onChange}
              error={errors.title}
              ></TextInput>
            
            <SelectInput
              name="authorId"
              label="Author"
              value={course.authorId}
              defaultOption="Select Author"
              onChange={onChange}
              options={allAuthors}
              error={errors.title}
              ></SelectInput>

            <TextInput
              name="category"
              label="Category"
              value={course.category}
              onChange={onChange}
              error={errors.category}
              ></TextInput>

             <TextInput
              name="length"
              label="Length"
              value={course.length}
              onChange={onChange}
              error={errors.length}
              ></TextInput>

              <input
               type="submit"
               disabled={saving}
               value={saving ? 'Saving..' : 'Save'}
               className="btn btn-primary"
               onClick={onSave}
              />
        </form>
        
      </div>
         <div className="col-sm-4">
         </div>
      </div>
    )
}

export default CourseForm;