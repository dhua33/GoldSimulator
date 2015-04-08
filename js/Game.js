var main = function(game) {};

main.prototype = {
		create: function() {
				// bg
				this.bg = this.add.image(0, 0, 'bg');
				
				// audio
				this.music = this.add.audio('music', 0.3, false);
				this.music2 = this.add.audio('music2', 0.3, false);
				this.sound.beep = this.add.audio('beep', 0.15);
				this.sound.select = this.add.audio('select', 0.15);
				this.sound.buy = this.add.audio('buy', 0.3);
				this.music.onStop.add(this.m2, this);
				this.music2.onStop.add(this.m1, this);
				this.music.play();
				
				// variables
				this.p = [];
				
				// buttons
				this.C = this.add.button(140, 320, 'purchase', this.buyC, this);
				
				// text
				
		},
		m1: function() {
				this.music.play();
		},
		m2: function() {
				this.music2.play();
		},
		buyC: function() {
				
		},
		update: function() {
				
		}
}
