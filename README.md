# GraphQL Test Suite

A proof of concept to demonstrate how Typescript can be used for writing the tests suit.

Check `dist/StarWars/StarWars_Query.yaml` for an example of a generated file.
Typescript provides type hints and autocompletion and it will make it easier to maintain when file sizes increase significantly. It also provides an environment with possibility of automating tasks later.

## Test Schema

```yaml
- Scenario: A scenario is generic condition or case for which we are testing.

  CommonData: Common data available to all the tests. All properties are @Optional
    Schema: The GraphQL schema to be used in a test.
    SchemaFile: The location to a .graphql schema file to be used in a test.
    TestData: Data to be used in a test.
    TestDataFile: the location to a YAML or JSON file containing data to be used in a test.

  Tests: Array of tests.
    - Name: Name of the test.
      Mock: Mock data and schema to be used in the test. Extends { CommonData }.
        Query: The GraphQL query to be used in a test.

      Action: The kind of operation to be done on the query.
        Type: Type of action to be taken, can be one of
          - Parsing : Parse the the given query.
          - Validation : Validate the given query.
          - Execution : Execute the given query.
            - Execute: Extra properties for Execution case
              - Execution_Target:
                  The name of the operation to execute, in case query  contains multiple. @Optional
              - Validated:
               `true` if query should be validated during execution. otherwise `false`. @Optional
              - Data_Target:
                 The name of the data object to be used in the test, picked from `TestData` in Mock field. @Optional

      Assertion: The expected result of the action, to be used for direct comparisons in the test.

        Expectation: The case for which we will assert. It can be one of...
         - Success: The Parsing or Validation was successful @Action_Type Parsing | Validation.
          - Syntax Error: A syntax error occurred while parsing. @Action_Type Parsing
          - Execution Result: Expect a result a after execution. @Action_Type Execution
               - Result: The result of the execution.
          - Error Count: Expect an error count when error has occurred. @Action_Type Validation | Execution
               - ErrorCount: The number of errors encountered.
          - Error Message: Expect an error message while Validation or execution.
               @Action_Type Validation | Execution
               - ErrorMessage: The error message to be matched.
               - Locations: Location or Array of Location @Optional
                  - Location: { Line , Column }
          - Execution Exception: Expect an an exception to occur during execution. @Action_Type Execution
               - Exception: The exception string to be matched.
```

## Running the project

Clone this repository.
Then run.

```sh
cd GraphQL_Test_Suite
npm install
```

### Generate Distribution Files

```sh
npm run start
```

### Generate Documentation

```sh
npm run docs
```

## Folder Structure

```sh
.
├── dist       // The files to distributed live here.
│ └── StarWars // The distribution folder for the starwars example tests.
│
├── docs       // The autogenerated documentation from using `typedoc`
│
├── src        // The automation script and all tests live here.
│ ├── Execution // Tests related to execution of queries.
│ ├── Parsing   // Tests related to parsing of queries.
│ ├── StarWars  // The StarWars example that tests all types of uses cases.
│ ├── types    // Typescript type definitions
│ ├── Validation // Tests related to Validation of queries.
│ └── CreateDistFiles.ts   // The script responsible for generation of all distributions files.
```
