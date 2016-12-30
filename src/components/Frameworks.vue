<template>
    <div class="section">
        <div class="container is-x">
            <h2 id="frameworks" class="title">Frameworks</h2>
            <div :class="{ 'is-hidden': ready }" class="notification">
                Loading ...
            </div>
            <table :class="{ 'is-hidden': !ready }" class="table has-text-centered is-striped is-bordered">
                <thead>
                <tr>
                    <th><strong>Details</strong></th>
                    <th v-for="framework in content.frameworks"><span class="tag is-info">{{ framework.name }}</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><strong>Links</strong></td>
                    <td v-for="framework in content.frameworks">
                        <div class="control has-addons">
                            <a class="button is-small is-info is-outlined" :href="framework.url" target="_blank">
                                  <span class="icon is-small">
                                    <i class="fa fa-globe"></i>
                                  </span>
                                <span>Website</span>
                            </a>
                            <a class="button is-small is-info is-outlined" :href="framework.documentation"
                               target="_blank">
                              <span class="icon is-small">
                                <i class="fa fa-book"></i>
                              </span>
                                <span>Docs</span>
                            </a>
                            <a class="button is-small is-info is-outlined" :href="framework.github" target="_blank">
                              <span class="icon is-small">
                                <i class="fa fa-github"></i>
                              </span>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><strong>Description</strong></td>
                    <td v-for="framework in content.frameworks">
                        <p>{{ framework.description }}</p>
                    </td>
                </tr>
                <tr>
                    <td><strong>Install</strong></td>
                    <td class="no-padding" v-for="framework in content.frameworks">
                        <pre><code>bower install {{ framework.install ? framework.install : framework.slug }}</code></pre>
                        <pre><code>npm install {{ framework.install ? framework.install : framework.slug }}</code></pre>
                        <pre><code>yarn add {{ framework.install ? framework.install : framework.slug }}</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><strong>Stats</strong></td>
                    <td v-for="framework in content.frameworks">
                        <span class="tag is-small is-dark"><i class="fa fa-code-fork"></i>&nbsp;{{ framework.stats.forks }}</span>
                        <span class="tag is-small is-dark"><i
                                class="fa fa-star"></i>&nbsp;{{ framework.stats.stars }}</span>
                    </td>
                </tr>
                <tr>
                    <td><strong>Browsers</strong></td>
                    <td v-for="framework in content.frameworks">
                        <i class="fa fa-chrome"></i>
                        <i class="fa fa-safari"></i>
                        <i class="fa fa-firefox"></i>
                        <i class="fa fa-opera"></i>
                        <i class="fa fa-internet-explorer"></i>
                    </td>
                </tr>
                <tr>
                    <td><strong>Icons</strong></td>
                    <td v-for="framework in content.frameworks">
                        <a target="_blank" :href="framework.icons.url" class="tag is-small is-info">{{
                            framework.icons.name }}</a>
                    </td>
                </tr>
                <tr>
                    <td><strong>CSS</strong></td>
                    <td v-for="framework in content.frameworks">
                        <span class="tag is-small is-info">{{ framework.css }}</span>
                    </td>
                </tr>
                <tr>
                    <td><strong>JS Library</strong></td>
                    <td v-for="framework in content.frameworks">
                        <!--<a v-if="framework.js" class="button is-small is-info is-outlined" :href="framework.js"-->
                        <!--target="_blank">-->
                        <!--<span class="icon is-small">-->
                        <!--<i class="fa fa-eye"></i>-->
                        <!--</span>-->
                        <!--<span>Demo</span>-->
                        <!--</a>-->
                        <span v-if="framework.js">
                            <a target="_blank" :href="framework.js" class="tag is-small is-success">Yes</a>
                        </span>
                        <span v-else class="tag is-small is-danger">No</span>
                    </td>
                </tr>
                <tr>
                    <td><strong>License</strong></td>
                    <td v-for="framework in content.frameworks">
                        <a target="_blank" href="https://opensource.org/licenses/MIT"
                           class="tag is-small is-info">MIT</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['ready', 'content']
    }





</script>