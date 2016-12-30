<template>
    <section class="hero is-info is-large">
        <div class="hero-head">
            <nav class="nav">
                <div class="container">
                    <div class="nav-left">
                        <a href="." class="nav-item">
                            <img src="/static/images/logo.svg" alt="Comparison of Front-End Frameworks">
                        </a>
                    </div>
                    <span @click="toggle()" :class="{ 'is-active' : opened }" class="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    <div :class="{ 'is-active' : opened }" class="nav-right nav-menu">
                        <a href="https://github.com/Landish/frameworks" target="_blank" class="nav-item">
                            Repository
                        </a>
                        <a href="https://github.com/Landish/frameworks/issues" target="_blank" class="nav-item">
                            Issues
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body has-text-centered">
            <div class="container">
                <h1 class="title">
                    <img src="/static/images/logo.svg" alt="Comparison of Front-End Frameworks"/>
                    Comparison of Front-End Frameworks
                </h1>
                <h2 class="subtitle">
                    by <a href="https://github.com/Landish" target="_blank">Landish</a>
                </h2>
            </div>
        </div>
        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <li class="is-active"><a href="#frameworks">Frameworks</a></li>
                        <li><a href="#components">Components</a></li>
                        <li><a href="#discussion">Discussion</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                opened: false
            }
        },
        methods: {
            toggle() {
                if(!this.opened) { this.opened = true; } else { this.opened = false; }
            }
        }
    }


</script>
<style>
.nav-item img {
  height: 50px;
}

h1.title img {
  display: block;
  height: 100px;
  margin: auto auto 40px;
}
</style>