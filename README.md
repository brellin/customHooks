# customHooks
This repository contains my custom hooks

## Included Hooks

 Hook | Constructed/Uses 
 ---- | ----------------
 `useForm` | Takes a callback function and returns `fields` - an object whose keys you can name, `submit` - calls the callback function passed in with updated fields as arguments, and `handleChanges` - updates the `field` that you specify using dot notation.

### useForm
 ```javascript
import { useForm } from 'customHooks'
const { fields, submit, handleChanges } = useForm(submitFunc)

<form onSubmit={submit}>
    <input name='username' value={fields.username} onChange={handleChanges} />
    <input name='password' value={fields.password} onChange={handleChanges} />
</form>
```
