import { customRef } from "vue";
export function debounceRef(value, delay = 1000) {
  let timer;
  return customRef((track, trigger) => ({
    get() {
      track();
      return value;
    },
    set(val) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        trigger();
        value = val;
      }, delay);
    },
  }));
}
