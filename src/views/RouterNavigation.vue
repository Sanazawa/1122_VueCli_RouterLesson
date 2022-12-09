<template>
  <div>
    <button type="button" class="btn btn-outline-primary" @click="getRoute">getRoute</button>

    <button type="button" class="btn btn-outline-primary" @click="push">Push</button>
    <button type="button" class="btn btn-outline-primary" @click="replace">Replace</button>
    <button type="button" class="btn btn-outline-primary" @click="go">Go</button>
    <hr />
    <button type="button" class="btn btn-outline-secondary" @click="addRoute">新增路由</button>
  </div>
</template>

<script>
export default {
  methods: {
    // 包含歷史記錄
    push() {
      // 切換至About頁面(上一頁有歷史記錄)
      this.$router.push({
        name: 'about',
      });
    },
    // 沒有歷史記錄
    replace() {
      // 切換至About頁面(上一頁不會有歷史記錄)
      this.$router.replace({
        name: 'about',
      });
    },
    // 操作歷史記錄
    go() {
      this.$router.go(-1);
    },
    // 取得常用參數
    getRoute() {
      // 取得路由的屬性
      // 說明：https://next.router.vuejs.org/zh/api/#router-方法
      // console.log(this.$route);

      // 呼叫路由的方法
      // 說明：https://next.router.vuejs.org/zh/api/#routelocationnormalized
      console.log(this.$router);
    },
    // 延伸介紹
    addRoute() {
      // 臨時新增路由的方式，按下按鈕後就可以開啟下述的頁面
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./AboutView.vue'),
      });
    },
  },
};
</script>
