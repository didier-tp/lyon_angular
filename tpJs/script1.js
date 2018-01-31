function affVoiture(){ 
console.log(">> marque= "+this.marque +", modele= "+this.modele);
}

function construireVoiture(paramMarque,paramModele)
{ //syntaxe javascript litteral (proche json)
var nouvelleVoiture = {
	marque : paramMarque ,
	modele : paramModele ,
    aff : affVoiture
	};
return nouvelleVoiture;
}

//objet app(lication) en syntaxe "litteral javascript"
//qui correspond au comportement de l'application 
var app = {
	_txtA : "?",
	_txtB : "??",
	_spanResult : "???",
	callbackAdd : function (){
		this._txtA = document.getElementById("txtA");
		this._txtB = document.getElementById("txtB");
		//this._spanResult = document.getElementById("spanRes");
		console.log("*this:"+JSON.stringify(this));
		console.log("*app:"+JSON.stringify(app));
		res = Number(txtA.value) + Number(txtB.value)
	    this._spanResult.innerHTML=res;
   },
    init : function (){
		var btnAdd = document.getElementById("btnAddition");
		this._spanResult = document.getElementById("spanRes");
		console.log("#this:"+JSON.stringify(this));
		console.log("#app:"+JSON.stringify(app));
		btnAdd.addEventListener("click" , 
	                            this.callbackAdd.bind(this) , false);
	}
};

function myOnLoad(){
	app.init();
	v1 = construireVoiture("Peugeot","306");
    v2 = construireVoiture("Renault","Mégane");
	v1.modele = "108"; // modification d'une propriété
	//v1["modele"] = "108";
    v1.aff(); // appel d'une méthode
}
