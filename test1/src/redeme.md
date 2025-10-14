What are Hooks in React?

Hooks are functions introduced in React 16.8 that let you use state and other React features inside functional components (which were previously "stateless").

Before hooks, you had to use class components if you wanted features like state, lifecycle methods, or context. With hooks, you can achieve the same functionality (and often more cleanly) in functional components.

Some common hooks:

useState → for state management.

useEffect → for side effects (fetching data, DOM updates, subscriptions).

useContext → for using context API.

useRef → for referencing DOM elements or persisting values.

useReducer → for complex state logic.

How Hooks Differ from Class Component Lifecycle Methods

| **Aspect**            | **Class Components**                                              | **Functional Components with Hooks**         |
| --------------------- | ----------------------------------------------------------------- | -------------------------------------------- |
| **State Management**  | `this.state` and `this.setState()`                                | `useState()` hook                            |
| **Lifecycle Methods** | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` | `useEffect()` handles all of these           |
| **Code Reusability**  | Harder (requires HOCs or render props)                            | Easier with **custom hooks**                 |
| **Readability**       | Can get messy with multiple lifecycle methods in one class        | More concise; related logic grouped together |
| **Binding**           | Must handle `this` binding in methods                             | No binding issues (hooks use closures)       |
