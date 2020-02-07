
Vue.component('first-component', {
  template: `
    <div>{{ message }}</div>
  `,
  data() {
    return {
      message: "This is a way to template a component"
    };
  },
});

Vue.component('second-component', {
  template: `
    <div>{{ message }}</div>
  `,
  data() {
    return {
      message: "This is a second component"
    };
  },
});

new Vue({
  el: "#app",
});
