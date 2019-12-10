import React, { useState } from 'react';
import { Game_Server } from "../models/Game";

export default ()=> {
        const [error, setError] = useState("");

return (
<div className="login-page">
    <h1 className="is-size-1">
        Login
    </h1> 

    <div className="columns">
        <div className="column is-one-third is-offset-one-third">
            
            <ul className="panel">
                <p className="panel-heading">
                    Login
                </p>
                <form className="panel-block" onSubmit={join}>

                    <div className={`field ${error ? 'is-danger': ''}`} >
                        <div className="field has-addons">
                            <div className="control has-icons-left has-icons-right">
                                <input name="name" className="input" type="text" placeholder="Your Name" />
                                
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
                        <p className="help is-danger">{ error }</p>
                    </div>
                    
                </form>
            </ul>
        </div>
    </div>
</div>
)
        function join(e){
            e.preventDefault();
            Game_Server.Join(e.target.name.value)
                .catch(err=> {
                    console.error(err);
                    setError( err.message );
                });
        }
}

