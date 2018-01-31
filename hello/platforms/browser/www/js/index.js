/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		this.initAddition();
		this.initMots();
		this.initEcho();
    },
	initEcho : function(){
		
		var btnEcho = document.getElementById("btnEcho");
		btnEcho.addEventListener('click', function(){
			var texte = document.getElementById("texte").value;
			xyz.MyEcho.echo(texte, function (result){
				document.getElementById("spanResEcho")
				     .innerHTML="**" + result;
			}
			);
		} , false);
	},
	mots : "",
	initMots: function() {
		var btnAjouterMot = document.getElementById("btnAjouterMot");
		btnAjouterMot.addEventListener('click', function(){
			var txt_mot = document.getElementById("mot").value;
			app.mots += (txt_mot + ",");
			window.localStorage.setItem('mots',app.mots);
		} , false);
		
		var btnLoad = document.getElementById("btnLoad");
		btnLoad.addEventListener('click', function(){
			
			app.mots = window.localStorage.getItem('mots');
			var selectMots = document.getElementById("listeMots");
			var tabMots = app.mots.split(",");
			selectMots.options.length = 0;
			for(i=0;i<tabMots.length-1;i++){
				var m = tabMots[i];
				var opt = document.createElement("option");
				opt.innerHTML = m;
				selectMots.appendChild(opt);
			}
			//alert(app.mots);//version temporaire
		} , false);
	},
	initAddition: function() {
		var btnAdd = document.getElementById("btnAdd");
		btnAdd.addEventListener('click', function(){
		var txt_a = document.getElementById("a").value;
		var txt_b = document.getElementById("b").value;
		var spanRes = document.getElementById("res");
		spanRes.innerHTML = Number(txt_a) + Number(txt_b);
		} , false);
	},
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();