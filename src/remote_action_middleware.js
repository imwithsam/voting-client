// This is an example of currying.
export default (socket) => (store) => (next) => (action) => {
  // Pattern for using middleware only on certain actions
  if (action.meta && action.meta.remote) {
    socket.emit('action', action)
  }
  return next(action)
}
