ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)

.defines(function(){"use strict";

ig.global.EntityPlayer = ig.Entity.extend({
    type: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.ACTIVE,
    checkAgainst: ig.Entity.TYPE.B,

   
    size: {x: 25, y: 200},
    offset: {x: 0, y: 0},
    gravityFactor: 1,
    steppingUp: false,
    zIndex: 10,
    sleeping: true,
    wearingSlippers: false,
    brushedTeeth: false,
    coffeeDrunk: 0,
    ateBanana: false,
    dressed: false,

    location: 'home',

    holding: null,

    // Movement
    maxVel: {x: 150, y: 650},
    friction: {x: 500, y: 0},
    accelGround: 700,
    accelAir: 800,
    speed: 150,
    maxSpeed: 150,
    humanMaxSpeed: 150,
    werewolfMaxSpeed: 200,
    slowTimer: new ig.Timer(3),

    isWerewolf: false,
    health: 15,

    // Anger
    anger: 0,
    hunger: 0,
    hungerTimer: new ig.Timer(1),
    angerTimer: new ig.Timer(1),
    activeQuest: 1,

    howlSound: new ig.Sound( 'media/audio/howl.*' ),
    attackSound: new ig.Sound( 'media/audio/attack.*' ),

    yawnSound: new ig.Sound( 'media/audio/yawn.*' ),
    collisionSound1: new ig.Sound( 'media/audio/collision1.*' ),
    collisionSound2: new ig.Sound( 'media/audio/collision2.*' ),

    positiveresponseSound1: new ig.Sound( 'media/audio/positiveresponse1.*' ),
    positiveresponseSound2: new ig.Sound( 'media/audio/positiveresponse2.*' ),

    negativeresponseSound1: new ig.Sound( 'media/audio/negativeresponse1.*' ),
    negativeresponseSound2: new ig.Sound( 'media/audio/negativeresponse2.*' ),


    
    humanAnimSheet: new ig.AnimationSheet( 'media/characters/player.png', 143, 225 ),
    nudeAnimSheet: new ig.AnimationSheet( 'media/characters/player-nude.png', 143, 225),
    slippersAnimSheet: new ig.AnimationSheet( 'media/characters/player-slippers.png', 143, 225),
    dressedAnimSheet: new ig.AnimationSheet( 'media/characters/player-dressed.png', 143, 225),
    werewolfAnimSheet: new ig.AnimationSheet( 'media/characters/werewolf.png', 143, 225),

    doorSound: new ig.Sound( 'media/audio/door.*' ),

	init: function(x, y, settings) {
        this.parent(x, y, settings);
        ig.game.player = this;
        this.collisionSoundArr = [this.collisionSound1, this.collisionSound2];
        this.positiveResponseSoundArr = [this.positiveresponseSound1, this.positiveresponseSound2];
        this.negativeResponseSoundArr = [this.negativeresponseSound1, this.negativeresponseSound2];

        if (!ig.global.wm) {
            if (ig.game.currentLevel === LevelGameover) {
                this.sleeping = false;
                this.dressed = true;
                this.setAnimations(this.dressedAnimSheet, 0.1);
            }
            else {
                this.dressed = ig.game.controller.dressed;
                if (!this.dressed) {
                    this.setAnimations(this.nudeAnimSheet, 0.1);
                }
                else {
                    this.setAnimations(this.dressedAnimSheet, 0.1);
                }

            }

            if (this.sleeping) {
                this.currentAnim.angle = (-90).toRad();
                this.size.y = this.size.x + 5;
                this.offset.x = 0;
                this.offset.y = 120;
            }
        }
    },

    setAnimations: function(sheet, speed) {
        this.anims.idle = new ig.Animation( sheet, speed, [16] );
        this.anims.walking = new ig.Animation (sheet, speed, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] );
        this.currentAnim = this.anims.idle;
    },
	
    change: function(form) {
        if (form === 'werewolf') {
            this.isWerewolf = true;
            this.howlSound.play();
            ig.game.spawnEntity(EntityHelicopter, 2500, 0);
            this.setAnimations(this.werewolfAnimSheet, 0.04);
            this.maxSpeed = this.werewolfMaxSpeed;
            this.speed = this.maxSpeed;
            this.hungerTimer.reset();
        }
        else {
            this.isWerewolf = false;
            this.setAnimations(this.nudeAnimSheet, 1);
            this.maxSpeed = this.humanMaxSpeed;
            this.speed = this.maxSpeed;
        }
    },
   
    update: function() {
        this.checkMovement();
        this.checkSpeed();
        this.setCurrentAnim();
        this.checkLocation();
        this.checkAnger();
        this.checkHunger();
        this.parent();
    },

    checkAnger: function() {
        if (!this.isWerewolf && this.anger >= 100) {
            if (this.location === 'office' || this.location === 'outside') {
                this.change('werewolf');
            }
        }
        else if (this.location === 'office' && ig.game.clockHour > 17 + this.coffeeDrunk) {
            if (this.angerTimer.delta() > 0) {
                this.angerTimer.reset();
                this.anger++;
            }
        }
    },

    checkHunger: function() {
        if (this.isWerewolf) {
            if (this.hungerTimer.delta() > 0) {
                this.hunger++;
                this.hungerTimer.reset();
            }
        }
    },

    checkLocation: function() {
        if (this.location !== 'outside' && this.pos.x >= 2000 && this.pos.x < 3350) {
            ig.game.spawnEntity(EntityPasserby, this.pos.x + ig.system.width, this.pos.y);
            this.location = 'outside';
            ig.game.clockTimer.set(ig.game.normalTime);

            if (!this.isWerewolf) {
                ig.game.gui.setNotificationText("Stop to let other commuters pass.");  
                this.doorSound.play();
            }
            else {
                ig.game.gui.setNotificationText("Feed.");
                ig.game.spawnEntity(EntityWall, 1950, this.pos.y, {size: {x: 40, y: this.size.y}});
                ig.game.spawnEntity(EntityWall, 3750, this.pos.y, {size: {x: 40, y: this.size.y}});
            }      

        }
        else if (this.location !== 'office' && this.pos.x >= 3740) {
            this.location = 'office';
            ig.game.clockTimer.set(ig.game.officeTime);
            ig.game.gui.setNotificationText("Another day at the office.")
        }
    },
    checkSpeed: function() {
        if (this.slow && this.slowTimer.delta() > 0) {
            this.slow = false;
            this.speed = this.maxSpeed;
            this.vel.x = this.speed;
        }
    },

    checkMovement: function() {
        var elevator = ig.game.getEntitiesByType(EntityElevator)[0];
        if (ig.game.currentLevel !== LevelGameover) {
            if (elevator && !elevator.running) {
                if (!this.sleeping) {
                    if (ig.input.state('left')) {
                        this.vel.x = -this.speed;
                        this.flip = true;
                    }
                    else if (ig.input.state('right')) {
                        this.vel.x = this.speed;
                        this.flip = false;
                    }       
                }
            }
            else if (elevator && elevator.running) {
                this.pos.y = elevator.pos.y;
                this.pos.x = elevator.pos.x + elevator.size.x / 2;
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

    kill: function() {
        ig.game.loadLevel(LevelGameover);
        this.parent();
    },
    
    draw: function() {
        this.parent();
    }

});

});