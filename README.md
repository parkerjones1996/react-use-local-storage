# react-use-local-storage

> A custom React Hook that saves state in the component and local storage.

## Usage

```
const [name, setName] = useLocalStorage('name', 'Default Value')
```

Upon reloading the page, the state will still contain 'Default Value' until updated or cleared.
