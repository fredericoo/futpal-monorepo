/** Agressively checks if object has a property and mutates object’s type */
export function objHas<K extends PropertyKey>(
  obj: object,
  prop: K
): obj is Record<K, unknown> {
  return prop in obj;
}

/** Function that asserts a key is within an object and mutate key’s type.  */
export function isKeyIn<O extends object>(
  key: PropertyKey,
  obj: O
): key is keyof O {
  return key in obj;
}

/** Asserts `condition` is met and throws otherwise */
export function invariant<T>(
  condition: T,
  message?: string
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
