(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"index_img_atlas_1", frames: [[0,0,657,888]]}
	];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	
	
	
	(lib.indeximg2 = function() {
		this.initialize(ss["index_img_atlas_1"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}
	
	
	(lib.光1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 圖層_1
		this.shape = new cjs.Shape();
		this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,18.3).s().p("Ah7B8QgzgzAAhJQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIQAABJgzAzQgzAzhJAAQhIAAgzgzg");
		this.shape.setTransform(17.5,17.5);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.光1, new cjs.Rectangle(0,0,35,35), null);
	
	
	(lib.光3 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 圖層_1
		this.instance = new lib.光1();
		this.instance.setTransform(0,0,1,1,0,0,0,17.5,17.5);
		this.instance.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.4,regY:17.4,scaleX:1.6285,scaleY:1.6285,x:-0.1,y:-0.1,alpha:1},18).to({regX:17.5,regY:17.5,scaleX:1,scaleY:1,x:0,y:0,alpha:0},8).wait(124));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-28.4,-28.4,57,57);
	
	
	(lib.光2 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 圖層_2
		this.instance = new lib.光1();
		this.instance.setTransform(0,0,0.6286,0.6286,0,0,0,17.5,17.5);
		this.instance.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).to({alpha:0},4).wait(78));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-11,-11,22,22);
	
	
	(lib.光1_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 圖層_1
		this.instance = new lib.光1();
		this.instance.setTransform(0,0,1,1,0,0,0,17.5,17.5);
		this.instance.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},12).to({alpha:0},7).wait(101));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-17.5,-17.5,35,35);
	
	
	(lib.鑽石本身 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 光1
		this.instance = new lib.光1_1();
		this.instance.setTransform(324,468.95,1,1,0,0,0,17.5,17.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(89));
	
		// 圖層_1
		this.instance_1 = new lib.indeximg2();
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,657,888);
	
	
	// stage content:
	(lib.indeximg = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 光3
		this.instance = new lib.光3();
		this.instance.setTransform(342,589.95);
	
		this.instance_1 = new lib.光3();
		this.instance_1.setTransform(171,705.95);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		// 光2
		this.instance_2 = new lib.光2();
		this.instance_2.setTransform(161,690.95);
	
		this.instance_3 = new lib.光2();
		this.instance_3.setTransform(118,626.95);
	
		this.instance_4 = new lib.光2();
		this.instance_4.setTransform(161,608.9);
	
		this.instance_5 = new lib.光2();
		this.instance_5.setTransform(407,499.95);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));
	
		// 光1
		this.instance_6 = new lib.光1_1();
		this.instance_6.setTransform(406,496.95);
	
		this.instance_7 = new lib.光1_1();
		this.instance_7.setTransform(107,554.95);
	
		this.instance_8 = new lib.光1_1();
		this.instance_8.setTransform(427,581.95);
	
		this.instance_9 = new lib.光1_1();
		this.instance_9.setTransform(323,371.95);
	
		this.instance_10 = new lib.光1_1();
		this.instance_10.setTransform(108,436.9);
	
		this.instance_11 = new lib.光1_1();
		this.instance_11.setTransform(407,500.95);
	
		this.shape = new cjs.Shape();
		this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,3.7).s().p("AgYAYQgKgJAAgPQAAgOAKgKQAKgKAOAAQAPAAAJAKQALAKAAAOQAAAPgLAJQgJALgPAAQgOAAgKgLg");
		this.shape.setTransform(329.5,443.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(1));
	
		// 圖層_1
		this.instance_12 = new lib.鑽石本身();
		this.instance_12.setTransform(328.5,444,1,1,0,0,0,328.5,444);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(328.5,444,328.5,444);
	// library properties:
	lib.properties = {
		id: 'E6EFB591D2472D4D96730C9C49EBE6A3',
		width: 657,
		height: 888,
		fps: 30,
		color: "#66CCFF",
		opacity: 0.00,
		manifest: [
			{src:"wp-content/themes/astra-child/inc/animate/images/index_img_atlas_1.png?1727277125680", id:"index_img_atlas_1"}
		],
		preloads: []
	};
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['E6EFB591D2472D4D96730C9C49EBE6A3'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused || stageChild.ignorePause){
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function(event) {
		if(!event.paused){
			var target = event.target;
			if(target){
				if(target.filterCacheList){
					for(var index = 0; index < target.filterCacheList.length ; index++){
						var cacheInst = target.filterCacheList[index];
						if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
	var createjs, AdobeAn;