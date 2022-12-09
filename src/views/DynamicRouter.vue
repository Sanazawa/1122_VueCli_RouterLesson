<template>
  <div></div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    // console.log(this.$route.params.id);
    // 動態網址的範例，取得從網址上輸入的id作為下面api的seed
    const seed = this.$route.params.id;
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res);
    });
  },
};
</script>
