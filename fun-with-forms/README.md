## Demo 0 - Field is now `FormField`

## Demo 1 - Field Styling
    - using `provideSignalFormsConfig` in the config file
    - The `NG_STATUS_CLASSES` constant provides the original class names of reactive forms
    - We can define out own class names for additional or alternative class name logic
    - Each class is defined using a function that takes the form control state as an argument and returns a boolean
    - The function is expected to run in reactive context, so we can use signals inside the function body

## Demo 2 - Validation Schema Metadata
    - Trying to enter `min` and `max` values in the input template - and failing
    - Adding validation rules to the schema
    - The validation rules are now reflected in the input attributes

## Demo 3 - Schema Metadata in custom field controls