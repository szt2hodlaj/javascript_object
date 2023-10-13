const user = {};

user.firstName = "John";

user.lastName = "Smith";

user.firstName = "Paul";

delete user.firstName;

function isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
}

// 3. Feladat
let fizetes = {
    Anna: 2100,
    Cecil: 1890,
    Emil: 2050,
    Gerald: 2920,
  };
  
  function osszegFizetesek(fizetesObj) {
    let osszeg = 0;
    
    for (let nev in fizetesObj) {
      if (fizetesObj.hasOwnProperty(nev)) {
        console.log(nev + " keres " + fizetesObj[nev] + " forintot.");
        osszeg += fizetesObj[nev];
      }
    }
    
    console.log("Az összes fizetés: " + osszeg + " forint.");
  }
  
  osszegFizetesek(fizetes);