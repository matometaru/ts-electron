const test1 = () => {
  return new Promise((resolve, reject) => {
    resolve("test1");
  });
}

const test2 = () => {
  return new Promise((resolve, reject) => {
    resolve("test2");
  });
}

(async () => {
  let test = "";
  test += await test2();
  test += await test1();
  console.log(test);
})();