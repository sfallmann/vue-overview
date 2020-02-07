new Vue({
  el: "#app",
  template: `
    <div>{{ message }}</div>
  `,
  data() {
    return {
      message: "This is one way to create a template"
    };
  },
});