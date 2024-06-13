// for Safari
export const getEvp = (evt:Event)=> {
  const ev = evt || window.event;
  console.warn('ev', ev)
  return (ev.composedPath && ev.composedPath()) || ''
}