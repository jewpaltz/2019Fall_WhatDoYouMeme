<template>
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <router-link exact-active-className="active" className="navbar-item" to="/">
            <i className="fas fa-home fa-pull-left"></i>
            Home
        </router-link>

        <a @click.prevent="isOpen = !isOpen" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu" :className="{ 'is-active' : isOpen }">
        <div className="navbar-start">

        <router-link exact-active-className="active" className="navbar-item" to="/about">
            <i className="fab fa-vuejs fa-pull-left"></i>
            About
        </router-link>

        <router-link exact-active-className="active" className="navbar-item" to="/game">
            <i className="fas fa-ghost fa-pull-left"></i>
            Game
        </router-link>

        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" active-className="kind-of-active">
            More
            </a>

            <div className="navbar-dropdown">
                <router-link className="navbar-item" to="/about" exact-active-className="active">
                    <i className="fab fa-vuejs fa-pull-left"></i>
                    About
                </router-link>
            <a className="navbar-item">
                Jobs
            </a>
            <a className="navbar-item">
                Contact
            </a>
            <hr className="navbar-divider">
            <a className="navbar-item">
                Report an issue
            </a>
            </div>
        </div>
        </div>

        <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
            <a className="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a className="button is-light">
                Log in
            </a>
            </div>
        </div>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            isOpen: false
        }
    }
}
</script>

<style>
    .active {
        background-color: aliceblue;
        font-weight: bold;
    }
    .kind-of-active {
        background-color: rgb(244, 248, 252);
        font-weight: 100;
    }
</style>