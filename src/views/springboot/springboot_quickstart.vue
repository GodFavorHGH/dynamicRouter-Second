<template>
  <div>
    <div v-for="item in articles">
        <h1>{{item.sequence}}、{{item.title}}</h1>
        <br>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;{{item.content}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: []
    }

  },
  mounted() {
    this.$axios.get('/article/get?subject=springboot').then(res=>{
      console.log(res.data)
      if (res.data&&res.data.code==200){
        this.articles=res.data.data;
      }
    });
  },
  methods :{
    leaveMessage(){

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
