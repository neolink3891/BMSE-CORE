class Primes {
    constructor(dimension) {
        this.message = "";
        this.seed = [2,3,5,7,11,13,17,19,23,27,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,252,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499];
    }

    isItPrime(num) {
        let inum = parseInt(num);

        if(inum > 1) {
            if(inum <= parseInt(this.seed[this.seed.length - 1])) {
                if(this.seed.includes(inum)){
                    this.message = inum + " IS A PRIME";
                    return true;
                } else {
                    this.message = inum + " IS NOT A PRIME";
                    return false;
                }
            } else {
                for(var i = 0; i < this.seed.length; i++) {
                    if((inum % parseInt(this.seed[i])) === 0) {
                        this.message = inum + " IS NOT A PRIME";
                        return false;
                    }
                }
                this.message = inum + " IS PROBABLY A PRIMER";
                return true;
            }
        } else {
            this.message = '<div>0 or 1</div>'
            return false;
        }
    }

    findMCM(numbers) {
        let nummat = numbers;
        let pricol = [];
        let used = false;
        let resp = 0;
        this.message = "";

        if(numbers.length === 0) {
            resp = 0;
            this.message = "There are no numbers in the collection";
        } else {
            if(numbers.length === 1) {
                resp = numbers[0];
                this.message = "MCM is " + numbers[0];
            } else {
                this.message += "<b>Collection: [" + nummat + "]</b><br />";
                for(var p = 0; p < this.seed.length; p++) {
                    used = false;
                    for(var i = 0; i < nummat.length; i++) {
                        if((parseInt(nummat[i]) % parseInt(this.seed[p]) === 0)) {
                            this.message += nummat[i] + " is divisible by " + this.seed[p] + ". ";
                            if(used === false) {
                                used = true;
                                pricol.push(this.seed[p]);
                            }
                            nummat[i] = parseInt(nummat[i]) / parseInt(this.seed[p]);
                            this.message += "New Collection: " + nummat + "<br />";
                        }
                    }
                    if(used === true) {
                        p -= 1;
                    }
                }

                if(pricol.length > 0) {
                    this.message += "<i>Calculating MCM:</i><br />";
                    for(var t = 0; t < pricol.length; t++) {
                        if(t === 0) {
                            resp = parseInt(pricol[t]);
                            this.message += pricol[t];
                        } else {
                            resp *= parseInt(pricol[t]);
                            this.message += " x " + pricol[t];
                        }
                    }
                    this.message += "<br />";
                } else {
                    resp = 0;
                }

                this.message += "<b><i>MCM: " + resp + "</i></b>";
            }
        }

        return resp;
    }

    isDivisibleBy(val, num) {
        if((val % num) === 0) {
            return true;
        } else {
            return false;
        }
    }

    areDivisibleBy(col, num) {
        if(col.length === 0) {
            return false;
        } else if(col.length === 1) {
            if((parseInt(col[0]) % num) === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            for(var i = 0; i < col.length; i++) {
                if((parseInt(col[i]) % num) !== 0) {
                    return false;
                }
            }
            return true;
        }

    }
}