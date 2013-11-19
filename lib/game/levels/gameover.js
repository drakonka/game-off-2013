ig.module( 'game.levels.gameover' )
.requires( 'impact.image','game.entities.boss2','game.entities.player' )
.defines(function(){
LevelGameover=/*JSON[*/{"entities":[{"type":"EntityBoss2","x":401,"y":188},{"type":"EntityPlayer","x":316,"y":172}],"layer":[{"name":"bg","width":4,"height":4,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilesets/home-interior.png","repeat":true,"preRender":true,"distance":"1","tilesize":10,"foreground":false,"data":[[267,268,269,270],[317,318,319,320],[367,368,369,370],[417,418,419,420]]},{"name":"collision","width":80,"height":40,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":10,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"floor","width":80,"height":80,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilesets/home-interior.png","repeat":false,"preRender":true,"distance":"1","tilesize":10,"foreground":false,"data":[[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,5,6],[54,55,56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,55,56],[104,105,106,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,105,106],[401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402,403,401,402],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452],[451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452,453,451,452]]}]}/*]JSON*/;
LevelGameoverResources=[new ig.Image('media/tilesets/home-interior.png'), new ig.Image('media/tilesets/home-interior.png')];
});