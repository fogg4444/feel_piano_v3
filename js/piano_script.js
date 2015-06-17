	
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
				
				A_m:        [["A","C","D"],  2],
				As_morBb_m: [["As","Cs","F"], 2],
				B_m:        [["B","D","Fs"], 2],
				C_m:        [["C","Eb","G"], 2],
				Cs_morDb_m: [["Cs","E","Gs"], 2],
				D_m:        [["D","F","A"],  2],
				Ds_morEb_m: [["","",""], 2],
				E_m:        [["E","G","B"],  2],
				F_m:        [["F","Ab","C"], 2],
				G_m:        [["G","Bb","D"], 2],

				A_7:  [["A","Cs","D","G"], 1],
				B_7:  [["B","Ds","Fs","A"], 1],
				C_7:  [["C","E","G","Bb"], 1],
				D_7:  [["D","Fs","A","C"], 1],
				E_7:  [["E","Gs","B","D"], 1],
				F_7:  [["F","A","C","Eb"], 1],
				G_7:  [["G","B","D","F"], 1],

				A_M7: [["A","Cs","D","Gs"], 2],
				B_M7: [["B","Ds","Fs","As"], 2],
				C_M7: [["C","E","G","B"], 1],
				D_M7: [["D","Fs","A","Cs"], 1],
				E_M7: [["E","Gs","B","Ds"], 1],
				F_M7: [["F","A","C","E"], 1],
				G_M7: [["G","B","D","Fs"], 1],

				A_m7: [["A","C","D","G"], 1],
				B_m7: [["B","D","Fs","A"], 1],
				C_m7: [["C","Eb","G","Bb"], 1],
				D_m7: [["D","F","A","C"], 1],
				E_m7: [["E","G","B","D"], 1],
				F_m7: [["F","Ab","C","Eb"], 1],
				G_m7: [["G","Bb","D","F"], 1],
			},
			scales : {
				A_major: [["A","B","Cs","D","E","Fs","Gs"], 2],
				B_major: [["B","Cs","Ds","E","Fs","Gs","As"], 2],
				C_major: [["C","D","E","F","G","A","B"], 1],
				D_major: [["D","E","Fs","G","A","B","Cs"], 1],
				E_major: [["E","Fs","Gs","A","B","Cs","Ds"], 1],
				F_major: [["F","G","A","Bb","C","D","E"], 2],
				G_major: [["G","A","B","C","D","E","Fs"], 2],

				// almost done!..
				A_minor: [["","","","","","",""], 1],
				B_minor: [["","","","","","",""], 1],
				C_minor: [["","","","","","",""], 1],
				D_minor: [["","","","","","",""], 1],
				E_minor: [["","","","","","",""], 1],
				F_minor: [["","","","","","",""], 1],
				G_minor: [["","","","","","",""], 1],

				A_harmonic_minor: [["","","","","","",""], 1],
				B_harmonic_minor: [["","","","","","",""], 1],
				C_harmonic_minor: [["","","","","","",""], 1],
				D_harmonic_minor: [["","","","","","",""], 1],
				E_harmonic_minor: [["","","","","","",""], 1],
				F_harmonic_minor: [["","","","","","",""], 1],
				G_harmonic_minor: [["","","","","","",""], 1],
			},
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
			piano_reset_input = []; // don't delete anyting from this
;


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

	function responseColor(e){
		//console.log("response color test");
		// prevent clicking the div below

		e.preventDefault();
		// selecting the correct dom object on each click
		//var DOM_object = this.id;
		var DOM_object = e.target.id;
		var key = document.getElementById(DOM_object);
		//var key = $(DOM_object);
		var key_id = key.id;
		var key_class = key.class;

		// big if statement needs to go here to reference selected chord or scale and colorize accordingly
		// compare 
		if (piano_reset_input === undefined) {
			// blink grey
			key.classList.add('grey');
			setTimeout(function() {key.classList.remove('grey');}, 150);
		} else{
			if ( $.inArray(key_id, piano_selected_id_array) > -1 ){// key_id is present in piano_selected_id_array
				key.classList.add('green');
			} else {
				// blink red once
				key.classList.add('red');
				setTimeout(function() {key.classList.remove('red');},150);
			};
		};
		e.stopPropagation();
	}

	function all_correct(){
		console.log("all correct!");
	}

	function resizeWindow(){
		var window_height = $(window).height();
		var window_height_px = window_height + "px";
		//console.log(window_height_px);
		$("#wrap").css('height', window_height_px);
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
		reset_selection = input;
		piano_reset_input = input;
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
		// console.log("piano_full_id_list");
		// console.log(piano_full_id_list);
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
	//	$(".black_key").on("mousedown", responseColor );
	//	$(".black_key").on("touchstart", responseColor );
	//	$(".white_key").on("mousedown", responseColor );
	//	$(".white_key").on("touchstart", responseColor );
		
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
			alert("This website looks much better in landscape mode. Try turning your device.");
		};
	}





		
$(document).ready(function(){

	//console.log("document ready");
	
	// some basic initialization here
	
	reset_piano();
	alertIfPortrait();
	getChordListAsArray();
	getScaleListAsArray();
	resizeWindow();
	populateSelectMenus();
	initialize_touch_input();

	// run resizeWindow() on user resize
	$(window).resize(function(){
		resizeWindow();
	});

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







	/*
	ion.sound({
    	sounds: [
        	{
            	name: "notify_sound",
            	volume: 1
        	},

		],
    	volume: 0.5,
    	path: "sounds/",
		preload: true
	});
	*/

	
});







