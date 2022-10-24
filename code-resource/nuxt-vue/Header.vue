<template>
  <div id="header" class="header flex flex-center">
    <div class="header__inner container flex align-center">

      <div class="flex-1"> <nuxt-link class="logo" to="/">Logo</nuxt-link></div>
      <div class="search-bar flex-1 d-block-sm"><form action=""><input type="text" /></form></div>
      <nav class="flex justify-end">
          <ul class="flex flex-center">
            <li>  <nuxt-link to="/flugger-test">FluggerTest</nuxt-link>  </li>
            <li>  <nuxt-link to="/test2">Test 2</nuxt-link>  </li>
            <li><nuxt-link to="/links">Links</nuxt-link></li>
            <li><nuxt-link to="/sb-tutorial">SBTutorial</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
          </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//Temporary colors
$border1: rgb(234, 234, 234);

#header {
  height: 55px;
  min-height: 85px;
  border-bottom: $border1 1px solid;
    
  &__inner {
    display: flex;
  }
  nav ul > li > a,
  .logo,
  .search-bar input {
    padding: 12px;
  }
  .search-bar {
    display: none;
    border:  $border1 1px solid;

    form {
      width: 100%;
    }
  }
  .search-bar,
  input {
    border-radius: 4px;
    width: 100%;
  }
  nav ul > li {
    
    cursor: pointer;
    > a {
      background: rgb(197, 245, 245);
    }
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
}
</style>
