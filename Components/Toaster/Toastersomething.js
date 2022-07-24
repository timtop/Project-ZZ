import toast, { Toaster, resolveValue } from 'react-hot-toast';

export const notify = (message, type) => {
  const errStyle =  {backgroundColor: 'white', color: 'red'}
  toast(message, {
    duration: 4000,
    position: 'top-center',
    style: type === 'err' ? errStyle : {backgroundColor: 'white', color: 'black'},
  })
}

