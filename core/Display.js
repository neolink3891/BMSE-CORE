class Display {
    constructor() {
        this.line = "";
        this.right = "";
        this.left = "";
    }

    startLine() {
        this.line = '<div id="general" class="row"><div class="term">';
    }
    addTermToLeft(t) {
        this.left += t;
    }
    addTermToRight(t) {
        this.right += t;
    }
    endLine() {
        this.line += '</div></div>';
    }

    displayTo(display) {
        this.line = '<div id="general" class="row"><div class="term">';
        this.line += this.left + '<div class="tc_middle">&nbsp;=&nbsp;</div>' + this.right;
        this.line += '</div></div>';
        
        document.getElementById(display).innerHTML = this.line;
    }
}