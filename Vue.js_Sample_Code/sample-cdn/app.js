// const vm = new Vue({
//   el: "#app",
//   data: {
//     message: "Hello!",
//   },
// });
// vm.title = "はじめてのVue.js";
// console.log(vm);

// const data = {
//   title: "はじめてのVue.js",
//   ISBN: 12345,
// };
// const vm = new Vue({
//   el: "#app1",
//   data: data,
// });
// console.log(data === vm.$data);
// console.log(vm);

const vm = new Vue({
  data: {
    title: "はじめてのVue.js",
    ISBN: 12345,
  },
  render: function (h) {
    console.log(h("h1", `ISBN${this.ISBN}-${this.title}`));
    return h("h1", `ISBN${this.ISBN}-${this.title}`);
  },
});
vm.$mount("#app");
const dir = document.createElement("p");
console.log(dir);
console.log(document);
console.dir(document);