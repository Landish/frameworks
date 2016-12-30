<template>
    <div class="section">
        <div class="container">
            <h2 id="components" class="title">Components</h2>
            <div :class="{ 'is-hidden': ready }" class="notification">
                Loading ...
            </div>
            <table :class="{ 'is-hidden': !ready }" class="table has-text-centered is-striped is-bordered">
                <thead>
                <tr>
                    <th><span class="_tag is-dark">Component Name</span></th>
                    <th v-for="framework in content.frameworks">
                        <span class="_tag is-dark">{{ framework.name}}</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="component in content.components">
                    <td><span class="tag is-info">{{ component.name }}</span></td>
                    <td v-for="framework in content.frameworks">
                <span v-if="component.supports[framework.slug]">
                    <a class="button is-small is-info is-outlined" :href="component.supports[framework.slug]"
                       target="_blank">
                        <span class="icon is-small">
                            <i class="fa fa-eye"></i>
                          </span>
                        <span>Demo</span>
                    </a>
                </span>
                        <span v-else>
                    <button class="button is-small is-disabled is-danger is-outlined"><span class="icon is-small">
                            <i class="fa fa-close"></i>
                          </span>
                        <span>N / A</span></button>
                </span>
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