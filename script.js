let n = 4;
let A = [];
let M = [];
let YaddasSekil = [];
let Y = [0, 0, 0];
let t = 30;
a();
Massiv();
Tbl();
setTimeout(Cevir, 1000);

function Massiv() {
    let k = 0,
        x = 0;
    for (let i = 0; i < n * n; i++) {
        if (k == (n * n) / 2) k = 0;
        A[i] = ++k;
    }

    for (let i = 0; i < n; i++) {
        M[i] = [];
        YaddasSekil[i] = [];
        for (let j = 0; j < n; j++) {
            x = Math.floor(Math.random() * A.length);
            M[i][j] = A[x];
            YaddasSekil[i][j] = A[x];
            A.splice(x, 1);
        }
    }
}

function Tbl() {
    let tbl = "";
    for (let i = 0; i < n; i++) {
        tbl += "<tr>";
        for (let j = 0; j < n; j++) {
            tbl += `<td><img onclick="Bas(${i},${j})" src="img/${M[i][j]}.png" /></td>`;
        }
        tbl += "</tr>";
    }
    document.getElementsByTagName("table")[0].innerHTML = tbl;
}

function Cevir() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            M[i][j] = 0;
        }
    }
    Tbl();
}

function Bas(i, j) {
    M[i][j] = YaddasSekil[i][j];
    Tbl();
    if (Y[2] == 0) {
        Y[0] = i;
        Y[1] = j;
        Y[2] = M[i][j];
    } else {
        if (Y[2] != M[i][j] || Y[0] == i && Y[1] == j) {
            M[i][j] = 0;
            M[Y[0]][Y[1]] = 0;
            setTimeout(Tbl, 1000);
        }
        Y[2] = 0;
    }
    setTimeout(Yoxla, 1000);
}

function Yoxla() {
    let say = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (M[i][j] != 0) {
                say++;
            }
        }
    }
    if (say == n * n) {
        alert("Uddun");
    }
}



function a() {
    let te = "";
    document.getElementById('a').innerHTML = t;
    setTimeout(a, 1000);

    if (t == "-1") {
        alert("Vaxt bitdi!")
        Tbl();
        Cevir();
        t = 30;
    }
    if (t >= "10") {
        te += `00:${t--}`
    }
    if (t < "10") {
        te += `00:0${t--}`
    }
    document.getElementById('a').innerHTML = te;
    //console.log(t)
}
