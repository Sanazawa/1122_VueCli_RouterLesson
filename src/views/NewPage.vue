<template>
  <div class="h1">新增頁面</div>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link
          to="/newpage/a"
          class="list-group-item list-group-item-action"
        >
          元件A
        </router-link>
        <router-link
          to="/newpage/b"
          class="list-group-item list-group-item-action"
        >
          元件B
        </router-link>
        <router-link
          to="/newpage/namedView/a2b"
          class="list-group-item list-group-item-action"
        >
          命名視圖 A2B
        </router-link>
        <router-link
          to="/newpage/namedView/c2a"
          class="list-group-item list-group-item-action"
        >
          命名視圖 C2A
        </router-link>
        <router-link
          to="/newpage/dynamicRouter/0e59daa3d001f0c1"
          class="list-group-item list-group-item-action"
          >動態路由($route)</router-link
        >
        <router-link
          to="/newpage/dynamicRouterByProps/0e59daa3d001f0c1"
          class="list-group-item list-group-item-action"
          >動態路由($props)</router-link
        >
        <router-link
          to="/newpage/routerNavigation"
          class="list-group-item list-group-item-action"
          >路由導覽</router-link
        >
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
