var p=!0,
s=null,
z=!1;
window.keyshotVR=function(T, u, U, V, la, C, ma, na, oa, pa, qa, I, J, ra, sa, ta, W, ua, X, va, Y, wa, xa) {
    function N(a, b, c) {
        a.removeEventListener?a.removeEventListener(b, c, z): a.detachEvent&&(a.detachEvent("on"+b, a["e"+b+c]), a["e"+b+c]=s)
    }
    function l(a, b, c) {
        a.addEventListener?a.addEventListener(b, c, z):a.attachEvent&&(a["e"+b+c]=c, a.attachEvent("on"+b, function() {
            a["e"+b+c]()
        }
        ))
    }
    function Z() {
        var a=z;
        -1!=navigator.platform.toString().indexOf("Win")&&-1!=navigator.appVersion.indexOf("MSIE")&&(a=p);
        return a
    }
    function ya() {
        var a=document.getElementById(T),
        b=a.requestFullScreen||a.webkitRequestFullScreen||a.mozRequestFullScreen||a.msRequestFullScreen;
        "undefined"!=typeof b&&b&&b.call(a)
    }
    function za(m) {
        a.la=z;
        m.pointerId in a.G&&delete a.G[m.pointerId];
        $(m)
    }
    function Aa(m) {
        a.la&&(a.G[m.pointerId]=[m.pageX, m.pageY], aa(m))
    }
    function Ba(m) {
        a.la=p;
        a.G[m.pointerId]=[m.pageX,
        m.pageY];
        ba(m)
    }
    function ca() {
        a.l?(setTimeout(function() {
            a.v(z)
        }
        , 20), setTimeout(function() {
            a.v(p)
        }
        , 120)):(setTimeout(function() {
            a.v(p)
        }
        , 20), setTimeout(function() {
            a.v(z)
        }
        , 120))
    }
    function F() {
        var a= {
            x: 0, y:0
        }
        ,
        b=r;
        if(b.offsetParent) {
            do a.x+=b.offsetLeft,
            a.y+=b.offsetTop;
            while(b=b.offsetParent)
        }
        return a
    }
    function da() {
        var m=c.g;
        c.g=1;
        m!=c.g&&a.R(a.w()*m/c.g);
        q.setAttribute("width", w.width);
        a.l?(q.removeAttribute("height"), q.style.width="100%", q.style[K]="scale("+c.n+")", q.style.height="auto", r.style["background-color"]=a.backgroundColor, document.body.style["background-color"]=a.backgroundColor): (q.setAttribute("height", w.height), q.style[K]="translate("+-w.width/2+"px,"+ -w.height/2+"px) scale("+c.g+") translate("+0.5*B.width/c.g+"px,"+0.5*B.height/c.g+"px) translate("+c.j+"px,"+c.k+"px) scale("+c.n+")", q.style["max-width"]="", q.style.width="", q.style.height="", r.style["background-color"]=a.backgroundColor)
    }
    function L() {
        a.Qa(a.h.offsetWidth, a.h.offsetHeight)
    }
    function ea(a, b) {
        k.start.x=a;
        k.start.y=b;
        k.a.x=a;
        k.a.y=b;
        h.a.x=a;
        h.a.y=b
    }
    function fa(a, b) {
        k.b.x=a-k.a.x;
        k.b.y=b-k.a.y;
        k.n.x=a;
        k.n.y=b;
        k.a.x=a;
        k.a.y=b
    }
    function E(m) {
        m||(m=window.event);
        var b=0;
        m.keyCode?b=m.keyCode: m.which&&(b=m.which);
        1==b?i.d|=1: 1<b&&(i.d|=2);
        a.ua(m);
        m.preventDefault?m.preventDefault(): m.returnValue=z
    }
    function G(b) {
        b||(b=window.event);
        var e=F();
        a.cursor.x=b.pageX-e.x+j.left;
        a.cursor.y=b.pageY-e.y+j.top;
        b.preventDefault?b.preventDefault(): b.returnValue=z;
        0<i.d&&(1==i.d?fa(b.pageX, b.pageY): 2==i.d?(b=a.cursor.y-D.start.y, e=a.w(), a.R(c.u*Math.exp(b/200)), b=a.w(), c.j+=parseFloat(a.e*e-a.e*b), c.k+=parseFloat(a.f*e-a.f*b)):3==i.d&&(e=a.cursor.x-D.start.x, b=a.cursor.y-D.start.y, c.j+=parseFloat((e- c.m.x)/c.g), c.k+=parseFloat((b-c.m.y)/c.g), c.m.x=e, c.m.y=b))
    }
    function M(b) {
        b||(b=window.event);
        var e=0;
        b.keyCode?e=b.keyCode: b.which&&(e=b.which);
        1==e?i.d&=-2: 1<e&&(i.d&=-3);
        a.ua(b);
        b.preventDefault?b.preventDefault(): b.returnValue=z
    }
    function O(b) {
        b||(b=window.event);
        a.Fa(0<(b.detail?-1*b.detail: b.wheelDelta/40)?1:-1);
        b.preventDefault?b.preventDefault(): b.returnValue=z
    }
    function ba(b) {
        b||(b=window.event);
        var e=ga(),
        d=F();
        a.cursor.x=e[0].pageX-d.x+j.left;
        a.cursor.y=e[0].pageY-d.y+j.top;
        if(1==e.length&& e[0])if(i.start.x=e[0].pageX, i.start.y=e[0].pageY, i.a.x=e[0].pageX, i.a.y=e[0].pageY, a.oa=e[0].target, a.oa==a.r)i.d=1,
        ea(e[0].pageX, e[0].pageY);
        else for(var f=a.oa;
        f&&f!=a.r;
        ) {
            if(f.onclick)f.onclick();
            f=f.parentNode
        }
        if(2==e.length&&e[0]&&e[1]) {
            i.d=3;
            i.ba.x=e[0].pageX-d.x+j.left;
            i.ba.y=e[0].pageY-d.y+j.top;
            i.ca.x=e[1].pageX-d.x+j.left;
            i.ca.y=e[1].pageY-d.y+j.top;
            var f=e[0].pageX-e[1].pageX,
            g=e[0].pageY-e[1].pageY,
            h=(e[0].pageX-d.x+j.left+(e[1].pageX-d.x+j.left))/2,
            e=(e[0].pageY-d.y+j.top+(e[1].pageY- d.y+j.top))/2;
            c.na=z;
            c.Ra=Math.sqrt(f*f+g*g);
            c.u=a.w();
            a.e=parseFloat(h-0.5*B.width);
            a.f=parseFloat(e-0.5*B.height);
            a.e*=parseFloat(a.P);
            a.f*=parseFloat(a.P);
            a.e-=parseFloat(c.j);
            a.f-=parseFloat(c.k);
            a.e/=parseFloat(c.u);
            a.f/=parseFloat(c.u)
        }
        b.preventDefault()
    }
    function aa(b) {
        b||(b=window.event);
        var e=ga(),
        d=F();
        a.cursor.x=e[0].pageX-d.x+j.left;
        a.cursor.y=e[0].pageY-d.y+j.top;
        1==e.length&&e[0]&&(i.a.x=e[0].pageX, i.a.y=e[0].pageY, 0<=i.d&&fa(i.a.x, i.a.y));
        if(2==e.length&&e[0]&&e[1]) {
            var f=a.w(),
            g=e[0].pageX- e[1].pageX,
            h=e[0].pageY-e[1].pageY;
            a.R(c.u/c.Ra*Math.sqrt(g*g+h*h));
            g=a.w();
            h=a.f*f-a.f*g;
            c.j+=a.e*f-a.e*g;
            c.k+=h;
            f=(a.cursor.x+e[1].pageX-d.x+j.left)/2-(i.ba.x+i.ca.x)/2;
            e=(a.cursor.y+e[1].pageY-d.y+j.top)/2-(i.ba.y+i.ca.y)/2;
            c.na==z&&(c.m.x=f, c.m.y=e, c.na=p);
            c.j+=(f-c.m.x)/c.g;
            c.k+=(e-c.m.y)/c.g;
            c.m.x=f;
            c.m.y=e
        }
        b.preventDefault()
    }
    function ga() {
        if(!Z())return window.event.touches;
        var b=[];
        for(id in a.G) {
            var e=a.G[id],
            d= {}
            ;
            d.pageX=e[0];
            d.pageY=e[1];
            d.target=a.r;
            d.preventDefault=function() {}
            ;
            b.push(d)
        }
        return b
    }
    function $(b) {
        b.preventDefault();
        a.oa=s;
        i.d=0;
        var e=(new Date).getTime(),
        d=e-(P||e+1);
        clearTimeout(Q);
        500>d&&0<d||(P=e, Q=setTimeout(function() {
            clearTimeout(Q)
        }
        , 500, [b]));
        P=e
    }
    function Ca(a) {
        a.preventDefault();
        i.d=0
    }
    function R() {
        Da(R);
        a.W==a.Z&&(1==i.d?0.01<h.J?(h.b.x=0.4*(k.a.x-h.a.x), h.b.y=0.4*(k.a.y-h.a.y), h.a.x+=h.b.x, h.a.y+=h.b.y, a.ka(h.b.x, h.b.y)): (a.ka(k.b.x, k.b.y), k.b.x=0, k.b.y=0):0.01<h.J&&(h.b.x*=h.J, h.b.y*=h.J, 0.055>h.b.x*h.b.x+h.b.y*h.b.y&&(h.b.x=0, h.b.y=0, k.b.x=0, k.b.y=0, k.a.x=h.a.x, k.a.y=h.a.y), (0!=h.b.x||0!=h.b.y)&&a.ka(h.b.x, h.b.y)));
        a.Aa();
        var b=0;
        if(-1==a.ga) {
            for(var e=1, e=0;
            e<a.t.length;
            e++) {
                var c=a.C[e];
                if(0==a.z[c]&&a.t[e].complete&&a.t[e].width==w.width&&a.t[e].height==w.height) {
                    a.F[c]=a.z[c];
                    a.z[c]=-1;
                    if(a.W==a.Z) {
                        var f=a.t.length+a.ya;
                        f>d.q&&(f=d.q);
                        if(f-=b)for(var g=0;
                        g<f;
                        g++)a.fa()
                    }
                    d.I=p;
                    0==e&&a.Aa()
                }
                -1!=a.F[c]&&b++
            }
            e=parseFloat(b/d.q);
            a.Pa(e);
            b==d.q&&(a.ga=0, a.Oa())
        }
    }
    function ha(a) {
        a=a?a: window.event;
        13==a.keyCode&&(ca(), a.preventDefault?a.preventDefault(): a.returnValue=z)
    }
    var A="/",
    H="http://50.18.217.145/assets",
    ia=H.lastIndexOf("/");
    0<=ia&&(A=H.substr(0, ia+1));
    var S=H=z;
    this.la=z;
    this.G=[];
    this.Aa=function() {
        if(d.I) {
            d.I=z;
            var b=parseInt(d.T*d.c+d.S);
            -1==a.F[b]||ja.setAttribute("src", a.D[b])
        }
        if(c.n!=c.a||c.j!=c.va||c.k!=c.wa)c.a=c.n,
        c.va=c.j,
        c.wa=c.k,
        da()
    }
    ;
    this.Za=function(b) {
        for(var e=-1E3, c=b, f=parseFloat(parseInt(b%d.c)), g=parseFloat(parseInt(b/d.c)), f=f/d.c, f=f*2*Math.PI, g=g/d.i, g=g*Math.PI, b=Math.sin(f), f=Math.cos(f), g=Math.cos(g), h=Math.sqrt(b*b+f*f+g*g), b=b/h, f=f/h, g=g/h, h=0;
        h<a.t.length;
        h++) {
            var i=a.C[h];
            if(-1!=a.F[i]) {
                var j=a.Ca[i].Va,
                j=b*j.x+f*j.y+g*j.Wa;
                e<j&&(e=j, c=i)
            }
        }
        return c
    }
    ;
    this.fa=function() {
        if(a.ma<d.q) {
            var b=new Image,
            e=a.C[a.ma];
            a.z[e]=0;
            b.src=a.D[e];
            a.t.push(b);
            var c=parseInt(e%d.c),
            f=parseInt(e/d.c),
            c=c/d.c,
            c=c*2*Math.PI,
            f=f/d.i,
            f=f*Math.PI,
            b=Math.sin(c),
            c=Math.cos(c),
            f=Math.cos(f),
            g=Math.sqrt(b*b+c*c+f*f);
            a.Ca[e]= {
                Va: {
                    x: b/g, y:c/g, Wa:f/g
                }
            }
            ;
            a.ma++
        }
    }
    ;
    this.Ea=function() {
        for(var b=d.pa, e=d.qa, c=2, f=parseFloat(d.c/c), g=parseFloat(d.i/c), h=d.q, i=0, j=0, l=0, n=0, k=0;
        a.N<h;
        ) {
            var q=parseInt(b%d.c),
            r=parseInt(e%d.i),
            k=parseInt(r*d.c+q);
            a.D[k]||(a.C[a.N]=k, a.N++, a.D[k]=a.ta(q, r));
            0==i&&(b+=f, j++);
            1==i&&(e+=g, l++);
            n++;
            if(n>=c)if(n=0, 0==i)i=1,
            j=0;
            else if(1==i&&(b+=f, j++, j>=c/2)) {
                c*=2;
                b=d.pa;
                e=d.qa;
                f=parseFloat(d.c/c);
                g=parseFloat(d.i/c);
                if(1>f&&1>g) {
                    for(b=0;
                    b<h;
                    b++)e=parseInt(b%d.c),
                    c=parseInt(b/d.c),
                    k=parseInt(c*d.c+e),
                    a.D[k]||(a.C[a.N]=k, a.N++, a.D[k]=a.ta(e, c));
                    break
                }
                i=l=j=0
            }
        }
    }
    ;
    this.ta=function(b, e) {
        return A+a.s+"/"+parseInt(e)+"_"+parseInt(b)+"."+va
    }
    ;
    this.ka=function(b, e) {
        var b=b*(1<d.c?a.Ta: 0), e=e*(1<d.i?a.Ua:0), c=Math.sqrt(b*b+e*e);
        if(1E-4<c&&(d.da+=b, d.ea+=e, d.A+=c, 1<d.A)) {
            var c=parseInt(d.A),
            f=Math.atan2(d.da, d.ea);
            d.A-=c;
            d.da=0;
            d.ea=0;
            0>f&&(f+=2*Math.PI);
            f+=Math.PI/8;
            f=parseInt(f/(Math.PI/4));
            0>f&&(f+=8);
            f%=8;
            if(0!=x[f]) {
                var g=d.S,
                g=g+c*x[f];
                if(d.Ba) {
                    for(;
                    0>g;
                    )g+=d.c;
                    for(;
                    g>=d.c;
                    )g-=d.c
                }
                else g>=d.c&&(g=d.c-1),
                0>g&&(g=0);
                d.S!=g&&(d.S=g, d.I=p)
            }
            if(0!=y[f]) {
                g=d.T;
                g+=c*y[f];
                if(d.Da) {
                    for(;
                    0>g;
                    )g+=d.i;
                    for(;
                    g>=d.i;
                    )g-=d.i
                }
                else g>=d.i&&(g=d.i-1),
                0>g&&(g=0);
                d.T!=g&&(d.T=g, d.I=p)
            }
        }
    }
    ;
    this.Sa=function() {
        a.v(!a.l);
        a.l?a.H.setAttribute("src", A+a.s+"/files/GoFullScreenIcon.png"): a.H.setAttribute("src", A+a.s+"/files/GoFixedSizeIcon.png")
    }
    ;
    this.v=function(b) {
        a.l=b;
        a.l?(t.style.position="relative", t.style.left="0px", t.style.top="0px", document.body.style.overflow=""): (t.style.position="absolute", b=F(), t.style.left=window.pageXOffset-b.x+j.left+"px", t.style.top=window.pageYOffset-b.y+j.top+"px", document.body.style.overflow="hidden");
        document.body.style.margin="0";
        document.body.style.padding="0";
        L()
    }
    ;
    this.Ha=function() {
        var b=new Image;
        b.src=a.M.src;
        a.t[a.Y]=b;
        b=a.C[a.Y];
        a.F[b]=a.z[b];
        a.z[b]=-1;
        a.Y++;
        d.I=p;
        a.Y==d.q&&(a.ga=0, a.Ia())
    }
    ;
    var Q,
    P=s;
    this.ua=function(b) {
        var e=F();
        a.cursor.x=b.pageX-e.x+j.left;
        a.cursor.y=b.pageY-e.y+j.top;
        1==i.d?ea(b.pageX, b.pageY): 2==i.d?(D.start.x=a.cursor.x, D.start.y=a.cursor.y, c.u=a.w(), a.e=a.cursor.x-0.5*B.width, a.f=a.cursor.y-0.5*B.height, a.e*=a.P, a.f*=a.P, a.e-=c.j, a.f-=c.k, a.e/=c.u, a.f/=c.u):3==i.d&&(D.start.x=a.cursor.x, D.start.y=a.cursor.y, c.m.x=0, c.m.y=0)
    }
    ;
    this.Fa=function(b) {
        a.R(c.n*Math.exp(-b/50))
    }
    ;
    this.w=function() {
        return c.n
    }
    ;
    this.R=function(a) {
        a>c.ia/c.g&&(a=c.ia/c.g);
        a<c.ja/c.g&&(a=c.ja/c.g);
        c.n=a
    }
    ;
    this.Ya=function(a, b, c, d) {
        j.left=a;
        j.top=b;
        j.right=c;
        j.bottom=d;
        L()
    }
    ;
    this.Qa=function(b, c) {
        a.l||(b=window.innerWidth, c=window.innerHeight);
        var d=b-j.left-j.right,
        f=c-j.top-j.bottom;
        B.width=d;
        B.height=f;
        r.style.width=d+"px";
        a.l&&window.innerHeight<w.height&&(f=window.innerHeight);
        r.style.height=f+"px";
        r.style.left=j.left+"px";
        r.style.top=j.top+"px";
        da();
        n.style.width=b+"px";
        a.l&&window.innerHeight<w.height&&(c=window.innerHeight);
        n.style.height=c+"px";
        a.h.style.height=c+"px";
        n.za&&n.za(b, c);
        X&&(a.L.style.height=window.innerHeight+"px", a.L.style.width=window.innerWidth+"px")
    }
    ;
    this.U=function(a) {
        l(a, "mousedown", E);
        l(a, "mousemove", G);
        l(a, "mouseup", M)
    }
    ;
    this.aa=function(a) {
        N(a, "mousedown", E);
        N(a, "mousemove", G);
        N(a, "mouseup", M)
    }
    ;
    this.Oa=function() {
        a.p&&(a.p.style.visibility="hidden", a.aa(a.p), a.aa(a.O), a.aa(a.o))
    }
    ;
    this.Ia=function() {
        a.B.style.visibility="hidden";
        a.aa(a.B)
    }
    ;
    var Da=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a) {
        window.setTimeout(a, 10)
    }
    ;
    this.sa=function() {
        a.p=document.createElement("div");
        a.U(a.p);
        a.p.V=function() {
            this.parentNode&&(this.style.left="16px", this.style.top="16px")
        }
        ;
        b="position:absolute;";
        b+="left: 0px;";
        b+="top:  0px;";
        b+="width: 80px;";
        b+="height: 80px;";
        b+=v+"transform-origin: 50% 50%;";
        b+="visibility: inherit;";
        a.p.setAttribute("style", b);
        a.O=document.createElement("div");
        a.U(a.O);
        b="position:absolute;";
        b+="left: 0px;";
        b+="top:  29px;";
        b+="width: 80px;";
        b+="height: 80px;";
        b+=v+"transform-origin: 50% 50%;";
        b+="opacity: 1.0;";
        b+="visibility: inherit;";
        b+="border: 0px solid #000000;";
        b+="color: #ffffff;";
        b+="text-align: left;";
        b+="white-space: nowrap;";
        b+="padding: 0px 0px 0px 0px;";
        b+="overflow: hidden;";
        a.O.setAttribute("style", b);
        a.o=document.createElement("div");
        a.U(a.o);
        a.o.$= {
            Ka: 0, La:0, ha:0, Ma:1, Na:1, ab:1
        }
        ;
        b="position:absolute;";
        b+="left: 0px;";
        b+="top:  0px;";
        b+="width: 80px;";
        b+="height: 80px;";
        b+=v+"transform-origin: 50% 50%;";
        b+="opacity: 1.0;";
        b+="visibility: inherit;";
        b+="border: 0px solid #000000;";
        b+="color: #ffffff;";
        b+="text-align: left;";
        b+="white-space: nowrap;";
        b+="padding: 0px 0px 0px 0px;";
        b+="overflow: hidden;";
        var c=wa;
        ""==c&&(c="ks_logo.png");
        a.o.setAttribute("style", b);
        a.o.innerHTML='<img src="'+A+a.s+"/files/"+c+'"></img>';
        a.p.appendChild(a.o);
        a.p.appendChild(a.O);
        n.appendChild(a.p);
        a.v(a.l);
        setTimeout(function() {
            a.v(a.l)
        }
        , 10)
    }
    ;
    this.Pa=function(b) {
        if(a.p) {
            a.O.innerHTML="<center>"+parseInt(100*b)+"</center>";
            a.o.$.ha+=2.1;
            b="";
            if(a.o.$)var c=a.o.$,
            b=b+("translate("+c.Ka+"px,"+c.La+"px) rotate("+c.ha+"deg) scale("+c.Ma+","+c.Na+") ");
            a.o.style[K]=b+"scale(1.0,1.0)"
        }
    }
    ;
    this.ra=function() {
        S=p;
        R()
    }
    ;
    this.xa=function() {
        l(window, "resize", L);
        xa&&l(n, "dblclick", ya);
        if(Z())if(l(window, "mousewheel", O), l(window, "keydown", ha), /Tablet PC/i.test(navigator.userAgent)&& window.Xa) {
            var b=new MSGesture;
            b.target=a.h;
            a.h.Ga=b;
            a.h.Ga.pointerType=s;
            a.h.bb=[];
            l(a.h, "MSPointerDown", Ba);
            l(a.h, "MSPointerMove", Aa);
            l(a.h, "MSPointerUp", za)
        }
        else l(n, "mousedown", E),
        l(q, "mousedown", E),
        l(n, "mousemove", G),
        l(q, "mousemove", G),
        l(document, "mouseup", M);
        else n.addEventListener&&(l(document, "mouseup", M), l(n, "mousewheel", O), l(document, "keydown", ha), l(n, "mousedown", E), l(q, "mousedown", E), l(n, "mousemove", G), l(n, "touchstart", ba), l(n, "touchmove", aa), l(n, "touchcancel", Ca), l(n, "touchend", $), l(n, "DOMMouseScroll", O), l(window, "orientationchange", ca))
    }
    ;
    if(document.createElement("canvas").getContext) {
        var a=this,
        t=a.h=s,
        r=s,
        ja=s,
        n=s,
        q=s;
        a.l=W;
        a.s=u;
        a.$a=z;
        a.Z=z;
        a.W=X;
        a.cb=0;
        a.N=0;
        a.Ta=parseFloat(pa);
        a.Ua=parseFloat(qa);
        a.ya=1;
        a.Y=0;
        a.ga=-1;
        var j= {
            left: 0, top:0, right:0, bottom:0
        }
        ,
        d= {
            S: 0, T:0, c:1, i:1, pa:0, qa:0, A:0, da:0, ea:0, I:z, q:0, Ba:p, Da:z
        }
        ;
        I||(I=0);
        J||(J=0);
        d.pa=I;
        d.qa=J;
        d.S=I;
        d.T=J;
        d.c=C;
        d.i=ma;
        d.Ba=na;
        d.Da=oa;
        d.q=d.c*d.i;
        var w= {
            width: 0, height:0
        }
        ;
        w.width=U;
        w.height=V;
        var v="",
        K="transform",
        B= {
            x: 640, y:480
        }
        ,
        c= {
            n:1,
            u:1,
            a:-1,
            j:0,
            k:0,
            va:-1,
            wa:-1,
            g:1,
            ja:1,
            ia:1,
            m: {
                x: 0, y:0
            }
            ,
            na:z
        }
        ;
        c.ja=parseFloat(ra);
        c.ia=parseFloat(sa);
        var k= {
            start: {
                x: 0, y:0
            }
            ,
            a: {
                x: 0, y:0
            }
            ,
            Ja: {
                x: 0, y:0
            }
            ,
            n: {
                x: 0, y:0
            }
            ,
            b: {
                x: 0, y:0
            }
        }
        ,
        D= {
            start: {
                x: 0, y:0
            }
        }
        ,
        i= {
            d:0,
            start: {
                x: 0, y:0
            }
            ,
            a: {
                x: 0, y:0
            }
            ,
            Ja: {
                x: 0, y:0
            }
            ,
            n: {
                x: 0, y:0
            }
            ,
            b: {
                x: 0, y:0
            }
            ,
            ba: {
                x: 0, y:0
            }
            ,
            ca: {
                x: 0, y:0
            }
        }
        ,
        h= {
            a: {
                x: 0, y:0
            }
            ,
            b: {
                x: 0, y:0
            }
            ,
            J:0.96
        }
        ;
        h.J=ta;
        a.cursor= {
            x: 0, y:0
        }
        ;
        var x=[],
        y=[];
        x[0]=0;
        y[0]=1;
        x[1]=1;
        y[1]=1;
        x[2]=1;
        y[2]=0;
        x[3]=1;
        y[3]=-1;
        x[4]=0;
        y[4]=-1;
        x[5]=-1;
        y[5]=-1;
        x[6]=-1;
        y[6]=0;
        x[7]=-1;
        y[7]=1;
        a.e=0;
        a.f=0;
        a.ma=0;
        a.t=[];
        a.C=[];
        a.z=[];
        a.F=[];
        a.Ca=[];
        for(u=0;
        u<d.q;
        u++)a.z[u]=-1,
        a.F[u]=-1;
        a.D=[];
        u=["Webkit",
        "Moz",
        "0",
        "ms",
        "Ms"];
        for(C=0;
        C<u.length;
        C++)"undefined"!=typeof document.documentElement.style[u[C]+"Transform"]&&(v="-"+u[C].toLowerCase()+"-", K=u[C]+"Transform");
        var b="";
        a.h=document.getElementById(T);
        b="width: "+U+"px;";
        b+="height: "+V+"px;";
        b+="max-width: 100%;";
        a.h.setAttribute("style", b);
        t=document.createElement("div");
        t.setAttribute("id", "viewwindow");
        b="top:  0px;";
        b+="left: 0px;";
        b+="position: relative;";
        t.setAttribute("style", b);
        a.h.appendChild(t);
        r=document.createElement("div");
        r.setAttribute("id", "turntable");
        b="top:  0px;";
        b+="left: 0px;";
        b+="overflow: hidden;";
        b+="position:absolute;";
        b+=v+"user-select: none;";
        r.setAttribute("style", b);
        t.appendChild(r);
        q=document.createElement("img");
        q.setAttribute("id", "backbuffer");
        b="top:  0px;";
        b+="left: 0px;";
        b+="position:absolute;";
        b+=v+"user-select: none;";
        q.setAttribute("style", b);
        r.appendChild(q);
        ja=q;
        n=document.createElement("div");
        a.r=n;
        b="top:  0px;";
        b+="left: 0px;";
        b+="width:  100px;";
        b+="height: 100px;";
        b+="overflow: hidden;";
        b+="position:absolute;";
        b+="z-index: 522;";
        b+=v+"user-select: none;";
        n.setAttribute("style", b);
        t.appendChild(n);
        n.za=function(a, b) {
            var c=[];
            for(c.push(this);
            0<c.length;
            ) {
                var d=c.pop();
                d.V&&d.V(a, b);
                if(d.hasChildNodes())for(var g=0;
                g<d.childNodes.length;
                g++)c.push(d.childNodes[g])
            }
        }
        ;
        this.B=document.createElement("div");
        b="position:absolute;";
        b+="left: 0px;";
        b+="top:  0px;";
        b+="width: 256px;";
        b+="height: 256px;";
        b+="opacity: 0.0;";
        b+=v+"transform-origin: 50% 50%;";
        b+="visibility: inherit;";
        b+="display: none";
        this.B.setAttribute("style", b);
        this.M=document.createElement("img");
        this.M.setAttribute("width", 256);
        this.M.setAttribute("height", 256);
        this.M.onload=function() {
            a.Ha()
        }
        ;
        a.U(this.B);
        this.B.appendChild(this.M);
        n.appendChild(this.B);
        this.backgroundColor=r.style.backgroundColor=la;
        ua&&(a.Q=document.createElement("div"), b="position:absolute;", b+="width: 38px;", b+="height: 32px;", b+=v+"transform-origin: 50% 50%;", b+="visibility: inherit;", b+="cursor: pointer;", a.Q.setAttribute("style", b), a.H=document.createElement("img"), a.l?a.H.setAttribute("src", A+a.s+"/files/GoFullScreenIcon.png"):a.H.setAttribute("src", A+a.s+"/files/GoFixedSizeIcon.png"), a.H.setAttribute("style", "position: absolute;top: 0px;left: 0px;width: 38px;height: 32px;"), a.Q.appendChild(a.H), a.Q.V=function(a, b) {
            this.style.left=a-38+"px";
            this.style.top=b-32+"px"
        }
        , a.Q.onclick=function() {
            a.Sa()
        }
        , a.r.appendChild(a.Q));
        if(a.W) {
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&& (H=p);
            a.K=document.createElement("div");
            b="position:absolute;";
            b+="width: 92px;";
            b+="height: 92px;";
            b+=v+"transform-origin: 50% 50%;";
            b+="visibility: inherit;";
            b+="cursor: pointer;";
            a.K.setAttribute("style", b);
            a.X=document.createElement("img");
            H?a.X.setAttribute("src", A+a.s+"/files/vr_hand.gif"): a.X.setAttribute("src", A+a.s+"/files/vr_cursor.gif");
            a.X.setAttribute("style", "position: absolute;top: 0px;left: 0px;width: 92px;height: 92px;");
            a.K.appendChild(a.X);
            a.K.V=function(a, b) {
                this.style.left=0.5* a-46+"px";
                this.style.top=0.5*b-46+"px"
            }
            ;
            a.L=document.createElement("div");
            b="position:absolute;";
            b+=v+"transform-origin: 50% 50%;";
            b+=" width: "+window.innerWidth+"px;";
            b+=" height: "+window.innerHeight+"px;";
            b+=" background-color: #ccc;";
            b+=" opacity: .0";
            a.L.setAttribute("style", b);
            a.r.appendChild(a.L);
            var ka=function() {
                a.K.style.visibility="hidden";
                a.L.style.visibility="hidden";
                Y&&a.sa();
                a.Z=p;
                for(var b=0;
                b<a.ya;
                b++)a.fa();
                a.ra()
            }
            ;
            a.r.onmousedown=function() {
                S||ka()
            }
            ;
            a.r.ontouchstart=function(a) {
                S|| ka();
                a.preventDefault()
            }
            ;
            a.r.appendChild(a.K);
            a.xa()
        }
        else a.W=p,
        a.Z=p,
        Y&&a.sa(),
        a.xa(),
        a.ra();
        a.v(W);
        a.P=1/c.g;
        a.R(a.P);
        this.Ea();
        a.fa();
        setTimeout(function() {
            R()
        }
        , 10);
        setTimeout(function() {
            L()
        }
        , 15)
    }
    else alert("Your browser must support HTML5 to show KeyShotVR")
}

;