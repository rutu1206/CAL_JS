const BtnNumber = document.querySelectorAll(".Bnumber");
const BclearAll = document.querySelector(".allClear");
const Bdel = document.querySelector(".del");
const Bequl = document.querySelector(".equl");
let dataInput = document.querySelector(".inputdata");


class calculator {

    calculator(dInput) {
        this.dataInput = dInput;
        this.clearData();

    }

    clearData() {
        
        this.insertInput= '';
       
    }

    delData() {
        this.insertInput=this.insertInput.toString().slice(0,-1)

    }

    appandNumber(anumber) {

        if (anumber === '.' && this.insertInput.includes('.')) { return }

        //if(this.insertInput.startsWith('+')){return "invalid "}
        
        this.insertInput = this.insertInput.toString() + anumber.toString();
        console.log(this.insertInput);


    }
    op() {

        this.insertInput=eval(this.insertInput);
        

    }
    dataDiplay() {
        //console.log(this.insertInput);
        dataInput.value = this.insertInput;

    }
}

const calculator1 = new calculator(dataInput);
calculator1.clearData();

BtnNumber.forEach((btn) => {

    btn.addEventListener("click", () => {

        calculator1.appandNumber(btn.innerText);
        calculator1.dataDiplay();

    });
});

BclearAll.addEventListener("click", () => {

    calculator1.clearData();
    calculator1.dataDiplay();
})

Bdel.addEventListener("click", () => {

    calculator1.delData();
    calculator1.dataDiplay();
})

Bequl.addEventListener("click",()=>{

    calculator1.op();
    calculator1.dataDiplay();
});