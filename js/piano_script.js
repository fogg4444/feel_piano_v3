	
	//Define collection of piano paramaters


	// TODO

	// Get extra key added for F mode
	// Reset width settings on F mode keys
	// 
	//
	//
	//
	//
	// change all sharp # signs to 
	//
	
	var piano = {
			chords: {
				// probably should double check all these...
				A:    [["A","Cs","E"],  2],
				AsorBb:[["As","D","F"], 2], 
				B:    [["B","Ds","Fs"], 2], 
				C:    [["C","E","G"],   1],
				CsorDb:[["Cs","F","Gs"], 1],
				D:    [["D","Fs","A"],  1],
				DsorEb:[["Ds","G", "As"], 1],
				E:    [["E","Gs","B"],  1],
				F:    [["F","A","C"],   2],
				FsorGb:[["Fs","As","Cs"], 2],
				G:    [["G","B","D"],   2],
				GsorAb:[["Gs","C","Ds"], 2],
				
				A_m:        [["A","C","E"],  2],
				As_morBb_m: [["As","Cs","F"], 2],
				B_m:        [["B","D","Fs"], 2],
				C_m:        [["C","Ds","G"], 2],
				Cs_morDb_m: [["Cs","E","Gs"], 2],
				D_m:        [["D","F","A"],  2],
				Ds_morEb_m: [["Ds","Fs","As"], 2],
				E_m:        [["E","G","B"],  2],
				F_m:        [["F","Gs","C"], 2],
				Fs_morGb_m: [["Fs","A","Cs"], 2],
				G_m:        [["G","As","D"], 2],
				Gs_morAb_m: [["Gs","B","Ds"], 2],

				// A_7:  [["A","Cs","D","G"], 1],
				// B_7:  [["B","Ds","Fs","A"], 1],
				// C_7:  [["C","E","G","Bb"], 1],
				// D_7:  [["D","Fs","A","C"], 1],
				// E_7:  [["E","Gs","B","D"], 1],
				// F_7:  [["F","A","C","Eb"], 1],
				// G_7:  [["G","B","D","F"], 1],

				// A_M7: [["A","Cs","D","Gs"], 2],
				// B_M7: [["B","Ds","Fs","As"], 2],
				// C_M7: [["C","E","G","B"], 1],
				// D_M7: [["D","Fs","A","Cs"], 1],
				// E_M7: [["E","Gs","B","Ds"], 1],
				// F_M7: [["F","A","C","E"], 1],
				// G_M7: [["G","B","D","Fs"], 1],

				// A_m7: [["A","C","D","G"], 1],
				// B_m7: [["B","D","Fs","A"], 1],
				// C_m7: [["C","Eb","G","Bb"], 1],
				// D_m7: [["D","F","A","C"], 1],
				// E_m7: [["E","G","B","D"], 1],
				// F_m7: [["F","Ab","C","Eb"], 1],
				// G_m7: [["G","Bb","D","F"], 1],
			},
			scales : {
				A_major: [["A","B","Cs","D","E","Fs","Gs"], 2],
				B_major: [["B","Cs","Ds","E","Fs","Gs","As"], 2],
				C_major: [["C","D","E","F","G","A","B"], 1],
				D_major: [["D","E","Fs","G","A","B","Cs"], 1],
				E_major: [["E","Fs","Gs","A","B","Cs","Ds"], 1],
				F_major: [["F","G","A","As","C","D","E"], 2],
				G_major: [["G","A","B","C","D","E","Fs"], 2],

				// almost done!..
				// A_minor: [["","","","","","",""], 1],
				// B_minor: [["","","","","","",""], 1],
				// C_minor: [["","","","","","",""], 1],
				// D_minor: [["","","","","","",""], 1],
				// E_minor: [["","","","","","",""], 1],
				// F_minor: [["","","","","","",""], 1],
				// G_minor: [["","","","","","",""], 1],

				// A_harmonic_minor: [["","","","","","",""], 1],
				// B_harmonic_minor: [["","","","","","",""], 1],
				// C_harmonic_minor: [["","","","","","",""], 1],
				// D_harmonic_minor: [["","","","","","",""], 1],
				// E_harmonic_minor: [["","","","","","",""], 1],
				// F_harmonic_minor: [["","","","","","",""], 1],
				// G_harmonic_minor: [["","","","","","",""], 1],
			},

			notes_on_keyboard : [ // First value is piano id postion, second is start time in audio file
								["C1", 0.000],
								["Cs1", 4.233],
								["D1", 8.520],
								["Ds1", 12.75],
								["E1", 17.022],
								["F1", 21.260],
								["Fs1", 25.521],
								["G1", 29.76],
								["Gs1", 34.023],
								["A1", 38.274],
								["As1", 42.523],
								["B1", 46.772],
								["C2", 51.023],
								["Cs2", 55.270],
								["D2", 59.524],
								["Ds2", 63.771],
								["E2", 68.022],
								["F2", 72.273],
								["Fs2", 76.522],
								["G2", 80.772],
								["Gs2", 85.022],
								["A3", 89.269],
								["As3", 93.519],
								["B3", 97.774],  // left off here
			],

			keys_to_render : {
				start_C1: "<div id='C1' class='white_key C'><div id='Cs1' class='black_key Cs'></div></div><!----><div id='D1' class='white_key D'><div id='Ds1' class='black_key Ds'></div></div><!----><div id='E1' class='white_key E'></div><!----><div id='F1' class='white_key F'><div id='Fs1' class='black_key Fs'></div></div><!----><div id='G1' class='white_key G'><div id='Gs1' class='black_key Gs'></div></div><!----><div id='A1' class='white_key A'><div id='As1' class='black_key As'></div></div><!----><div id='B1' class='white_key B'></div><!----><div id='C2' class='white_key C'><div id='Cs2' class='black_key Cs'></div></div><!----><div id='D2' class='white_key D'><div id='Ds2' class='black_key Ds'></div></div><!----><div id='E2' class='white_key E'></div><!---->",
				start_F1: "<div id='F1' class='white_key F'><div id='Fs1' class='black_key Fs'></div></div><!----><div id='G1' class='white_key G'><div id='Gs1' class='black_key Gs'></div></div><!----><div id='A1' class='white_key A'><div id='As1' class='black_key As'></div></div><!----><div id='B1' class='white_key B'></div><!----><div id='C2' class='white_key C'><div id='Cs2' class='black_key Cs'></div></div><!----><div id='D2' class='white_key D'><div id='Ds2' class='black_key Ds'></div></div><!----><div id='E2' class='white_key E'></div><!----><div id='F2' class='white_key F'><div id='Fs2' class='black_key Fs'></div></div><!----><div id='G2' class='white_key G'><div id='Gs2' class='black_key Gs'></div></div><!----><div id='A3' class='white_key A'><div id='As3' class='black_key As'></div></div><!----><div id='B3' class='white_key B'></div>"
			}
		};

		// these are here for assisting menu operation/ preventing firing on title options.
		var chord_list_array = [],
			scale_list_array = [],
			current_selection = [], // full compound array from main piano object ex: [["A","B","C"], 2]
			current_selection_notes = [], // only the internal array of notes ex: ["A","B","C"]
			current_white_key_class = "",
			piano_selected_id_array = [],
			piano_full_dom_list = [],
			piano_full_id_list_css_reference = [],
			piano_reset_input = [],
			selected_answers = [],
			initial_green_route = 0; // don't delete anyting from this
;

	// preload css background images



	function getChordListAsArray(){
		// add chords from master library to array
		for(var chord in piano.chords){
			chord_list_array.push(chord);
		}
		console.log("chord list array");
		console.log(chord_list_array);
	}

	function getScaleListAsArray(){
		// add chords from master library to array
		for(var chord in piano.scales){
			scale_list_array.push(chord);
		}
		//console.log(scale_list_array);
	}


	function displayKeyNames(){
		// Toggle key names visibility here somehow
	};

	function clean_array(input){
		var names = input;
		var uniqueNames = [];
		$.each(names, function(i, el){
    	if($.inArray(el, uniqueNames) === -1)
    		uniqueNames.push(el);
		});
		return uniqueNames
	}

	function responseColor(e){
		console.log("key response");
		// prevent clicking the div below

		e.preventDefault();
		// selecting the correct dom object on each click
		//var DOM_object = this.id;
		var DOM_object = e.target.id;
		var key = document.getElementById(DOM_object);
		//var key = $(DOM_object);
		var key_id = key.id;
		var key_class = key.class;

		console.log(key_id);

		function darkenGreen(id){
			var formatted_key_id = "#" + id;
			$(formatted_key_id).addClass('dark_green_paisley'); // introduce darkened paisley image
		
			setTimeout(function(){ // set back to full brighness
				$(formatted_key_id).removeClass('dark_green_paisley')
			}, 150);
		}

		// big if statement needs to go here to reference selected chord or scale and colorize accordingly
		if (piano_reset_input === undefined) { // if no slection has been made/ or piano has been reset.
			// blink grey
			key.classList.add('grey');
			console.log("grey");
			setTimeout(function() {key.classList.remove('grey');}, 150);
		} else{

			if ( $.inArray(key_id, piano_selected_id_array) > -1 ){// Correct!.key_id is present in piano_selected_id_array
				
				if (initial_green_route === 0) {
					key.classList.add('green');
					selected_answers.push(key_id);// add key_id to selected_answers
					console.log("green!");	
				} else {
					console.log("darken");
					darkenGreen(key_id);
				};


			} else { 				// wrong. not in piano_selected_id_array
				// blink red once
				key.classList.add('red');
				console.log("red");
				setTimeout(function() {key.classList.remove('red');},150);
			};


	//		function format_arrays(input){
	//			var new_array = [];
	//			new_array = input.sort().join(',');
	//			clean_array(new_array);
	//			return new_array
	//		}


		///	console.log("comparing these strings");
		///	console.log( format_arrays(selected_answers) );
		///	console.log( format_arrays(piano_selected_id_array) );

			if ( clean_array(selected_answers).sort().join(',') === clean_array(piano_selected_id_array).sort().join(',') ){ // all answers found!



				if (initial_green_route === 0) {
					for(var this_id in piano_selected_id_array){
						console.log("changing to paisley!");
						console.log(piano_selected_id_array[this_id]);
						var formatted_key_id = "#" + piano_selected_id_array[this_id];
						$(formatted_key_id).removeClass('green').addClass('green_paisley');
					}
					console.log("Got it!. close initial green route");
					initial_green_route = 1;
				};




			}


		};

		function play(note_name){
			ion.sound.play("long_rhodes_C1_B3",{
				part: note_name
			});
			// console.log("Played" + note_name);
		}
		
		play(key_id);

		e.stopPropagation();
	}

	function all_correct(){
		console.log("all correct!");
	}

	function resizeWindow(){

		var window_height = $(window).outerHeight(true);
		var window_height_px = window_height + "px";
		console.log("window height");
		console.log(window_height);

		function resize_the_piano_div(){
			var offset_select_menu_height = $('#select_menu').outerHeight(true);
			console.log(offset_select_menu_height);

			var piano_wrap_size = window_height - offset_select_menu_height;
			var piano_wrap_size_px = piano_wrap_size + "px";
			var white_key_wrap = (piano_wrap_size - 10);
			var white_key_wrap_px = white_key_wrap + "px";

			console.log("offset selevt menu height");
			console.log(offset_select_menu_height);
			console.log("piano wrap size text");
			console.log(piano_wrap_size_px);

			$('#the_piano').css('height', piano_wrap_size_px);
			$('.white_key').css('height', white_key_wrap_px);


		}

		//console.log(window_height_px);
		$("#wrap").css('height', window_height_px);
		resize_the_piano_div();
	}

	function populateSelectMenus(){
		// title menu item
		$("#select_chord").append($("<option></option>").text("Select Chord"));
		$("#select_scale").append($("<option></option>").text("Select Scale"));

		for(var chord in piano.chords){
			no_underscore_chord = chord.replace("or"," / ").replace("s", "#").replace(/_/g,"");
			// console.log(no_underscore_chord);
			//console.log(chord);
			$("#select_chord")
			.append($("<option></option")
				.attr("value", chord)
				.text(no_underscore_chord) );
		};

		for(var scale in piano.scales){
			no_underscore_scale = scale.replace(/_/g," ");
			//console.log(scale);
			$("#select_scale")
			.append($("<option></option")
				.attr("value", scale)
				.text(no_underscore_scale) );
		};
	}

	function reset_piano(input){
		// remove keyboard
		// include correct keys

		console.log("reset piano input");
		console.log(input);

		var reset_selection = [];
		selected_answers = [];
		reset_selection = input;
		piano_reset_input = input;
		initial_green_route = 0;
		current_selection_notes = current_selection[0]

		var wrap = $('#white_key_wrap');

		if (arguments.length === 0) { // this is for initial loading or total clean reset with future reset button
		
			wrap.append(piano.keys_to_render.start_C1);
			current_white_key_class = "white_key_C_mode";
			$('.white_key').addClass(current_white_key_class);
			construct_dom_arrays();

		} else { // accepting arguments from the dropdown menus
		
			wrap.empty();
			$('.white_key').removeClass(current_white_key_class);


  			if (reset_selection[1] === 1){ // if C mode. option 1
				//console.log("c mode");
				wrap.append(piano.keys_to_render.start_C1);
				current_white_key_class = "white_key_C_mode";
				$('.white_key').addClass(current_white_key_class);
				construct_dom_arrays(current_selection_notes);
				initialize_touch_input();

			} else if(reset_selection[1] === 2){ // if F mode. option 2
				//console.log("f mode");
				wrap.append(piano.keys_to_render.start_F1);
				current_white_key_class = "white_key_F_mode";
				$('.white_key').addClass(current_white_key_class);
				construct_dom_arrays(current_selection_notes);
				initialize_touch_input();
			};
		}
		round_edges_first_and_last_white_key();
	}

	function round_edges_first_and_last_white_key(){
		var first_key = piano_full_id_list_css_reference[0];
		var last_key = piano_full_id_list_css_reference[piano_full_id_list_css_reference.length - 1];
		// console.log("round_edges_first_and_last_white_key");
		// console.log(piano_full_id_list_css_reference);
		// console.log(first_key);
		// console.log(last_key);
		$("#" + first_key).addClass("first_white_key");
		$("#" + last_key).addClass("last_white_key");
	}

	function construct_dom_arrays(input){
		// console.log(input);

		// clear all values fresh []

		// values we're dealing with:
		//
		// piano_full_dom_list - all the keys currently on the screen. compound array with ids and classes
		// piano_selected_id_array - array constructed of the selected id's we want to taget gor the correct answer
		// array_of_all_divs_in_keyboard

		/////////////////////////////////
		// Generate piano_full_dom_list
		var array_of_all_divs_in_keyboard;
		var full_class_list = [];
		piano_selected_id_array = [];
		piano_full_id_list_css_reference = []; // reset this each time
		piano_full_dom_list = [];


		array_of_all_divs_in_keyboard = $('div', '#white_key_wrap');
		for (var i = 0; i < array_of_all_divs_in_keyboard.length; i++){ // set piano_full_dom_list
			var note_id = array_of_all_divs_in_keyboard[i].id;
			var class_list = array_of_all_divs_in_keyboard[i].classList[1]; // array position 2 holds the note name in html world
			full_class_list.push(class_list);
			var output = [note_id, class_list];
			piano_full_dom_list.push(output);
		}
		// double check it
		// console.log("piano_full_dom_list");
		// console.log(piano_full_dom_list);

		////////////////////////////////////
		// generate piano_full_id_list
		var piano_full_id_list = [];
		for (value in piano_full_dom_list){
			piano_full_id_list.push(piano_full_dom_list[value][0]);
		}
		// double check it
		 console.log("piano_full_id_list");
		 console.log(piano_full_id_list);
		// save it to piano_full_id_list_css_reference
		piano_full_id_list_css_reference = piano_full_id_list;

		////////////////////////////////////
		// generate piano_full_note_name_list
		var piano_full_note_name_list = [];
		for (value in piano_full_dom_list){
			piano_full_note_name_list.push(piano_full_dom_list[value][1]);
		}
		// double check it
		// console.log("piano_full_note_name_list");
		// console.log(piano_full_note_name_list);

		// console.log("--------------------------------------");

		/////////////////////////////////////
		// generate piano_selected_id_array

		// work with one note of input at a time
		for (note in input){
			//console.log(input[note]);
			var this_note = input[note];
			var first_of_matching_notes = [];

			// initialize matching_notes array. this holds all possible match ids
			var matching_notes = []
			for (value in piano_full_note_name_list){
				//console.log(piano_full_note_name_list[note]);
				if (this_note === piano_full_note_name_list[value]){
					// console.log("match");
					// console.log(this_note);
					// console.log(value);
					matching_notes.push(value);
					// console.log(matching_notes);
					first_of_matching_notes = matching_notes[0];
					// console.log("-----");
				};
			}
			// console.log("first_of_matching_notes");
			// console.log(first_of_matching_notes);
			// console.log("-------");

			var key_id = piano_full_id_list[first_of_matching_notes];
			// console.log("key id");
			// console.log(piano_full_id_list[first_of_matching_notes]);

			piano_selected_id_array.push(key_id);

			// console.log("piano_selected_id_array");
			// console.log(piano_selected_id_array);

			// clear values from piano_full_note_name_list to prevent notes from validating in th;e wrong order (uninteded inversions!)
			for(var i = 0; i <= first_of_matching_notes; i++){
				//console.log(i);
				piano_full_note_name_list[i] = 0;
			}

			//console.log("piano_full_note_name_list");
			//console.log(piano_full_note_name_list);


			//console.log("----------------");
		}

	}

	function arrayContains(needle, arrhaystack){
    	return (arrhaystack.indexOf(needle) > -1);
	}

	function resetDropdown(dom_id){
			var id = "#" + dom_id + " option:first";
			$(id).attr("selected", true);
		}

	function setCurrentSelection(chords_or_scales, this_value){
		if (chords_or_scales == "chords") {
			//console.log("choredsd");
			current_selection = piano.chords[this_value];
			reset_piano(current_selection);
		} else {
			console.log("sclases");
			current_selection = piano.scales[this_value];
			reset_piano(current_selection);
		};
	};

	function initialize_touch_input(){

		$(".black_key").on("mousedown", function(event){
			responseColor(event);
		} );
		$(".black_key").on("touchstart", function(event){
			responseColor(event);
		} );
		$(".white_key").on("mousedown", function(event){
			responseColor(event);
		} );
		$(".white_key").on("touchstart", function(event){
			responseColor(event);
		} );
	}

	function alertIfPortrait(){
		// console.log("alert if portrait");
		var height = $(window).height();
		var width = $(window).width();
		//console.log(height);
		//console.log(width);
		if (height > width) {
			console.log("This website looks much better in landscape mode. Try turning your device.");
			//$().
		};
	}

	function initialize_ion_sound(){
		console.log("ion sound");

		function ion_sound_ready(){
			console.log("ion sound ready callback!");
		}

		ion.generate_length_array = function(start_point){
				var duration = 4.062;
				return [start_point, duration];
		},
		ion.generate_sprite_list = function(){
			var object_to_return = {};

			console.log(object_to_return);

			var time_value = 0.0;
			for(var note in piano.notes_on_keyboard){
				// console.log(piano.notes_on_keyboard[note][0]);
				var this_note = piano.notes_on_keyboard[note][0];
				// console.log("this_note");
				// console.log(this_note);
				// console.log("-----------");
				var formatted_time_array = ion.generate_length_array(piano.notes_on_keyboard[note][1]);

				object_to_return[this_note] = formatted_time_array; // using this_note to find the right key to insert the time into
				time_value += 4.062;
			};

			console.log(object_to_return);
			return object_to_return;


			//return "C1": ion.generate_length_array(0.0),
		}

		ion.sound({
			multiplay: true,
			volume: 0.1,
			ready_callback: ion_sound_ready(),

    		sounds: [
        		{
           			// sprite name
           			name: "long_rhodes_C1_B3",

           			// sprite parts
           			sprite: ion.generate_sprite_list(),
       			}
   			],
    		path: "audio/long/",
			preload: true
		});
	}

	function preload(arrayOfImages) {
    	$(arrayOfImages).each(function(){
        	$('<img/>')[0].src = this;
        	// Alternatively you could use:
        	// (new Image()).src = this;
    	});
	}

	function fullscreen_toggle(input){
		console.log(input);
		if (screenfull.enabled) {

			function toggle(){
				if (screenfull.isFullscreen != true){
					// go fullscreen
					screenfull.request();
					$('#fullscreen_button').attr("src", "images/leave_fullscreen.png");
				} else {
					// leave fullscreen
					screenfull.exit();
					$('#fullscreen_button').attr("src", "images/go_fullscreen.png");
				};
			}

			if (input == "resize") {
				if(screenfull.isFullscreen != true){
					// handle screen resize via exit of fullscreen
					$('#fullscreen_button').attr("src", "images/go_fullscreen.png");
				}
			} else{
				toggle(); // run as normal
				console.log("run as normal");
			};


		};
	}


		
$(document).ready(function(){

	//console.log("document ready");
	
	// some basic initialization here
	
	reset_piano();
	getChordListAsArray();
	getScaleListAsArray();
	resizeWindow();
	populateSelectMenus();
	initialize_touch_input();
	preload(['../images/jade_tile.png','../images/jade_tile_dark.png']);


	// var test_array = ["Red", "Green", "Red"];
	// clean_array(test_array);

	// run resizeWindow() on user resize
	$(window).resize(function(){
		resizeWindow();
		fullscreen_toggle("resize");
	});

	$('#fullscreen_button').click(function(){
		fullscreen_toggle();
	});

	initialize_ion_sound();
	alertIfPortrait();


	// handle chord selection
	$("#select_chord").change(function(){

		// prevent firing reset if selection is not an object item ie: titles in the menu
		if(arrayContains(this.value, chord_list_array)){
			reset_piano(this.value);
			resetDropdown('select_scale');
			setCurrentSelection("chords", this.value);
		}
	});

	// handle scale selection
	$("#select_scale").change(function(){
		// prevent firing reset if selection is not an object item ie: titles in the menu
		if(arrayContains(this.value, scale_list_array)){
			//reset_piano(this.value);
			resetDropdown('select_chord');
			setCurrentSelection("scales", this.value);
		}
	});
});







