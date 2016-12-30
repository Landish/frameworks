<template>
    <div id="app">
        <hero></hero>
        <frameworks :ready="ready" :content="content"></frameworks>
        <components :ready="ready" :content="content"></components>
        <comments></comments>
        <foot></foot>
    </div>
</template>

<script>
import Hero from './components/Hero'
import Frameworks from './components/Frameworks'
import Components from './components/Components'
import Comments from './components/Comments'
import Foot from './components/Footer'
import Data from './data'

export default {
  name: 'app',
  components: {
    Hero, Frameworks, Components, Comments, Foot
  },
  data: function() {
    return {
      content: [],
      ready: false
    }
  },
  mounted() {
    this.content = Data;
    this.ready = true;
  }
}



</script>

<style>

body {
  background: white;
}

@media (max-width: 1200px) {
  .nav-left .nav-item {
    margin-left: 10px;
  }
}

.container table th,
.container table td {
  padding-left: 8px;
  padding-right: 8px;
}


table.has-text-centered th,
table.has-text-centered td {
  text-align: center;
}

table td.no-padding {
  padding: 0 !important;
}

table td pre {
  margin: -1px;
}

table td p {
  font-size: 13px;
}

a.tag.is-success:hover {
  background-color: #1ca64c;
}

a.tag.is-info:hover {
  background-color: #205bbc;
}

pre code {
    padding: 6px 10px;
    border: 1px solid #dbdbdb;
    margin-bottom: -1px;
    font-size: 11px;
}

.container.is-x {
  overflow-x: auto;
}
</style>
