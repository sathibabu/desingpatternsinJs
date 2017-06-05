var sigletonObj = (function(){
		
		var instance;

		function init(){
		    var privateVariable = Math.random();
			var privateMethod = function(){
				return privateVariable;
			}

			return {
				publicMethod: function(){
					return privateVariable;
				}
			}	
		}


		return {

			getInstance: function(){
				if(!instance){
					instance = init();
				}
				return instance;
			}
		}
		

})();


var sigletonObjWrong = (function(){
		
		var instance;

		function init(){
		    var privateVariable = Math.random();
			var privateMethod = function(){
				return privateVariable;
			}

			return {
				publicMethod: function(){
					return privateVariable;
				}
			}	
		}


		return {

			getInstance: function(){
				//if(!instance){
					instance = init();
				//}
				return instance;
			}
		}
		

})();


module.exports = {sigletonObj,sigletonObjWrong};

