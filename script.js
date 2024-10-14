async function Dip() {

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hi i am Anonymous your account will be hacked soon")
            
        }, 1000)
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initializing Hack program.......")
        }, 3000)
    })
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("UserName found Zannat Khan Yousufzai")
        }, 5000)
    })
    let p6 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Capturing Password wait a second.......")
        }, 7000)
    })
    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Connecting to FaceBook account...........")
        }, 9000)
    })
    let p5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your Account is **HACKED BY DIP**<br><pre>   **Enjoy your day Baby**<pre>")
        }, 11000)
    })
    
    let h=document.getElementsByClassName("hack")[0];
    
    let a= await p1;
    h.innerHTML=h.innerHTML+a+"<br><br>";
    let b= await p2;
    h.innerHTML=h.innerHTML+b+"<br><br>";
    let c= await p3;
    h.innerHTML=h.innerHTML+c+"<br><br>";
    let f= await p6;
    h.innerHTML=h.innerHTML+f+"<br><br>";
    let d= await p4;
    h.innerHTML=h.innerHTML+d+"<br><br>";
    let e= await p5;

    setInterval(()=>{
            if(lal.innerHTML==""){
                lal.innerHTML=e;
            }else{
                lal.innerHTML="";
            }
               
    },500)
        
}
Dip()
