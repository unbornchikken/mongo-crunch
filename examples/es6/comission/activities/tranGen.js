"use strict";

var es = "es6";
try { eval("(function *(){})"); } catch (err) { es = "es5"; }

let util = require("util");
let wf4node = require("../../../../deps/workflow-4-node");
let Composite = wf4node.activities.Composite;
let path = require("path");
let _ = require("lodash");

function TranGen() {
    Composite.call(this);

    this.collection = null;
    this.size = 1000;
}

util.inherits(TranGen, Composite);

TranGen.prototype.createImplementation = function () {
    return {
        "@require": path.join(__dirname, "../../../../lib/" + es + "/activities"),
        block: {
            coll: "= collection",
            args: [
                {
                    for: {
                        from: 0,
                        to: "= size",
                        body: {
                            insert: {
                                collection: "= coll",
                                documents: function () {
                                    let doc = {
                                        _id: this.get("i"),
                                        createdAt: new Date()
                                    };

                                    function key(num) {
                                        num = '' + num;
                                        return num.length === 1 ? "0" + num : num;
                                    }

                                    // 9 term�szetes azonos�t�t (lehet k�ls� kulcs de most csak bigint)
                                    // A term�szetes azonos�t�k �rt�ke 1 s� 10000 k�z�tti v�letlen sz�m minden term�szetes azonos�t� eset�n.
                                    const numOfID = 9;
                                    const maxID = 10000;
                                    for (let i = 0; i < numOfID; i++) {
                                        doc[`itemID${key(i)}`] = _.random(1, maxID);
                                    }

                                    // 40-30-20 karakter - val�s sz�m illetve d�tum �rt�ket.

                                    // 40 karakter - Karakterek B+ term�kk�dok.
                                    const numOfChars = 40;

                                    function genProdCode(i) {
                                        const start = (i % 10) + "A".charCodeAt(0);
                                        const len = (i % 3) + 3;
                                        let result = "";
                                        for (let x = 0; x < len; x++) {
                                            result += String.fromCharCode(start + _.random(0, 3));
                                        }
                                        return result;
                                    }

                                    for (let i = 0; i < numOfChars; i++) {
                                        doc[`prodCode${key(i)}`] = genProdCode(i);
                                    }

                                    // 30 val�s sz�m - sz�mok pozit�v v�letlenek
                                    const numOfNumbers = 30;
                                    const maxNum = 1000000;
                                    for (let i = 0; i < numOfNumbers; i++) {
                                        doc[`number${key(i)}`] = Math.random() * maxNum;
                                    }

                                    // 20 d�tum - d�tumok 2010.01.01 �s 2014.12.31 k�z�ttiek
                                    const numOfDates = 20;
                                    const minDate = new Date(2010, 1, 1);
                                    const maxDate = new Date(2014, 12, 31);
                                    let genDate = function () {
                                        return new Date(minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime()));
                                    };
                                    for (let i = 0; i < numOfDates; i++) {
                                        doc[`date${key(i)}`] = genDate();
                                    }

                                    return doc;
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