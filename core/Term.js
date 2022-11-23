//For Term Type: 0 - not set, 1 = Integer, 2 = Fraction, 3 = mix
//declaring components of a term
class Term {
    constructor() {
        this.numerador = 0;
        this.denominador = 0;
        this.variable = "";
        this.n_signo = true;
        this.d_signo = true;
        this.signo = true;
        this.entero = 0;
        this.type = 0;
        this.position = 1;
    }

    //Init methods
    initAsFraction(num, snum, den, sden, vari, pos) {
        this.numerador = num;
        this.denominador = den;
        this.variable = vari;
        this.n_signo = snum;
        this.d_signo = sden;
        this.setTermSign();
        this.entero = 0;
        this.type = 2;
        this.position = pos;
    }
    initAsInteger(num, snum, vari, pos) {
        this.numerador = 0;
        this.denominador = 0;
        this.variable = vari;
        this.n_signo = true;
        this.d_signo = true;
        this.signo = snum;
        this.entero = num;
        this.type = 1;
        this.position = pos;
    }
    initAsMix(ent, num, snum, den, sden, vari, pos) {
        this.entero = ent;
        this.numerador = num;
        this.denominador = den;
        this.variable = vari;
        this.n_signo = snum;
        this.d_signo = sden;
        this.setTermSign();
        this.type = 3;
        this.position = pos;
    }

    //Render Methods
    renderAsInteger() {
        let shtml = "";

        if(this.type === 1) {
            shtml += '<div class="tc_middle">' + this.getIntSign() + '</div>';
            shtml += '<div class="tc_middle">' + this.entero + '</div>';
            shtml += '<div class="tc_middle">' + this.variable + '</div>';
        } else {
            shtml = '<div class="tc_middle">&nbsp;NRT&nbsp;</div>'; //Not Right Type
        }
        
        
        return shtml;
    }
    renderAsFraction(){
        let shtml = "";

        if(this.type === 2) {
            shtml += '<div class="tc_middle">' + this.getIntSign() + '</div>';
            shtml += '<div class="fraction">';
            shtml += '<div class="tc_top">' + this.numerador + '</div>';
            shtml += '<div class="middle_line"></div>';
            shtml += '<div class="tc_bottom">' + this.denominador + '</div>';
            shtml += '</div>';
            shtml += '<div class="tc_middle">' + this.variable + '</div>';
        } else {
            shtml = '<div class="tc_middle">&nbsp;NRT&nbsp;</div>'; //Not Right Type
        }

        return shtml;
    }
    renderAsMix(){
        let shtml = "";

        if(this.type === 3) {
            shtml += '<div class="tc_middle">' + this.getIntSign() + '</div>';
            shtml += '<div class="tc_middle">' + this.entero + '</div>';
            shtml += '<div class="fraction">';
            shtml += '<div class="tc_top">' + this.numerador + '</div>';
            shtml += '<div class="middle_line"></div>';
            shtml += '<div class="tc_bottom">' + this.denominador + '</div>';
            shtml += '</div>';
            shtml += '<div class="tc_middle">' + this.variable + '</div>';
        } else {
            shtml = '<div class="tc_middle">&nbsp;NRT&nbsp;</div>'; //Not Right Type
        }

        return shtml;
    }
    renderAsDefault() {
        //Renders by Term type.
        let shtml = "";

        switch(this.type) {
            case 1:
                shtml = this.renderAsInteger();
                break;
            case 2:
                shtml = this.renderAsFraction();
                break;
            case 3:
                shtml = this.renderAsMix();
                break;
            default:
                break;
        }

        return shtml;
    }

    //General Purpose Methods
    getIntSign() {
        if (this.position === 2) { 
            if(this.signo) {
                return "&nbsp;+&nbsp;";
            } else {
                return "&nbsp;-&nbsp;";
            }
        } else {
            if(this.signo) {
                return "";
            } else {
                return "&nbsp;-&nbsp;";
            }
        }
    }
    setTermSign() {
        if(this.d_signo === this.n_signo) {
            this.signo = true;
        } else {
            this.signo = false;
        }
    }
}

