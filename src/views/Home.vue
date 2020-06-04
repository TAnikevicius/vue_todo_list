<template>
  <div id="home">
    <b-container>
      <b-row class="justify-content-center">
        <b-col col sm="12" lg="9" xl="7">
          <div class="home__main-block">
            <h1>Go To Your Open Issues</h1>
            <router-link class="home__open-issues-button" to="/issues/open">Open it!</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
.home__main-block {
  text-align: center;
  background-color: #17a2b8;
  border-radius: 25px;
  padding: 70px 25px;
}

h1 {
  color: #fff;
  margin-bottom: 35px;
}

.home__open-issues-button {
  color: #fff;
  background-color: #f4d03f;
  padding: 15px 35px;
  display: inline-block;
  border-radius: 100px;
  font-size: 22px;
}

.home__open-issues-button:hover {
  text-decoration: none;
  background-color: #fcd600;
}
</style>
