What are Custom Hooks in React?
Custom Hooks are reusable functions in React that let you extract and share stateful logic between components.
They are JavaScript functions that use React hooks (like useState, useEffect, useContext, etc.) inside them.
Custom hooks help avoid code duplication and make logic easier to test and maintain.
By convention, their names start with use (e.g., useFetch, useAuth, useForm).

🔹 Example Scenario
Imagine you are fetching data from an API in multiple components. Instead of repeating the same useEffect + useState logic in each component, you can create a custom hook useFetch.