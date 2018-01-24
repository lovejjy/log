class Dialog {
    constructor(tit = "弹框"){
        this.tit=tit;
        this.init()
    }
    init(){
        this.script();
        this.creat();
    }
    script(){
        this.body=document.body;
    }
    creat(){
        let box=document.createElement("div");
        let xhz=document.createElement("div");
        let spn=document.createElement("span");
        let title=document.createElement("h1");
        let an1=document.createElement("button");
        let an2=document.createElement("button");
        box.className="box";
        xhz.className="box1";
        an1.className="btn1";
        an2.className="btn2";
        spn.className="close";

        this.body.appendChild(box);
        box.appendChild(xhz);
        xhz.appendChild(title);
        xhz.appendChild(an1);
        xhz.appendChild(an2);
        xhz.appendChild(spn);

        
        title.innerHTML=this.tit;
        an1.innerHTML="确定";
        an2.innerHTML="取消";
        //spn.innerHTML="&times";
        spn.onclick=()=>{
            this.body.removeChild(box)
        }
        an1.onclick=()=>{
            this.body.removeChild(box)
        }
        an2.onclick=()=>{
            this.body.removeChild(box)
        }
    }
}
new Dialog();