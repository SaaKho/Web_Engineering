import React from 'react'
import "../App.css";

export default function manualSum() {
    return (
   <>

            <form action="action_page.php" method="post">
                <div class="imgcontainer">
                    <img src="hotel1.jpg" alt="Avatar" class="avatar" />
                </div>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                            <button type="submit">Login</button>
                            <label>
                                <input type="checkbox" checked="checked" name="remember" /> Remember me
                            </label>
                        </div>

                        <div class="container" >
                            <button type="button" class="cancelbtn">Cancel</button>
                            <span class="psw">Forgot <a href="/">password?</a></span>
                        </div>
                        

                    </form>

                </>
                )
}