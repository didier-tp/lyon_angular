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
		this.initConv();
    },
	
	initConv: function() {
		document.getElementById("btnConv")
		  .addEventListener('click', this.onConv.bind(this) , false);
    },
	
	onConv : function(){
		var montant = document.getElementById("montant").value;
		montant=Number(montant);
		var source = document.getElementById("source").value;
		var cible = document.getElementById("cible").value;
		
		var spanResConv = document.getElementById("resConv");
		
		$.ajax({
           type: "GET",
           url: "https://api.fixer.io/latest?base="+source ,
		   success: function (data,textStatus,jqXhr) {
			   console.log(JSON.stringify(data));
			   var change = (cible==source)?1:data.rates[cible];
			   console.log("change:" + change);
			   spanResConv.innerHTML = montant * change;
		   } ,
		   error : function(jqXhr , textStatus , errorMsg ){
			   console.log("error:" + errorMsg);
			   spanResConv.innerHTML = errorMsg;
		   }
		});
		
		
		
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