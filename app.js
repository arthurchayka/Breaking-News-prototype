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



PSD.logo.opacity = 0

start = function() {

		PSD.logo.animate({
		properties: {opacity:1},
		time: 1000
	})

	utils.delay(1000, function() {
		PSD.logo.scale = .5
		PSD.logo.animate({
			properties: {opacity:1, scale:1},
			curve: "spring(1500,30,2000)"
	})
})

	// Rotate the logo
	utils.delay(2000, function() {
		PSD.logo.animate({
			properties: {rotationY:720},
			curve: "spring(100,30,0)"
	})
})
	// Shake the logo
	utils.delay(3000, function() {
		oldX = PSD["logo"].x
		PSD.logo.x -= 100
		PSD.logo.animate({
			properties: {x:oldX},
			curve: "spring(600,6,500)"
	})
})
};

utils.delay(500, start)



PSD["smallBreakingNews"].opacity = 0

// Animate to Now View
gotoNow = function() {
	
	PSD["breakingNews"].animate({
		properties: {
			y: 405,
			scale: 0.7,
			opacity: 0
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

};

goHome = function() {
		
	PSD["breakingNews"].animate({
		properties: {
			y: 860,
			scale: 1,
			opacity: 1
		},
		curve: animateOutCurve
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
PSD["reflect"].on(pointerType, function(e) {
	var movePage;
	e.preventDefault();
	movePage = toggler();
	return movePage();
});

/*

toggleback = utils.toggle(goHome);
PSD["breakingNewss"].on(pointerType, function(a) {
	var moveback;
	a.preventDefault();
	moveback = toggleback();
	return moveback();
});

*/

//leftside
PSD["leftsidetrigger"].x = 0

PSD["leftButton"].x = 860

PSD["leftButton"].on(pointerType, function() {
   PSD["leftSide"].animate({
		properties: {x:760},
		curve: animationCurve
	})
   PSD["leftsidetrigger"].animate({
		properties: {x:1270},
		curve: animationCurve
	})
        PSD["smallBreakingNews"].animate({
			properties: {
			opacity: 0,
			x: 1500
		},
	curve: "spring(1000,100,800)"
	});

       PSD["leftButton"].animate({
			properties: {
			opacity: 0,
			x: 1500
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
		properties: {x:150},
		curve: animationCurve
	})

 PSD["leftButton"].animate({
			properties: {
			opacity: 1,
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

PSD["rightButton"].x = 1370 

   PSD["rightsidetrigger"].animate({
		properties: {x:1500},
		curve: animationCurve
	})

PSD["rightButton"].on(pointerType, function() {
   PSD["rightSide"].animate({
		properties: {x:1020},
		opacity: 0,
		curve: animationCurve
	})
   PSD["rightsidetrigger"].animate({
		properties: {x:800},
		opacity: 0,
		curve: animationCurve
	})
        PSD["smallBreakingNews"].animate({
			properties: {
			opacity: 0,
			x: 650
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

PSD["rightsidetrigger"].on(pointerType, function() {
   PSD["rightSide"].animate({
		properties: {x:1500},
		curve: animationCurve
	})
      PSD["rightsidetrigger"].animate({
		properties: {x:1500},
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

/*
       PSD["leftButton"].animate({
			properties: {
			opacity: 0,
			x: 1500
		},
	curve: "spring(1000,100,800)"
	});
});


PSD["leftsidetrigger"].on(pointerType, function() {
   PSD["leftSide"].animate({
		properties: {x:100},
		curve: animationCurve
	})
      PSD["leftsidetrigger"].animate({
		properties: {x:150},
		curve: animationCurve
	})

 PSD["leftButton"].animate({
			properties: {
			opacity: 1,
			x:860
		},
	curve: "spring(1200,100,800)"
	});
PSD["breakingNewss"].animate({
			properties: {
			opacity: 1,
			x:980,
			y:415
					},

	curve: "spring(1200,100,800)"
	});
}); */


PSD["mockup"].style.overflow = "hidden";
/*
       if(goHome){
      	PSD["breakingNewss"].animate({
			properties: {
			opacity: 0
		},
	});

} else {
PSD["breakingNewss"].animate({
			properties: {
			opacity: 1,
			x:277,
			y:415

		},
	curve: "spring(1200,100,800)"
	});
}


Phone.on("click", function() {
  Profile.animate({
		properties: {x:-320},
		curve: animationCurve
	})
}); */