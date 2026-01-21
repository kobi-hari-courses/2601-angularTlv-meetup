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
    - Creating a star rating custom field control
    - Using the `max` metadata from the schema to define the range of stars
  
## Demo 4 - Classes based on schema metadata
    - Using the `maxLength` metadata from the schema to add a `short` class to the field control

## Demo 5 - Using metadata in field wrappers
    - Creating a custom wrapper that uses the `required` metadata from the schema to display an asterisk
    - Showing the errors based on state

## Demo 6 - Custom Metadata
    - Understanding that metadata is an extensible concept
    - Using the `metadata` method to extract custom metadata value
    - Understanding `MetadataKey<T>` 
    - Creating our own metadata key using `createMetadataKey<T>()`
    - Populating metadata per field using the `metadata` helper function
    - Creating our own `withLabel` helper function to populate label metadata
    - Using the label metadata in the field wrapper to display the label

## Summary
