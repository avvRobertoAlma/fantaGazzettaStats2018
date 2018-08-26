<template>
    <header>
                    <nav class="navbar  is-dark">
                            <div class="navbar-brand">
                                <a class="navbar-item">
                                    <img src="https://content.fantagazzetta.com/web/img/logo.png" width="155" height="40">
                                </a>
                                <div class="navbar-burger" data-target="navMenu" @click="toggleActiveClass">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div><!-- end .navbar-burger-->
                            </div><!-- end .navbar-brand-->
                            <div class="navbar-menu" :class="{'is-active': isActive}" id="navMenu">
                                <div class="navbar-start"></div><!-- end .navbar-start-->
                                <div class="navbar-end">
                                    <div class="navbar-item has-dropdown is-hoverable">
                                        <a class="navbar-link">Account</a>
                                        <div class="navbar-dropdown">
                                            <div class="navbar-item">
                                                <a class="navbar-item"><nuxt-link to="/"><div><span class="icon is-small"><i class="fa fa-home"></i></span>&nbsp;Home</div></nuxt-link></a>
                                            </div><!-- end .navbar-item-->
                                            <div class="navbar-item">
                                                    <a class="navbar-item"><nuxt-link to="/giocatori"><div><span class="icon is-small"><i class="fa fa-align-justify"></i></span>&nbsp;Giocatori</div></nuxt-link></a>
                                            </div><!-- end .navbar-item-->
                                            <div class="navbar-item">
                                                    <a class="navbar-item"><nuxt-link to="/formazioni"><div><span class="icon is-small"><i class="fa fa-desktop"></i></span>&nbsp;Formazioni</div></nuxt-link></a>
                                            </div><!-- end .navbar-item-->
                                        </div><!-- end .navbar-dropdown-->
                                    </div>
                                </div><!--end .navbar-end-->
                            </div><!--end .navbar-menu-->
                        </nav><!-- end .navbar-->               
        </header>
</template>

<script>
export default {
    data(){
        return {
            isActive: 'false'
        }
    },
    methods: {
        toggleActiveClass(){
            this.isActive = !this.isActive
        },
    }

}
</script>

<style>

</style>
