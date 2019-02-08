import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {

    return  (
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
               disabled={loading}
               value={loading ? 'Saving..' : 'Save'}
               className="btn btn-primary"
               onClick={onSave}
              />
        </form>
        
    )
}

export default CourseForm;