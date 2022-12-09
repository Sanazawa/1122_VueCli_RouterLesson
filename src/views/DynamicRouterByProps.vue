<template>
  <div></div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  created() {
    console.log('props', this.id);
    // 動態網址的範例，取得從網址上輸入的id作為下面api的seed
    const seed = this.id;
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res);
    });
  },
};
</script>
