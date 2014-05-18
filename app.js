// Settings
animateInCurve = "spring(450,30,150)";
animateOutCurve = "spring(350,22,100)";
animationCurve = "spring(600,40,500)";
noBounceCurve = "ease-out"
noBounceCurveSpeed = "250";


	//Size
	PSD["CONTENT"].scale = 0.4
	PSD["CONTENT"].x = -700
	PSD["CONTENT"].y = -570



start = function() {

	// Make the logo appear
	utils.delay(500, function() {
		PSD["logo"].scale = .5
		PSD["logo"].animate({
			properties: {opacity:1, scale:1},
			curve: "spring(1500,30,2000)"
		})
	})

// Rotate the logo
	utils.delay(1500 * 1, function() {
		PSD["logo"].animate({
			properties: {rotationX:360},
			curve: "spring(150,30,0)"
		})
	})
	
	// Rotate the logo again
	utils.delay(1500 * 2, function() {
		PSD["logo"].animate({
			properties: {rotationY:360},
			curve: "spring(150,30,0)"
		})
	})
	
	// Rotate the logo again
	utils.delay(1500 * 3, function() {
		PSD["logo"].animate({
			properties: {rotationZ:360},
			curve: "spring(150,30,0)"
		})
	})
}

utils.delay(100, start)


// Animate to Now View
gotoNow = function(){

	PSD["screentrigger"].animate({
		properties: {
			x: 980,
			y: 400,
			width: 330,
			height: 70,
			opacity: 0
			},
	curve: animateInCurve
	});

	PSD["breakingNews"].animate({
		properties: {
			y: 405,
			scale: 0.7,
			opacity: 0
		},
			curve: animateInCurve
		
	});

PSD["Buttonleft"].animate({
		properties: {
			y: 405,
			x: 860,
			zindex: 100,
			opacity: 1

		},
			curve: animateInCurve
		
	});

PSD["rightButton"].animate({
		properties: {
			y: 405,
			x: 1370,
			opacity: 1
		},
			curve: animateInCurve
		
	});

	PSD["smallBreakingNews"].animate({
		properties: {
			y: 415,
			scale: 1,
			opacity: 1
		},
		curve: animateInCurve
	});

PSD["logo"].animate({
		properties: {
			y: 410,
			scale: 0.7,
			opacity: 0
		},
			curve: animateInCurve
		
	});


PSD["welcome"].animate({
		properties: {
			y: 505,
			scale: 0.6,
			opacity: 0
		},
			curve: animateInCurve
		
	});

PSD["description"].animate({
		properties: {
			y: 405,
			scale: 0.5,
			opacity: 0
		},
			curve: animateInCurve
		
	});


PSD["button"].animate({
		properties: {
			y: 405,
			scale: 0.4,
			opacity: 0
			},
	curve: animateInCurve
	});



PSD["todayback"].animate({
		properties: {
			y: -900,
			scale: 1,
			opacity: 0
		},
	curve: animateInCurve
	});

PSD["sony"].animate({
		properties: {
			y: -750,
			scale: 1,
			opacity: 1
		},
		curve: animateInCurve
	});

PSD["soylent"].animate({
		properties: {
			y: -440,
			scale: 1,
			opacity: 1
		},
		curve: animateInCurve
	});

PSD["putin"].animate({
		properties: {
			y: -105,
			scale: 1,
			opacity: 1
		},
		curve: animateInCurve
	});
return false
};

goHome = function(){
			PSD["screentrigger"].animate({
		properties: {
			x: 830,
			y: 620,
			width: 620,
			height: 840,
			opacity: 0
			},
	curve: animateInCurve
	});

	PSD["breakingNews"].animate({
		properties: {
			y: 860,
			scale: 1,
			opacity: 1
		},
		curve: animateOutCurve
	});

	PSD["Buttonleft"].animate({
		properties: {
			y: 1060,
			x: 860,
			scale: 1,
			zindex: 100,
			opacity: 0
		},
			curve: animateInCurve
			});

	PSD["rightButton"].animate({
		properties: {
			y: 1060,
			x: 1370,
			scale: 1,
			opacity: 0
		},
			curve: animateInCurve
	});
	PSD["smallBreakingNews"].animate({
		properties: {
			y: 815,
			scale: 1,
			opacity: 0
		},
		curve: animateInCurve
	});

PSD["logo"].animate({
		properties: {
			y: 620,
			scale: 1,
			opacity: 1
		},
		curve: animateOutCurve
	});


PSD["welcome"].animate({
		properties: {
			y: 800,
			scale: 1,
			opacity: 1
		},
		curve: animateOutCurve
	});

PSD["description"].animate({
		properties: {
			y: 960,
			scale: 1,
			opacity: 1
		},
		curve: animateOutCurve
	});

PSD["button"].animate({
		properties: {
			y: 1020,
			scale: 1,
			opacity: 1
		},
		curve: animateOutCurve
	});

PSD["todayback"].animate({
		properties: {
			y: -25,
			scale: 1,
			opacity: 1
		},
		curve: animateInCurve
	});

PSD["sony"].animate({
		properties: {
			y: 13,
			scale: 1,
			opacity: 1
		},
		curve: animateOutCurve
	});

PSD["soylent"].animate({
		properties: {
			y: 350,
			scale: 1,
			opacity: 1
		},
		curve: animateOutCurve
	});

PSD["putin"].animate({
		properties: {
			y: 680,
			scale: 1,
			opacity: 1
		},
		curve: animateInCurve
	});
return true;
};


PSD["mockup"].style.overflow = "hidden";

/*
PSD["CONTENT"].onclick = function(){
	gotoNow
};

*/
goHome();  

pointerType = "click";
toggler = utils.toggle(gotoNow, goHome);

PSD["screentrigger"].on(pointerType, function(e) {
	var movePage;
	e.preventDefault();
	movePage = toggler();
	return movePage();
}); 

   PSD["leftsidetrigger"].animate({
		properties: {x:720, width: 1,
			opacity: 0},
		curve: animationCurve
	})

PSD["Buttonleft"].on(pointerType, function() {
   PSD["leftSide"].animate({
		properties: {x:810},
		curve: animationCurve
	})
   PSD["leftsidetrigger"].animate({
		properties: {x:1338, width: 122, opacity: 0},
		curve: animationCurve
	})
   PSD["screentrigger"].animate({
		properties: {width: 0, opacity: 0},
		curve: animationCurve
	})

        PSD["smallBreakingNews"].animate({
			properties: {
			opacity: 0,
			x: 1500
		},
	curve: "spring(1000,100,800)"
	});

       PSD["Buttonleft"].animate({
			properties: {
			opacity: 0,
			x: 1500,
			zindex: 100,
		},
	curve: "spring(1000,100,800)"
	});
});

//goig back
PSD["leftsidetrigger"].on(pointerType, function() {
   PSD["leftSide"].animate({
		properties: {x:100},
		curve: animationCurve
	})
PSD["leftsidetrigger"].animate({
	properties: {x:150, width: 1, opacity: 0},
	curve: animationCurve
	})

	PSD["screentrigger"].animate({
		properties: {
			x: 980,
			y: 400,
			width: 330,
			height: 70,
			opacity: 0
			},
	curve: animateInCurve
	});

 PSD["Buttonleft"].animate({
			properties: {
			opacity: 1,
			zindex: 100,
			x:860
		},
	curve: "spring(1200,100,800)"
	});
PSD["smallBreakingNews"].animate({
			properties: {
			opacity: 1,
			x:980,
			y:415
					},
	curve: "spring(1200,100,800)"
	});
});

//rightside

//PSD["rightButton"].x = 1370 

   PSD["rightsidetrigger"].animate({
		properties: {x:1520, width: 1,
			opacity: 0},
		curve: animationCurve
	})


PSD["rightButton"].on(pointerType, function() {
   PSD["rightSide"].animate({
		properties: {x:927},
		opacity: 0,
		curve: animationCurve
	})
      PSD["screentrigger"].animate({
		properties: {width: 0, opacity: 0},
		curve: animationCurve
	})
   PSD["rightsidetrigger"].animate({
		properties: {x:825, width: 115,},
		opacity: 0,
		curve: animationCurve
	})
        PSD["smallBreakingNews"].animate({
			properties: {
			opacity: 0,
			x: 550
			},
				curve: "spring(1000,100,800)"
	});

        PSD["rightButton"].animate({
			properties: {
			opacity: 0,
			x: 650
		},
		curve: "spring(1000,100,800)"
	});
});

//going back 

PSD["rightsidetrigger"].on(pointerType, function(a) {
   PSD["rightSide"].animate({
		properties: {x:1500},
		curve: animationCurve
	})

   	PSD["screentrigger"].animate({
		properties: {
			x: 980,
			y: 400,
			width: 330,
			height: 70,
			opacity: 0
			},
	curve: animateInCurve
	});
   PSD["rightsidetrigger"].animate({
		properties: {x:1520, width: 1,
			opacity: 0},
		curve: animationCurve
	})

 PSD["rightButton"].animate({
			properties: {
			opacity: 1,
			x:1370
		},
	curve: "spring(1200,100,800)"
	});

PSD["smallBreakingNews"].animate({
			properties: {
			opacity: 1,
			x:980,
			y:415
					},
	curve: "spring(1200,100,800)"
	});

});






PSD["mockup"].style.overflow = "hidden";