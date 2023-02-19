import './Header.css';
export const Header = ({
    isLoggedIn,
    setIsLoggedIn,
    registerLinkVisibility,
    welcomeLinkVisibility,
    isAdminVisibility,
    setIsAdmin
}) => {
    const handLeExit =(e) =>{
        e.preventDefault();
        localStorage.setItem('isLoggedIn', false)
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.setItem('userName','');
    }
    registerLinkVisibility= !(localStorage.getItem('isLoggedIn') ==='true')? 'visible':'hidden';
    welcomeLinkVisibility= (localStorage.getItem('isLoggedIn') ==='true')? 'visible':'hidden';
    isAdminVisibility =(localStorage.getItem('isAdmin') ==='true')?'visible':'hidden';
    return (
   <div className ="Header">
    <header >
        <a class ="menu" href = "/" >g̿͟ȩ̩̼̤̉̐͆̽n̪̎e̠͊r̝̀ā̟̜͠l̫̹̭̄͌̇͟͜͝͞</a> 
        <a class ="menu" href = "/login" style = {{visibility:registerLinkVisibility}} > loshki</a> 
        <a class ="menu" href = "/review" >КОментик </a> 
        <a class ="menu" href = "/quiz" >квиз </a> 
        <a class ="menu" href = "/Blog" >Влог</a>
        <a class = "menu" href = "/gallery">Галерея</a>
        <a className = "welcome" style= {{visibility:welcomeLinkVisibility}}>
        &nbsp;w̨͓̟̎̈́̾͛ͅȇ̹͡ͅl̡̹̝̫̰̂̔̎̑͠c̺̥̻̅͌͝o̧̻͆͝m̯͍̗̋̇͝e̘̫͊̎&nbsp;t̞͊ó͈̙͂̔͢ ̼̪͍͐̐̓ṫ̪̠̥͕̔̉̉h̭̘̪̮͋͘͡͝e̹͍͚͔͛̏̾̚ ͙̝̲̱̙̑̏̈́̋͘c͉̘̠̐̋͘͟͡l̻̔̅ͅư͙͚̼̾͘b͉͔̗͖́̍̆̾ ̙̣̔̀b̯̘͙͚̓̋̍̋ody̧̚&nbsp;{localStorage.getItem('userName')}!&nbsp; m̛̤̺̪͔̦̈͗̐͘a̭̯͕̞͛̄̇̕m͖̲̭̑̓͑ą͙̿͗??͕͐?̖̝̰̓͂̄̊̆͟ͅ?̨̲̲̊͠͡ &nbsp;
        <button onClick = {handLeExit}>ВЫЙТИ</button>
        </a>
        <a className = "welcome" style = {{visibility:isAdminVisibility}} >
            &nbsp; k̗̗͆̈i̡̮̲̤͊̑͑͝ll̰̱̈̎ ̙̄l̯̲̾̽ą͆ ̈́ͅk̪̦̈̈̐͜ĭ̲̼̟̱̇̎̆́͜l͚͇̞̿̾̄l̦̯͌̍
            <a className = "menu" href = "/">Главное</a>
     
        </a>
      </header>   
   </div>

    )
}