"use strict";

var es = "es6";
try { eval("(function *(){})"); } catch (err) { es = "es5"; }

let util = require("util");
let wf4node = require("../../../../deps/workflow-4-node");
let Composite = wf4node.activities.Composite;
let path = require("path");

/*
�ltal�nosan a rendszerr�l felt�telzz�k, hogy a tranzakci�k 100 adatot tartalmaznak,
1 ID t�pus� adatot 9 term�szetes azonos�t�t (lehet k�ls� kulcs de most csak bigint),
40-30-20 karakter - val�s sz�m illetve d�tum �rt�ket.
A tranzakci�k �s a be�ll�t�sok sz�ma �s el��ll�t�sa m�g megbesz�lend�, de kb.
A term�szetes azonos�t�k �rt�ke 1 s� 10000 k�z�tti v�letlen sz�m minden term�szetes azonos�t� eset�n.
Karakterek B+ term�kk�dok. sz�mok pozit�v v�letlenek, d�tumok 2010.01.01 �s 2014.12.31 k�z�ttiek.
Be�ll�t�sok lista vagy intervallum. Lista elemsz�ma 1 �s 100 k�z�tti, tartalma a k�d�rt�kek list�ja.
Intervallum eset�n a l�trehozott tranzakci�k alapj�n kb a 80% a a tranzakci�knak essen bele a l�trehozott intervallumokba.
*/

function TranGen() {
    Composite.call(this);
    this.reserved("collName", "transactions");
    this.reserved("size", 1000);
}

util.inherits(TranGen, Composite);

TranGen.prototype.createImplementation = function () {
    return {
        "@require": path.join(__dirname, "../../../../lib/" + es + "/activities"),
        block: {
            coll: {
                collectionRef: {
                    name: "= collName",
                    clearBeforeUse: true,
                    mustExists: false
                }
            },
            args: [
                {
                    for: {
                        from: 0,
                        to: "= size",
                        body: {
                            insert: {
                                collection: "= coll",
                                documents: {
                                    poo: 5
                                }
                            }
                        }
                    }
                }
            ]
        }
    };
};

module.exports = TranGen;