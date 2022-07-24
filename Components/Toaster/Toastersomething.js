import { Toaster, resolveValue } from 'react-hot-toast';

function Toastersomething({t}) {
    return (
<Toaster>
  {(t) => (
    <div
      style={{  background: 'red', padding: 8 }}
    >
      {resolveValue(t.message, t)}
    </div>
  )}
</Toaster>
    )
    
}

export default Toastersomething