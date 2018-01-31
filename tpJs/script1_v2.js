//<script src="script1.js" > </script> coté html

function Voiture(marque,modele)
{ this.marque=marque // propriété 1
this.modele=modele // propriété 2
this.aff= function () {
	console.log("## marque= "+this.marque +
	            ", modele= "+this.modele);
  }
}
//<body onload="myOnLoad()"> coté html
function myOnLoad(){
	v1 = new Voiture("Peugeot","306");
    v2 = new Voiture("Renault","Mégane");
	//v1.modele = "108"; // modification d'une propriété
	v1["modele"] = "108";
    v1.aff(); // appel d'une méthode
}
