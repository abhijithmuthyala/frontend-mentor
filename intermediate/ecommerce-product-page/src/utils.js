export function viewTransitionWrapper(callback) {
  if (!document.startViewTransition) {
    callback();
  } else {
    document.startViewTransition(callback);
  }
}
