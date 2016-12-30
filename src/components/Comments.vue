<template>
    <div class="section">
        <div class="container">
            <h2 id="discussion" class="title">Discussion</h2>
            <div class="box">
                <div id="disqus_thread"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let d = document, s = d.createElement('script');
            s.src = '//front-end-frameworks.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        }
    }

</script>