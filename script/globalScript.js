let x = window.onscroll; let curUser; let avail_move; let cur_move = 0; let size = 885.467; function totop(){ document.documentElement.scrollTop = 0; } function stor_add(name,val){ localStorage.setItem(name,val); } function stor_rem(name){ localStorage.removeItem(name); } function stor_get(name){ return localStorage.getItem(name); } function logout(){ curUser = null; stor_rem("cur_user"); location.reload(); } function isLogin(){ curUser = JSON.parse(stor_get("cur_user")); return curUser == null; } function doesLogin(){ if(isLogin()) document.getElementById("nav-list").innerHTML += '<li><a href="login.html" class="navigation-a">Login</a></li><li><a href="signup.html" class="navigation-a">SignUp</a></li>'; else document.getElementById("nav-list").innerHTML +='<li><a onclick="logout()" class="navigation-a">Log Out</a></li><li><p id="nav-username">'+curUser.firstname+'</p></li>'; } function loadFooter(){ document.getElementById("global-footer").innerHTML = '<img id="go-top-hidden" src="res/ico-svgs/to-top.png" height="15px" onclick="totop()" class="go-top"></img><div class="col-container"><div class="footer-cols"><h1>Contacts</h1><div><p><img src="res/ico-svgs/phone.svg" height="20px"> 63-2-7976 8600</p><p><img src="res/ico-svgs/smartphone.svg" height="20px"> +632 7976 8896 / 1800 16516277</p><p id="footer-address"><img src="res/ico-svgs/gps-pin.png" height="20px"> Main Headquarter: Blk. 3 Lot 5, Horizon Building, Taft Avenue Corner Smith, Quezon City, Philippines</p></div></div><div class="footer-cols"><h1>Services</h1><a href="services-mars-earth.html">Earth Mars Travel</a><a href="services-satellite-production.html">Satellite Production</a><a href="services-rocket-engine.html">Rocket Engine</a><a href="services-payload.html">Space Payload</a></div><div class="footer-cols"><h1>Support Us</h1><ul><li><img src="res/ico-svgs/youtube.svg" height="20px"><a> Youtube</a></li><li><img src="res/ico-svgs/facebook.svg" height="20px"><a> Facebook</a></li><li><img src="res/ico-svgs/instagram.svg" height="20px"><a> Instagram</a></li><li><img src="res/ico-svgs/twitter.svg" height="20px"> <a> Twitter</a></li></ul></div><div class="foot-cent"><div class="footer-cols"><div class="foot-cent" id="quick-nav"><p><a href="index.html">Home</a> | <a href="about.html">About</a> | <a href="feedback-form.html">Feedback</a> | <a href="login.html">Login</a> | <a href="signup.html">Signup</a></p></div><div class="footer-comp" id="footer-quick-pane"><h1>Horizon</h1><p>2020 All Rights Reserved</p></div></div></div></div>'; x = window.onscroll = () => { let t = document.getElementById("go-top-hidden") == undefined ? document.getElementById("go-top-visible") : document.getElementById("go-top-hidden"); if(this.scrollY >= 400){ t.id = "go-top-visible"; }else{ t.id = "go-top-hidden"; } }; if(document.title == 'Horizon - About') avail_move = document.getElementById("slide").childElementCount; } function toHome(){ window.location = "index.html"; } function gotoservices(){ if(document.title != 'Horizon - Home'){ stor_add("scroll-request",1060); window.location = 'index.html'; return; } document.documentElement.scrollTop = 1060; } function gotologin(){ window.location = "login.html"; } function toR(){ if(cur_move <= (avail_move -2) * -size) { console.log("enough "+cur_move); return; } cur_move -= size; updateSlide(); } function toL(){ if(cur_move >= 0){ console.log("enough "+cur_move); return; } cur_move += size; updateSlide(); } function updateSlide(){ document.getElementById("slide").style.transform = "translateX("+cur_move+"px)"; } function showGallery(){ let togler = document.getElementById("togler-p"); document.getElementById("prod-hid").style.display = "flex"; togler.innerHTML = "Hide Images"; togler.removeEventListener('click',showGallery); togler.addEventListener('click',hideGallery); } function hideGallery(){ let togler = document.getElementById("togler-p"); document.getElementById("prod-hid").style.display = "none"; togler.innerHTML = "Show Images"; togler.removeEventListener('click',hideGallery); togler.addEventListener('click',showGallery); } 
