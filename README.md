Feel Piano

An interactive music theory / keyboard education tool.

It's live and I'm working on it here: http://brianfogg.com/sub/css_piano/css3_piano_3/

This is my first real javascript project. My code is not as optimized as it could be. Some serious refactoring is in order but it's just a prototype and Im' trying to get all my features implemented first.


It's using a bit of javascript generated CSS to resize and modify the layout dependent on screen size and scale mode. A lot of percentage heights are going around in here. jQuery gets window.height and div height of the selection menu. Then modifies the keybed with pixel values.

I haven't put all the chords and scales in just yet. I'm trying to figure out how to make this beginner friendly. It  probably won't contain every possibly chord and scale permutation right away. Maybe a system to slowly introduce greater complexity should be implemented.

Feel Piano uses ion.sound.js's audio sprite functionality.

The sounds are Fender Rhodes samples recorded from a Nord Electro keyboard and manipulated in logic to have an ideal decay time.

Have fun! Give me feedback.




TODO:

- fix audio sprite start times. we're experiencing a little clipping as the playhead drop straight into a sample a little early.