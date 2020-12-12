$(function(){
    
	var chartLeft1 = c3.generate({
		bindto:'#chartLeft1',
		
    	axis: {
        	x: {
            	label:  {
                text: '電力',
                position: 'outer-center'
                // inner-right : default
                // inner-center
                // inner-left
                // outer-right
                // outer-center
                // outer-left
           		}
            },
        	y: {
            	label:  {
                text: '運搬',
                position: 'outer-center'
                // inner-right : default
                // inner-center
                // inner-left
                // outer-right
                // outer-center
                // outer-left
            	}
            }
	        
       	},
       	data: {
			type: 'spline',
        	columns: [
            	['data1', 200, 160, 100, 50]  
        	]
        },
        size: {
	        height: 150,
	        width: 200
	    }


	});


	var chart11 = c3.generate({
	    bindto: '#chart11',
	    axis: {
	    	y: {
	    		label: {
	    			text: '電力量',
	    			position: 'outer-middle'
	    		}
	    	},
	    	x: {
	    		label: {
	    			text: '時間',
	    			position: 'outer-middle'
	    		}
	    	}
	    },
	    data: {
	      type: 'spline',
	      columns: [
	        ['需要電力', 3, 8, 20, 30, 20, 8, 3],
	        ['供给電力', 50, 100, 220, 320, 220, 100, 50]
	      ],
	      colors: {
            需要電力: 'black',
            供给電力: 'red',
          }
	    },
	    size: {
	        height: 160,
	        width: 280
	    }
	});

	var chart12 = c3.generate({
	    bindto: '#chart12',
	    data: {
	        columns: [
	            ["系統", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
	            ["PV", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
	            ["マルチ", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
		    ],
	        type : 'pie',
	        onclick: function (d, i) { console.log("onclick", d, i); },
	        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
	        onmouseout: function (d, i) { console.log("onmouseout", d, i); },
	        colors: {
	            系統: '#40E0D0',
	            PV: '#CAFF70',
	            マルチ: '#63B8FF',
	          }
	    },
	    size: {
	        height: 160,
	        width: 280
	    }
	});

	// var chart21 = c3.generate({
	//     bindto: '#chart21',
	//     data: {
	//       columns: [
	//         ['data1', 30, 200, 100, 400, 150, 250],
	//         ['data2', 50, 20, 10, 40, 15, 25]
	//       ]
	//     }
	// });

	var chart22 = c3.generate({
	    bindto: '#chart22',
	    axis: {
	    	y: {
	    		label: {
	    			text: '日射量',
	    			position: 'outer-middle'
	    		}
	    	},
	    	x: {
	    		label: {
	    			text: '時間',
	    			position: 'outer-middle'
	    		}
	    	}
	    },
	    data: {
	      type: 'spline',
	      columns: [
	        ['日射量', 30, 80, 200, 300, 200, 80, 30],
	      ],
	      colors: {
            日射量: 'black',
          }
	    },
	    size: {
	        height: 160,
	        width: 220
	    }
	});

	var chart23 = c3.generate({
	    bindto: '#chart23',
	    axis: {
	    	y: {
	    		label: {
	    			text: '風速',
	    			position: 'outer-middle'
	    		}
	    	},
	    	x: {
	    		label: {
	    			text: '時間',
	    			position: 'outer-middle'
	    		}
	    	}
	    },
	    data: {
	      type: 'spline',
	      columns: [
	        ['風速', 30, 80, 200, 300, 200, 80, 30],
	      ],
	      colors: {
            風速: 'black',
          }
	    },
	    size: {
	        height: 160,
	        width: 220
	    }
	});

	var chart31 = c3.generate({
	    bindto: '#chart31',
	    axis: {
	    	y: {
	    		label: {
	    			text: '運搬数',
	    			position: 'outer-middle'
	    		}
	    	},
	    	x: {
	    		label: {
	    			text: '時間',
	    			position: 'outer-middle'
	    		}
	    	}
	    },
	    data: {
	      columns: [
	        ['従来', 50, 100, 150, 200, 250, 300, 350],
	        ['最適化', 50, 130, 210, 290, 370, 450, 530]
	      ],
	      colors: {
            従来: 'gray',
            最適化: 'red',
          }
	    },
	    size: {
	        height: 160,
	        width: 220
	    }
	});

	var chart32 = c3.generate({
	    bindto: '#chart32',
	    axis: {
	    	y: {
	    		show: false,
	    		label: {
	    			text: 'CO2排出量',
	    			position: 'outer-middle'
	    		}
	    	},
	    },
	    data: {
	      type : 'bar',
	      columns: [
	        ['従来', 300],
	        ['最適化',  200]
	      ],
	      colors: {
            従来: 'black',
            最適化: 'red',
          }
	    },
	    size: {
	        height: 160,
	        width: 220
	    }
	});

	var chart33 = c3.generate({
	    bindto: '#chart33',
	    axis: {
	    	y: {
	    		label: {
	    			text: '穀物乾燥数',
	    			position: 'outer-middle'
	    		}
	    	},
	    	x: {
	    		label: {
	    			text: '時間',
	    			position: 'outer-middle'
	    		}
	    	}
	    },
	    data: {
	      columns: [
	        ['従来', 50, 100, 150, 200, 250, 300, 350],
	        ['最適化', 50, 130, 210, 290, 370, 450, 530]
	      ],
	      colors: {
            従来: 'gray',
            最適化: 'red',
          }
	    },
	    size: {
	        height: 160,
	        width: 220
	    }
	});

    
});