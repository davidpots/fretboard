# Fretboard

Fretboard is a simple platform that lets you create SVG versions of guitar chord and scale charts via raw ASCII text. Currently in progress. For more info, see: http://davidpots.com/blog/guitar-fretboard-ascii-svg/

## Documentation

Mainly for my own reference.

### Basic ASCII-to-SVG Setup
Use this basic HTML format. You must specify either `v4`, `v5`, `v7`, `v9`, `v12`, or `v15` as a class in the `.asciiFret` element. Also, the spacing of the fretboard needs to account for 6 strings, with a space of padding buffering all characters.

    <div class="fretboard_instance">
    <pre class="asciiFret v4">
     x  ^ ^ 
     ||||o| 
     ||o||| 
     |o|||| 
     |||||| 
            
    </pre>
    </div>

Here is each ASCII character that is supported for replacement. Each character is replaced by a SVG cell of uniform sizing. These cells are overlayed onto an SVG fretboard.

    " " becomes an empty cell
    "|" becomes an empty cell
    "^" becomes an 'open' string indicator cell
    "x" becomes an 'muted' string indicator cell
    "o" becomes a finger cell (single finger)
    "(" becomes a finger cell (left edge of a barre chord)
    ")" becomes a finger cell (right edge of a barre chord)
    "=" becomes a finger cell (middle of a barre chord)

### No Nut
If you want to show a fretboard that is agnostic with respect to where it is relative to the nut of the guitar (i.e., the top of the guitar where the 0th fret would be), add class `.noNut` to the `.asciiFret` div.

### More coming soon... 
Stay tuned.