import './Modal.css'
import React from 'react';
import { Navigate} from 'react-router-dom';
import {useState} from 'react'
export const Modal =({
    setIsLoggedIn,
    setUserName,
    setIsAdmin }) => {
  const [login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const handleLoginChange = (e) => {
        setLogin(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleLogIn = (e) => {
        e.preventDefault();
        if (login === 'gematrogega@gmail.com') {
            if (password === 'emil loshok'){
            localStorage.senItem('isAdmin',true);
           setIsAdmin(true);
        }
        else {
            alert('b͍̦̪͍͛͗̓͆͋ͅŕ̳͈̞̋̋̽͜u͍̙̇̓h͙̎͜͠');
            return false
        }
        }
        localStorage.setItem('isLoggedIn',true);
        localStorage.setItem('userName',login);
        setUserName(login);
        setIsLoggedIn(true);
    }
    return(
        <div>
            <form id="myModal" class = "mobal-dialog_modal-sm" tabindex="-1"  onSubmit = {handleLogIn}>
               

                <div class="modal-content"> 
                <div class="container">  
                <div class="row">
                <span class="close" data-dismiss="modal"> </span>
                </div>
                <div class="row">
                    <h2 class = "modal-header-h2"> g̯̐l͎̯̓̆az̨͒aa̝͈͗̃a̧̫̳̻̍̾́́à̦͎̯͊̐á̠̖͠aa̺͍̯̋́̓a̢̪͎͆̑͝a̡͕̘̞̓̆̋͑ā̛̜̠͎͡ȧ̯ ̙̟̫͋̓̒г̭͎̑̿д̪̪͖́͐̚е̣̳̾͌ ̜͇̅̀̈͢ǒ͚̞̤̋͑̓͢n̥̞̮̂̀͌į̢̪̪̾̀͝͡?͉̪̀́??̝̒͜͡?̯̼̒̀?̨͇̥̯̽̔͑͝??͎̠͔̈́̅̊</h2>
                </div>
                <div class="row">
                    <input type="text"
                     placeholder="your@email.com" 
                     name="email" class="placeholder"
                     value = {login}
                     onChange = {handleLoginChange}
                     />
                    <input type="text"
                     placeholder ="ch"
                      name="parol" 
                      class="placeholder"
                      value = {password}
                     onChange = {handlePasswordChange}
                      />
                      
                    <button class="submit" type="submit"    >В̱̗̤̂̃̆Е̖̦̍̍̑ͅР̝̬̱͂͛̿͛͟Н̗͛̀̋͜͜И̞̪̘̓̽̀̕͜ Г̹̐̋͟Л̤̻̲̮̝̈̉̌̅͝А̻̼͐͠З̩̬̀̍/П̪̅О͔̞̥̃͂͘Т̨͖̪̰͋̑̏̿Е̮͈͚̪̏͘͡͠Р̨̛͍̖̹̺͋͂͆̑Я͓̔Й̨͖̣͙̃̈́̃̈́ ͕̠̐͠Г̫̘͑̓ЛА̬̼̗͎͓͒̀̃̀̑З̪̮̘͋͑̅̋͢  </button>
                </div>
                <div class="row">
                    <button class="btn_btn-danger" data-dismiss="modal">Ӯ̬Й̄Т͙̞̍̃И̦͓̂̍</button>
                </div>
                </div>
            </div>
            </form> 
        </div>
    )
}