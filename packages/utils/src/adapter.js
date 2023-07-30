// for Safari
export const getEvp = (evt) => {
    const ev = evt || window.event;
    console.warn('ev', ev);
    return (ev.composedPath && ev.composedPath()) || '';
};
