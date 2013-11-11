ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
   // 'imapct.entity-pool'
)

.defines(function(){"use strict";

ig.global.EntityPlayer = ig.Entity.extend({
    type: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.ACTIVE,
    checkAgainst: ig.Entity.TYPE.B,

   
    size: {x: 50, y: 200},
    offset: {x: 40, y: 0},
    gravityFactor: 1,
    steppingUp: false,
    zIndex: 499,
    sleeping: true,
    wearingSlippers: false,
    brushedTeeth: false,
    coffeeDrunk: 0,
    ateBanana: false,

    location: 'home',

    holding: null,

    // Movement
    maxVel: {x: 150, y: 650},
    friction: {x: 500, y: 0},
    accelGround: 700,
    accelAir: 800,
    speed: 150,
    maxSpeed: 150,
    jumpStrength: 400,
    slowTimer: new ig.Timer(3),
    // Anger
    anger: 0,
    activeQuest: 1,

    
    humanAnimSheet: new ig.AnimationSheet( 'media/characters/player.png', 143, 225 ),
    nudeAnimSheet: new ig.AnimationSheet( 'media/characters/player-nude.png', 143, 225),
    slippersAnimSheet: new ig.AnimationSheet( 'media/characters/player-slippers.png', 143, 225),
    dressedAnimSheet: new ig.AnimationSheet( 'media/characters/player-dressed.png', 143, 225),

 //   femaleAnimSheet: new ig.AnimationSheet( 'media/femaleotherflea.png', 31, 31 ),
	init: function(x, y, settings) {
        this.parent(x, y, settings);
        ig.game.player = this;
        this.setHumanAnimations(this.nudeAnimSheet, 0.1);

        if (this.sleeping) {
            this.currentAnim.angle = (-90).toRad();
            this.size.y = this.size.x + 5;
            this.offset.x = 0;
            this.offset.y += 45;
        }
        // Male animations
    },

    setHumanAnimations: function(sheet, speed) {
        this.anims.idle = new ig.Animation( sheet, speed, [16] );
        this.anims.walking = new ig.Animation (sheet, speed, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] );
        this.currentAnim = this.anims.idle;
    },
	
   
    update: function() {
        this.checkMovement();
        this.checkSpeed();
        this.setCurrentAnim();
        this.checkLocation();
        this.parent();
    },

    checkLocation: function() {
        if (this.location !== 'outside' && this.pos.x >= 2000 && this.pos.x < 3350) {
            ig.game.spawnEntity(EntityPasserby, 3500, this.pos.y);
            this.location = 'outside';
            ig.game.gui.setNotificationText("Stop to let other commuters pass.");        

        }
        else if (this.location !== 'office' && this.pos.x >= 3740) {
            this.location = 'office';
            ig.game.gui.setNotificationText("Another day at the office.")
        }
    },
    checkSpeed: function() {
        if (this.slow && this.slowTimer.delta() > 0) {
            this.slow = false;
            this.speed = this.maxSpeed;
            this.vel.x = this.speed;
            console.log('resetting speed ' + this.vel.x);
        }
    },

    checkMovement: function() {
        if (!this.sleeping) {
            if (ig.input.state('left')) {
                this.vel.x = -this.speed;
                this.flip = true;
            }
            else if (ig.input.state('right')) {
                this.vel.x = this.speed;
                this.flip = false;
            }

            if (this.standing && ig.input.pressed('jump')) {
                this.vel.y = -this.jumpStrength;
                console.log('jumping yo ' + this.vel.x)

            }
        }
    },

    setCurrentAnim: function() {
        if (this.vel.x !== 0) {
            if (this.currentAnim !== this.anims.walking) {
                this.currentAnim = this.anims.walking;
            }
        }
        else {
            this.currentAnim = this.anims.idle;
        }
        this.currentAnim.flip.x = this.flip;

    },

    check: function(other) {
      //  console.log('smet')
        
      //  this.parent();
    },

    stepUp: function(height) {
        if (height) {
            this.steppingUp = true;
            this.gravityFactor = 0;
            this.pos.y -= height;
        }
        else {
            this.steppingUp = false;
            this.gravityFactor = 1;
        }
    },
    
    draw: function() {
        this.parent();
        if (!ig.global.wm) {
            ig.game.ctx.fillStyle = '#ffffff';
            ig.game.ctx.fillRect(5, 5, 100, 20);
            ig.game.ctx.fillStyle = '#ff0000';
            ig.game.ctx.fillRect(5, 5, this.anger, 20);
            ig.game.ctx.fillStyle = '#000000';
            ig.game.ctx.font = '21px Verdana';
            ig.game.ctx.textBaseline = 'middle';
            ig.game.ctx.fillText('ANGER', 5 + 100 / 2, 15);
        }
    }

});

});