<template>
<div>
    <h1 className="is-size-1">
        Login
    </h1> 

    <div className="columns">
        <div className="column is-one-third is-offset-one-third">
            
            <ul className="panel">
                <p className="panel-heading">
                    Login
                </p>
                <form className="panel-block" @submit.prevent="join">

                    <div className="field" :className="{ 'is-danger': error }">
                        <div className="field has-addons">
                            <div className="control has-icons-left has-icons-right">
                                <input v-model="name" className="input" type="text" placeholder="Your Name">
                                
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                            <div className="control">
                                <button className="button is-info" >
                                Login
                                </button>
                            </div>
                        </div>
                        <p className="help is-danger">{{error}}</p>
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