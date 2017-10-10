window.EventBus = new  class { // créé une classe qui permettra de faire appel aux fonctions fire et event
	constructor() {
		this.vue = new Vue(); //créé une instance vue (pas besoin de faire appel à constructor)
	}

	fire(event, data = null) {
		this.vue.$emit(event, data); // permet de diffuser un évènment et éventuellement de la donnée l'accompagnant, par défaut on assigne à data la valeur null ce qui permet aussi de dire que ce n'est pas obligatoire
	}

	listen(event, callback) {
		this.vue.$on(event, callback);// créer une fonction qui permettra de réagir à un évènement donné "event" avec une fonction donnée "callback" 
	}
};