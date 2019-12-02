<template>
<div>
    <h1 class="is-size-1">
        Login
    </h1> 

    <div class="columns">
        <div class="column is-one-third is-offset-one-third">
            
            <ul class="panel">
                <p class="panel-heading">
                    Login
                </p>
                <form class="panel-block" @submit.prevent="join">

                    <div class="field" :class="{ 'is-danger': error }">
                        <div class="field has-addons">
                            <div class="control has-icons-left has-icons-right">
                                <input v-model="name" class="input" type="text" placeholder="Your Name">
                                
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                                <span class="icon is-small is-right">
                                <i class="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                            <div class="control">
                                <button class="button is-info" >
                                Login
                                </button>
                            </div>
                        </div>
                        <p class="help is-danger">{{error}}</p>
                    </div>
                    
                </form>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
import { Game_Server } from "../models/Game";

export default {
    data: ()=>({
        name: "",
        error: ""
    }),
    methods: {
        join(){
            Game_Server.Join(this.name)
                .catch(err=> {
                    console.error(err);
                    this.error = err.message;
                });
        }
    }

}
</script>

<style lang="scss">

    .fas.fa-exclamation-triangle {
        display: none;
    }
    .is-danger {
        .fa-exclamation-triangle {
            display: inline;
            color: red;
        }
        .input {
            border-color: red;
        }
    }
</style>