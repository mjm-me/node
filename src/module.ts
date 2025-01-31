const state = 22;

export function foo() {
  baz();
}

export function bar() {}

export function baz() {
  console.log(state);
}
