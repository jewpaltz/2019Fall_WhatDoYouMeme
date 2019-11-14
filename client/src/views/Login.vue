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
                <div class="panel-block">

                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <input v-model="name" class="input" type="text" placeholder="Your Name">
                        </div>
                        <div class="control">
                            <a class="button is-info" @click.prevent="join">
                            Login
                            </a>
                        </div>
                    </div>
                    
                </div>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
import { Game_Server } from "../models/Game";

export default {
    data: ()=>({
        name: ""
    }),
    methods: {
        join(){
            Game_Server.Join(this.name)
        }
    }

}
</script>

<style>

</style>