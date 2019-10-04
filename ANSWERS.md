- [ ] Why would you use class component over function components (removing hooks from the question)?
If state or lifecycle hooks are needed in your component then a class based approach is best. This is because functional components are stateless and lifecycle hooks are also only available from React.Component which class components extends.
- [ ] Name three lifecycle methods and their purposes.
componentDidMount - runs when the component is mounted and is first created. If you want to do something once at the start of a component's life you put it inside this method.

componentDidUpdate - runs every time our component state is updated and we re-render it.

componentWillUnmount - used for any clean up when the component is removed from the screen
- [ ] What is the purpose of a custom hook?\
Custom hooks allow you to apply non-visual behavior and stateful logic throughout components as you are able to reuse the same hook multiple times.
- [ ] Why is it important to test our apps?
Like the old saying goes measure twice cut once, you should ALWAYS test your orojects before you put them out, otherwise you might spend countless hours debugging and patching potentially wasting awhole ton of money which might cost you your job!