1. What problem does the context API help solve?

Answer:  Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Answer: 
Actions change state, the store holds state value, reducers process action by accpeting previous state and making a new state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Answer: 
Application state is state of app at a given time, information can be passed to other components easily.  While component state is state contained in a component, that can be passed down as props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Answer: It allows us to make asynchronous operations in redux. Thunk is a term for a function that returns another function. We use thunk to return async operations

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Answer: redux, because of the power that comes from its library