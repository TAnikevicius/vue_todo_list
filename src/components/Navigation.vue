<template>
  <div id="nav">
    <div>
      <b-navbar toggleable="md" type="dark" variant="info">
        <b-container>
          <b-navbar-brand>Todo List</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/issues/open">Open Issues</b-nav-item>
              <b-nav-item to="/issues/done">Done Issues</b-nav-item>
              <b-nav-item to="/issues/trashed">Trashed Issues</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped>
#nav {
  margin-bottom: 50px;
}
#nav a {
  padding-left: 20px;
  padding-right: 20px;
}
#nav a.router-link-exact-active {
  color: #f4d03f;
}
</style>