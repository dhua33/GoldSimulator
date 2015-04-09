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
				this.sound.buy = this.add.audio('buy', 0.15);
				this.music.onStop.add(this.m2, this);
				this.music2.onStop.add(this.m1, this);
				this.music.play();
				
				// variables
				this.Cstyle = {font: "24px Verdana", fill: "#D2691E", align: "left" };
				this.Sstyle = {font: "24px Verdana", fill: "#C0C0C0", align: "left" };
				this.Gstyle = {font: "24px Verdana", fill: "#FFD700", align: "left" };
				this.Pstyle = {font: "24px Verdana", fill: "#87CEFA", align: "left" };
				this.style = {font: "36px Verdana", fill: "#000000", align: "left" };
				this.style2 = {font: "24px Verdana", fill: "#000000", align: "left" };
				this.p = [];
				this.pC = 1;
				this.pS = 0;
				this.pG = 0;
				this.pP = 0;
				this.Ccost = 1;
				this.Cprofit = 0;
				this.Cinv = 0;
				this.Scost = 1;
				this.Sprofit = 0;
				this.Sinv = 0;
				this.Gcost = 1;
				this.Gprofit = 0;
				this.Ginv = 0;
				this.Pcost = 1;
				this.Pprofit = 0;
				this.Pinv = 0;
				this.m = 1;
				
				// buttons
				this.C = this.add.button(140, 320, 'purchase', (function() {this.buyC(1)}), this);
				this.S = this.add.button(460, 320, 'purchase', (function() {this.buyS(1)}), this);
				this.G = this.add.button(140, 470, 'purchase', (function() {this.buyG(1)}), this);
				this.P = this.add.button(460, 470, 'purchase', (function() {this.buyP(1)}), this);
				
				this.CC = this.add.button(245, 320, 'b10', (function() {this.buyC(10)}), this);
				this.SS = this.add.button(565, 320, 'b10', (function() {this.buyS(10)}), this);
				this.GG = this.add.button(245, 470, 'b10', (function() {this.buyG(10)}), this);
				this.PP = this.add.button(565, 470, 'b10', (function() {this.buyP(10)}), this);
				
				this.CCC = this.add.button(350, 320, 'b100', (function() {this.buyC(100)}), this);
				this.SSS = this.add.button(670, 320, 'b100', (function() {this.buyS(100)}), this);
				this.GGG = this.add.button(350, 470, 'b100', (function() {this.buyG(100)}), this);
				this.PPP = this.add.button(670, 470, 'b100', (function() {this.buyP(100)}), this);
				
				this.Ec = this.add.button(15, 270, 'CtoS', this.CtoS, this);
				this.Es = this.add.button(15, 350, 'StoG', this.StoG, this);
				this.Eg = this.add.button(15, 430, 'GtoP', this.GtoP, this);
				
				
				// text
				this.pCtext = this.add.text(140, 15, "" + this.pC, this.Cstyle);
				this.pStext = this.add.text(140, 55, "" + this.pS, this.Sstyle);
				this.pGtext = this.add.text(140, 95, "" + this.pG, this.Gstyle);
				this.pPtext = this.add.text(140, 135, "" + this.pP, this.Pstyle);
				
				this.CcostText = this.add.text(225, 230, "" + this.Ccost, this.Cstyle);
				this.CprofitText = this.add.text(215, 260, "" + (this.Cprofit), this.Cstyle);
				this.CinvestText = this.add.text(285, 290, "" + this.Cinv, this.Cstyle);
				
				
				this.ScostText = this.add.text(545, 230, "" + this.Scost, this.Sstyle);
				this.SprofitText = this.add.text(535, 260, "" + (this.Sprofit), this.Sstyle);
				this.SinvestText = this.add.text(605, 290, "" + this.Sinv, this.Sstyle);
				
				
				this.GcostText = this.add.text(225, 380, "" + this.Gcost, this.Gstyle);
				this.GprofitText = this.add.text(215, 410, "" + (this.Gprofit), this.Gstyle);
				this.GinvestText = this.add.text(285, 440, "" + this.Ginv, this.Gstyle);
				
				
				this.PcostText = this.add.text(545, 380, "" + this.Pcost, this.Pstyle);
				this.PprofitText = this.add.text(535, 410, "" + (this.Pprofit), this.Pstyle);
				this.PinvestText = this.add.text(605, 440, "" + this.Pinv, this.Pstyle);
				
				this.mul = this.add.text(360, 540, "" + this.m, this.style);
				this.ex = 10;
				this.exText = this.add.text(15, 230, this.ex + " -> 1", this.style2);
				
				this.time.events.add(50, this.Ctimer, this);
				this.time.events.add(100, this.Stimer, this);
				this.time.events.add(200, this.Gtimer, this);
				this.time.events.add(400, this.Ptimer, this);
		},
		m1: function() {
				this.music.play();
		},
		m2: function() {
				this.music2.play();
		},
		buyC: function(mul) {
				org = this.Cinv*1;
				if(this.pC >= (this.Ccost+this.Ccost+11*(mul-1))*mul/2) {
						this.pC -= (this.Ccost+this.Ccost+11*(mul-1))*mul/2;
						this.Cprofit += (7*mul + Math.floor(mul/2))*this.m;
						this.Cinv += mul;
						this.Ccost += 11*mul*this.m;
						if(Math.floor(this.Cinv/100) > Math.floor(org/100) && Math.floor(this.Sinv/100) >= Math.floor(this.Cinv/100) && Math.floor(this.Ginv/100) >= Math.floor(this.Cinv/100) && Math.floor(this.Pinv/100) >= Math.floor(this.Cinv/100)) {
								this.updateProfits();
						} else {
								this.sound.buy.play();
						}
				}
		},
		buyS: function(mul) {
				org = this.Sinv*1;
				if(this.pS >= (this.Scost+this.Scost+9*(mul-1))*mul/2) {
						this.pS -= (this.Scost+this.Scost+9*(mul-1))*mul/2;
						this.Sprofit += (6*mul+ Math.floor(mul/2))*this.m;
						this.Sinv += mul;
						this.Scost += 9*mul*this.m;
						if(Math.floor(this.Sinv/100) > Math.floor(org/100) && Math.floor(this.Cinv/100) >= Math.floor(this.Sinv/100) && Math.floor(this.Ginv/100) >= Math.floor(this.Sinv/100) && Math.floor(this.Pinv/100) >= Math.floor(this.Sinv/100)) {
								this.updateProfits();
						} else {
								this.sound.buy.play();
						}
				}
		},
		buyG: function(mul) {
				org = this.Ginv*1;
				if(this.pG >= (this.Gcost+this.Gcost+8*(mul-1))*mul/2) {
						this.pG -= (this.Gcost+this.Gcost+7*(mul-1))*mul/2;
						this.Gprofit += (5*mul+ Math.floor(mul/2))*this.m;
						this.Ginv += mul;
						this.Gcost += 7*mul*this.m;
						if(Math.floor(this.Ginv/100) > Math.floor(org/100) && Math.floor(this.Sinv/100) >= Math.floor(this.Ginv/100) && Math.floor(this.Cinv/100) >= Math.floor(this.Ginv/100) && Math.floor(this.Pinv/100) >= Math.floor(this.Ginv/100)) {
								this.updateProfits();
						} else {
								this.sound.buy.play();
						}
				}
		},
		buyP: function(mul) {
				org = this.Pinv*1;
				if(this.pP >= (this.Pcost+this.Pcost+4*(mul-1))*mul/2) {
						this.pP -= (this.Pcost+this.Pcost+4*(mul-1))*mul/2;
						this.Pprofit += (3*mul + Math.floor(mul/2))*this.m;
						this.Pinv += mul;
						this.Pcost += 4*mul*this.m;
						if(Math.floor(this.Pinv/100) > Math.floor(org/100) && Math.floor(this.Sinv/100) >= Math.floor(this.Pinv/100) && Math.floor(this.Ginv/100) >= Math.floor(this.Pinv/100) && Math.floor(this.Cinv/100) >= Math.floor(this.Pinv/100)) {
								this.updateProfits();
						} else {
								this.sound.buy.play();
						}
				}
		},
		updateProfits: function() {
								this.m *= 2;
								this.Ccost *= 2;
								this.Cprofit *= 2;
								this.Scost *= 2;
								this.Sprofit *= 2;
								this.Gcost *= 2;
								this.Gprofit *= 2;
								this.Pprofit*= 2;
								this.Pcost *= 2;
								this.sound.select.play();
		},
		CtoS: function() {
				if(this.pC >= this.ex) {
						this.pS += Math.floor(this.pC/this.ex);
						this.pC = this.pC%this.ex;
								this.sound.buy.play();
				}
		},
		StoG: function() {
				if(this.pS >= this.ex) {
						this.pG += Math.floor(this.pS/this.ex);
						this.pS = this.pS%this.ex;
								this.sound.buy.play();
				}
		},
		GtoP: function() {
				if(this.pG >= this.ex) {
						this.pP += Math.floor(this.pG/this.ex);
						this.pG = this.pG%this.ex;
								this.sound.buy.play();
				}
		},
		Ctimer: function() {
				// increments
				this.pC += this.Cprofit
				
				// set text
				this.CcostText.setText("" + this.Ccost);
				this.CprofitText.setText("" + this.Cprofit);
				this.CinvestText.setText("" + this.Cinv);
				
				this.ScostText.setText("" + this.Scost);
				this.SprofitText.setText("" + this.Sprofit);
				this.SinvestText.setText("" + this.Sinv);
				
				this.GcostText.setText("" + this.Gcost);
				this.GprofitText.setText("" + this.Gprofit);
				this.GinvestText.setText("" + this.Ginv);
				
				this.PcostText.setText("" + this.Pcost);
				this.PprofitText.setText("" + this.Pprofit);
				this.PinvestText.setText("" + this.Pinv);
				
				this.pCtext.setText("" + this.pC);
				this.pGtext.setText("" + this.pG);
				this.pStext.setText("" + this.pS);
				this.pPtext.setText("" + this.pP);
				
				this.mul.setText("" + this.m);
				
				this.time.events.add(50, this.Ctimer, this);
		},
		Stimer: function() {
				this.pS += this.Sprofit
				this.time.events.add(100, this.Stimer, this);
		},
		Gtimer: function() {
				this.pG += this.Gprofit
				this.time.events.add(200, this.Gtimer, this);
		},
		Ptimer: function() {
				this.pP += this.Pprofit
				this.time.events.add(400, this.Ptimer, this);
		}
}
