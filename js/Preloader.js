var preloader = function(game){};

preloader.prototype = {
		preload: function() {
				//images
				var loading = this.add.sprite(0, 0, 'loading');
				var loadbar = this.add.sprite(0, 440, 'loadbar');
				this.load.setPreloadSprite(loadbar);
				this.load.image('title', 'assets/title.png');
				this.load.image('bg', 'assets/bg.png');
				this.load.image('CtoS', 'assets/CtoS.png');
				this.load.image('StoG', 'assets/StoG.png');
				this.load.image('GtoP', 'assets/GtoP.png');
				this.load.image('purchase', 'assets/purchase.png');
				//audio
				this.load.audio('buy', 'assets/buy.mp3');
				this.load.audio('music', 'assets/music.mp3');
				this.load.audio('music2', 'assets/music2.mp3');
				this.load.audio('select', 'assets/select.mp3');
				this.load.audio('beep', 'assets/beep.mp3');
		},
		create: function() {
				this.state.start('MainMenu');
		}
}
